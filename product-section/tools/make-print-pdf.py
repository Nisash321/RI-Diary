#!/usr/bin/env python3
"""Make a CorelDRAW-friendly print copy of a proof PDF, without changing the pages.

1. Colours: every RGB colour becomes CMYK.
   - Brand solids, tints and the riskometer use the builds in docs/04-production-plan.md.
   - Deep variants keep their solid's CMY and add black to match their lightness.
   - Neutral greys and ink become black only (K), so small text stays sharp on press.
   - Anything else, and pictures, go through an ICC conversion.
2. Text becomes outlines (Ghostscript -dNoOutputFonts), so no fonts are needed.

Usage: make-print-pdf.py in.pdf out.pdf
Needs: pikepdf, Pillow, Ghostscript (gs).
"""
import io, subprocess, sys, tempfile, zlib
import pikepdf
from PIL import Image, ImageCms

CMYK_ICC = "/usr/share/color/icc/ghostscript/default_cmyk.icc"

# Builds from docs/04-production-plan.md (percent).
SOLIDS = {
    "#2d6a4f": (80, 30, 75, 20),   # neem green, Protect
    "#2b3f87": (95, 85, 10, 2),    # neel indigo, Build
    "#7a2e5c": (45, 95, 30, 25),   # jamun, Specialise
    "#c47f0f": (10, 55, 100, 5),   # haldi, Globalise
}
DEEP = {"#1f4f3a": "#2d6a4f", "#1d2c63": "#2b3f87", "#5a1f43": "#7a2e5c", "#8c5a07": "#c47f0f"}
TINTS = {"#e2efe7": "#2d6a4f", "#e3e7f4": "#2b3f87", "#f3e3ec": "#7a2e5c", "#f9ecd2": "#c47f0f"}
RISK = {
    "#1f8a3d": (85, 10, 100, 5), "#7cb342": (55, 0, 95, 0), "#f2c318": (5, 20, 95, 0),
    "#f39a1e": (0, 45, 95, 0), "#e2531f": (0, 80, 95, 0), "#b3202a": (15, 100, 90, 10),
}
INK = "#1e1c1a"

srgb = ImageCms.createProfile("sRGB")
lab = ImageCms.createProfile("LAB")
cmyk_prof = ImageCms.getOpenProfile(CMYK_ICC)
RGB2CMYK = ImageCms.buildTransform(srgb, cmyk_prof, "RGB", "CMYK", renderingIntent=1)
CMYK2LAB = ImageCms.buildTransform(cmyk_prof, lab, "CMYK", "LAB", renderingIntent=1)
RGB2LAB = ImageCms.buildTransform(srgb, lab, "RGB", "LAB", renderingIntent=1)


def hex_rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def L_rgb(rgb):
    return ImageCms.applyTransform(Image.new("RGB", (1, 1), rgb), RGB2LAB).getpixel((0, 0))[0] * 100 / 255


def L_cmyk(c):
    px = tuple(round(v * 2.55) for v in c)
    return ImageCms.applyTransform(Image.new("CMYK", (1, 1), px), CMYK2LAB).getpixel((0, 0))[0] * 100 / 255


def solve_k(cmy, target_L):
    """Smallest K (0-100) at which cmy+K is no lighter than target_L."""
    for k in range(0, 101):
        if L_cmyk((*cmy, k)) <= target_L:
            return k
    return 100


def icc(rgb):
    px = ImageCms.applyTransform(Image.new("RGB", (1, 1), rgb), RGB2CMYK).getpixel((0, 0))
    return tuple(round(v / 2.55) for v in px)


L_INK, L_K100 = L_rgb(hex_rgb(INK)), L_cmyk((0, 0, 0, 100))
_cache = {}


def to_cmyk(rgb):
    """rgb: 0-255 ints. Returns CMYK percent tuple."""
    if rgb in _cache:
        return _cache[rgb]
    h = "#%02x%02x%02x" % rgb
    r, g, b = rgb
    if h in SOLIDS:
        out = SOLIDS[h]
    elif h in RISK:
        out = RISK[h]
    elif h in TINTS:
        s = hex_rgb(TINTS[h])
        frac = sum((255 - t) / (255 - c) for t, c in zip(rgb, s)) / 3
        frac = min(max(frac, .12), .15)
        out = tuple(round(v * frac) for v in SOLIDS[TINTS[h]])
    elif h in DEEP:
        solid = SOLIDS[DEEP[h]]
        target = L_cmyk(solid) + (L_rgb(rgb) - L_rgb(hex_rgb(DEEP[h])))
        out = (*solid[:3], max(solid[3], solve_k(solid[:3], target)))
    elif max(rgb) - min(rgb) <= 16:   # neutral: black ink only
        if rgb == (255, 255, 255):
            out = (0, 0, 0, 0)
        elif L_rgb(rgb) <= L_INK + .5:
            out = (0, 0, 0, 100)
        else:   # keep each grey's place between paper white and the ink
            t = L_K100 + (L_rgb(rgb) - L_INK) * (100 - L_K100) / (100 - L_INK)
            out = (0, 0, 0, solve_k((0, 0, 0), t))
    else:
        out = icc(rgb)
    _cache[rgb] = out
    return out


