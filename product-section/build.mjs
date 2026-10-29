// Builds the "Know Your Products" diary section.
//
//   node product-section/build.mjs            -> dist/know-your-products.html
//   node product-section/build.mjs --render   -> also the proof PDF and spread PNGs
//
// Product spreads are generated from src/content/products.mjs so copy lives in
// one place. Front and back matter are hand-set HTML in src/pages/.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { products, meta } from "./src/content/products.mjs";
import { productSpread } from "./src/templates/product.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(root, "src");
const dist = path.join(root, "dist");
const render = process.argv.includes("--render");

const read = (p) => readFile(path.join(src, p), "utf8");
const readOr = async (p, fallback) => (existsSync(path.join(src, p)) ? read(p) : fallback);

// Front and back matter: each file holds one or more <section class="page">.
// The {{page}} token is replaced with the running page number.
async function matter(file) {
  return read(`pages/${file}`);
}

function paginate(html, startPage) {
  let n = startPage;
  return html.replace(/\{\{page\}\}/g, () => String(n++));
}

async function build() {
  const css = (await read("styles/tokens.css")) + "\n" + (await read("styles/diary.css"));

  // Page order. Page 1 is a right-hand page, so every product spread starts
  // on an even (left-hand) page: 4-5, 6-7 ... 18-19.
  const front = await matter("front.html");
  const back = await matter("back.html");
  const countPages = (html) => (html.match(/<section class="page/g) || []).length;

  // Entries follow the front matter. A product may carry an "in depth"
  // spread (p.extra) that sits straight after its own entry.
  let pageNo = countPages(front) + 1;
  const productPages = [];
  for (const p of products) {
    const plate = await readOr(`plates/${p.id}.svg`, `<svg viewBox="0 0 122 78"><rect width="122" height="78" class="f-panel"/><text x="61" y="40" class="t-cap mid">Plate to come</text></svg>`);
    const gauge = await readOr(`gauges/${p.id}.html`, `<svg viewBox="0 0 122 26"><rect width="122" height="26" class="f-panel"/><text x="61" y="14" class="t-cap mid">Gauge to come</text></svg>`);
    productPages.push(productSpread(p, { plate, gauge, verso: pageNo, total: products.length, meta }));
    pageNo += 2;
    if (p.extra) {
      const extra = await matter(p.extra);
      productPages.push(paginate(extra, pageNo));
      pageNo += countPages(extra);
    }
  }

  let pages = paginate(front, 1) + productPages.join("\n") + paginate(back, pageNo);

  // Cross-references: {{pg:<section id>}} becomes that section's page number.
  const pageOf = {};
  [...pages.matchAll(/<section class="page[^>]*>/g)].forEach((m, i) => {
    const id = m[0].match(/id="([^"]+)"/);
    if (id) pageOf[id[1]] = i + 1;
  });
  pages = pages.replace(/\{\{pg:([a-z0-9-]+)\}\}/g, (_, id) => {
    if (!(id in pageOf)) throw new Error(`unknown page reference {{pg:${id}}}`);
    return String(pageOf[id]);
  });
  pages = pages.replace(/\{\{asof\}\}/g, meta.asOf).replace(/\{\{year\}\}/g, meta.diaryYear).replace(/\{\{firm\}\}/g, meta.firm);

  // Group pages into spreads for screen view: [1], [2,3], [4,5] ... [24]
  const sections = pages.match(/<section class="page[\s\S]*?<\/section>\s*<!-- \/page -->/g) || [];
  const spreads = [];
  spreads.push(`<div class="spread single-recto"><span class="spread-label">Page 1</span><div class="blank"></div>${sections[0]}</div>`);
  for (let i = 1; i < sections.length - 1; i += 2) {
    spreads.push(`<div class="spread"><span class="spread-label">Pages ${i + 1}–${i + 2}</span>${sections[i]}${sections[i + 1] || ""}</div>`);
  }
  if (sections.length % 2 === 0) {
    const last = sections.length;
    spreads.push(`<div class="spread single-verso"><span class="spread-label">Page ${last}</span>${sections[last - 1]}<div class="blank"></div></div>`);
  }

  const html = `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Know Your Products · ${meta.firm} Diary ${meta.diaryYear} (proof)</title>
<style>
${css}
</style>
</head>
<body>
<main class="book">
${spreads.join("\n")}
</main>
</body>
</html>
`;

  await mkdir(dist, { recursive: true });
  const out = path.join(dist, "know-your-products.html");
  await writeFile(out, html);
  console.log(`wrote ${path.relative(process.cwd(), out)} (${sections.length} pages, ${spreads.length} spreads)`);
  return { out, pageCount: sections.length, spreadCount: spreads.length };
}

async function renderOutputs({ out, spreadCount }) {
  // Playwright is installed globally; createRequire honours NODE_PATH.
  const { chromium } = createRequire(import.meta.url)("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(out).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  // Overflow check: any element whose content runs past its page box.
  const problems = await page.evaluate(() => {
    const issues = [];
    document.querySelectorAll(".page").forEach((pg, idx) => {
      const box = pg.getBoundingClientRect();
      pg.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) return;
        if (r.bottom > box.bottom + 0.5 || r.right > box.right + 0.5 || r.left < box.left - 0.5) {
          issues.push(`page ${idx + 1}: <${el.tagName.toLowerCase()} class="${el.className?.baseVal ?? el.className}"> outside page`);
        }
      });
      // Content colliding with the folio zone (bottom 9 mm)
      const legal = pg.querySelector(".legal, .lower");
      if (legal) {
        const mm = box.height / 210;
        const lr = legal.getBoundingClientRect();
        if (lr.bottom > box.bottom - 8.5 * mm) issues.push(`page ${idx + 1}: ${legal.className} reaches folio zone`);
      }
      // Text clipped inside its own box
      pg.querySelectorAll("dd, li, p, .field").forEach((el) => {
        if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow !== "visible") {
          issues.push(`page ${idx + 1}: clipped ${el.tagName}`);
        }
      });
      // Any text running into the folio, or past the side margins
      const mm = box.height / 210;
      const folio = pg.querySelector(".folio");
      const folioTop = folio ? folio.getBoundingClientRect().top : box.bottom - 12 * mm;
      const cs = getComputedStyle(pg);
      const left = box.left + parseFloat(cs.paddingLeft), right = box.right - parseFloat(cs.paddingRight);
      const hasText = (el) =>
        el.tagName === "text" || [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      pg.querySelectorAll("*").forEach((el) => {
        if (!hasText(el) || (folio && folio.contains(el))) return;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const label = `"${el.textContent.trim().slice(0, 40)}"`;
        if (r.bottom > folioTop - 0.8 * mm) issues.push(`page ${idx + 1}: text reaches the folio: ${label}`);
        const over = Math.max(r.right - right, left - r.left) / mm;
        if (over > 1) issues.push(`page ${idx + 1}: text ${over.toFixed(1)} mm outside the margins: ${label}`);
      });
    });
    // The side-by-side spread only works if rows line up across the fold.
    const tables = [...document.querySelectorAll("table.sbs")];
    if (tables.length === 2) {
      const rows = tables.map((t) => [...t.rows].map((r) => Math.round(r.getBoundingClientRect().height * 10) / 10));
      rows[0].forEach((h, i) => {
        if (Math.abs(h - rows[1][i]) > 0.6) issues.push(`side-by-side row ${i} differs: ${h}px vs ${rows[1][i]}px`);
      });
    }
    return [...new Set(issues)];
  });
  if (problems.length) console.warn("layout warnings:\n  " + problems.slice(0, 60).join("\n  "));
  else console.log("layout check: no overflow found");

  const previews = path.join(dist, "previews");
  await mkdir(previews, { recursive: true });
  const spreads = await page.$$(".spread");
  for (const [i, el] of spreads.entries()) {
    await el.screenshot({ path: path.join(previews, `spread-${String(i).padStart(2, "0")}.png`) });
  }
  console.log(`wrote ${spreads.length} spread previews`);

  const pdfPath = path.join(dist, "know-your-products-proof.pdf");
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: pdfPath, width: "148mm", height: "210mm", printBackground: true, preferCSSPageSize: true });
  console.log(`wrote ${path.relative(process.cwd(), pdfPath)}`);
  await browser.close();
}

const result = await build();
if (render) await renderOutputs(result);