def snap(rgb):
    """Map anti-aliased pixels of a known colour to that colour."""
    known = [hex_rgb(h) for h in (*SOLIDS, *DEEP, *TINTS, *RISK, INK)]
    best = min(known, key=lambda k: sum((a - b) ** 2 for a, b in zip(k, rgb)))
    return best if sum((a - b) ** 2 for a, b in zip(best, rgb)) <= 75 else rgb


def recolour_stream(ops):
    out = []
    for operands, op in ops:
        o = str(op)
        if o in ("rg", "RG"):
            rgb = tuple(round(float(v) * 255) for v in operands)
            c = to_cmyk(rgb)
            out.append(([round(v / 100, 4) for v in c], pikepdf.Operator("k" if o == "rg" else "K")))
        elif o in ("g", "G", "sc", "SC"):
            raise SystemExit(f"unhandled colour operator {o}")
        else:
            out.append((operands, op))
    return out


def recolour_image(x):
    from pikepdf import PdfImage
    pil = PdfImage(x).as_pil_image().convert("RGB")
    cs = x.get("/ColorSpace")
    if isinstance(cs, pikepdf.Array) and cs[0] == "/ICCBased":
        src = ImageCms.ImageCmsProfile(io.BytesIO(cs[1].read_bytes()))
        cmyk = ImageCms.applyTransform(pil, ImageCms.buildTransform(src, cmyk_prof, "RGB", "CMYK", renderingIntent=1))
    else:   # small chart tiles: map each pixel through the same colour table
        cmyk = Image.new("CMYK", pil.size)
        cmyk.putdata([tuple(round(v * 2.55) for v in to_cmyk(snap(p))) for p in pil.getdata()])
    x.write(zlib.compress(cmyk.tobytes()), filter=pikepdf.Name.FlateDecode)
    x.ColorSpace = pikepdf.Name.DeviceCMYK
    x.BitsPerComponent = 8
    for k in ("/DecodeParms", "/Decode"):
        if k in x:
            del x[k]


def main(src, dst):
    pdf = pikepdf.open(src)
    done = set()

    def walk_resources(res):
        if res is None:
            return
        for x in res.get("/XObject", {}).values():
            if x.objgen in done:
                continue
            done.add(x.objgen)
            if x.Subtype == "/Image":
                recolour_image(x)
            elif x.Subtype == "/Form":
                x.write(pikepdf.unparse_content_stream(recolour_stream(pikepdf.parse_content_stream(x))))
                walk_resources(x.get("/Resources"))
        for p in res.get("/Pattern", {}).values():
            if p.objgen in done:
                continue
            done.add(p.objgen)
            if p.get("/PatternType") == 1:
                p.write(pikepdf.unparse_content_stream(recolour_stream(pikepdf.parse_content_stream(p))))
                walk_resources(p.get("/Resources"))
            else:
                sh = p.Shading
                f = sh.Function
                if sh.ColorSpace != "/DeviceRGB" or f.FunctionType != 2:
                    raise SystemExit("unhandled shading")
                for key in ("/C0", "/C1"):
                    rgb = tuple(round(float(v) * 255) for v in f[key])
                    f[key] = [round(v / 100, 4) for v in to_cmyk(rgb)]
                sh.ColorSpace = pikepdf.Name.DeviceCMYK
        for gstate in res.get("/ExtGState", {}).values():
            if "/SMask" in gstate and gstate.SMask != "/None":
                raise SystemExit("soft masks in graphics state are not handled")

    for page in pdf.pages:
        page.contents_coalesce()
        page.obj.Contents.write(pikepdf.unparse_content_stream(recolour_stream(pikepdf.parse_content_stream(page))))
        walk_resources(page.obj.get("/Resources"))

    with tempfile.TemporaryDirectory() as tmp:
        mid = f"{tmp}/cmyk.pdf"
        pdf.save(mid)
        subprocess.run([
            "gs", "-q", "-dNOPAUSE", "-dBATCH", "-dSAFER", "-sDEVICE=pdfwrite", f"-sOutputFile={dst}",
            "-dCompatibilityLevel=1.4", "-dNoOutputFonts", "-sColorConversionStrategy=LeaveColorUnchanged",
            "-dAutoRotatePages=/None", "-dDownsampleColorImages=false", "-dDownsampleGrayImages=false",
            "-dDownsampleMonoImages=false", "-dAutoFilterColorImages=false", "-dColorImageFilter=/FlateEncode",
            "-dAutoFilterGrayImages=false", "-dGrayImageFilter=/FlateEncode", mid,
        ], check=True)

    print("colour map (RGB -> CMYK %):")
    for rgb, c in sorted(_cache.items(), key=lambda kv: kv[1]):
        print("  #%02x%02x%02x" % rgb, "C%d M%d Y%d K%d" % c)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
