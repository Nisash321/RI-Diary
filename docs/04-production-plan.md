# Production plan: getting the section professionally done

## Recommendation

Treat this repository as the approved **design master**: structure, copy, diagrams and the full page layout are already resolved. Hire one experienced editorial or information designer to rebuild it in InDesign for print. Run compliance review in parallel, test the proof with five clients, and print the section as a 24-page insert on matt art paper.

This is faster and cheaper than briefing an agency from scratch, because the slow parts (deciding what goes on each page and checking every fact) are done. The designer's job is craft and prepress.

| Option | When it fits | Trade-off |
|---|---|---|
| **A. Freelance information designer + this master (recommended)** | The structure is approved and the diary goes to press in December | About 6 to 8 working days of design. Ram Investments keeps control of the content |
| B. Branding or design agency | The diary is part of a wider rebrand | 4 to 6 weeks, higher cost, and the structure is likely to be reopened |
| C. Print straight from the HTML proof | Internal review, or a digital-only PDF | The proof is RGB with no bleed. Colours will shift on press and trims are risky |

## Who does what

| Role | Who | Responsibilities |
|---|---|---|
| Content owner | A partner at Ram Investments | Approves copy, fills in registration details, owns the fact sheet |
| Compliance reviewer | Internal compliance officer, or an external consultant who knows the SEBI, AMFI, APMI and IRDAI advertising rules | Signs off every page against the checklist below |
| Information designer | Freelance, InDesign, with financial or editorial experience | Rebuilds the pages as print artwork and works with the printer on proofs |
| Printer | The diary printer | Paper, proofs, printing, binding |
| Partners | Insurers whose products you distribute | Written approval of the insurance pages (IRDAI advertising rules require insurer approval of intermediaries' advertisements) |

## Timeline to a December launch

Diwali falls on Sunday 8 November 2026, so expect approvals and printers to slow that week.

| Week | Dates (2026) | Work |
|---|---|---|
| 1 | 2–6 Nov | Approve the framework and page order. Choose A5 or B5 and the paper. Fill every `[placeholder]` (ARN, APRN, IRDAI registration, NCD channel, AIF and GIFT arrangements, contact details). Brief the designer and the printer |
| 2 | 9–13 Nov | Compliance checks the copy against the fact sheet and primary sources. Insurance pages go to insurers for approval. Designer starts the rebuild using the printer's specs |
| 3 | 16–20 Nov | Read-test with five clients. Designer delivers a full proof. Corrections |
| 4 | 23–27 Nov | Final compliance sign-off. Printer's hard proof and pen and pencil test on the chosen paper. **Files to printer by Friday 27 November** |
| 5–7 | 30 Nov–18 Dec | Printing and binding (confirm the lead time with your printer) |
| 8 | From 21 Dec | Distribution. Publish the online version behind the QR code |

## Designer brief

**Hand over:** `product-section/dist/know-your-products-proof.pdf` (layout master), `product-section/dist/know-your-products.html` (exact copy to paste from), `docs/02-framework.md` (the rules), and the fonts in `product-section/assets/fonts/`.

**Deliverables:**

- InDesign package with master pages for the left and right entry pages
- Print-ready PDF/X-1a or PDF/X-4, 3 mm bleed, crop marks, CMYK with the printer's profile
- Text kept live (not outlined), so corrections stay cheap
- A web-resolution PDF for WhatsApp and email

**Rules:**

- Keep the anatomy, the order and the six "At a glance" rows identical on every entry.
- Do not redraw regulator scales into new shapes or colours (riskometer, risk band, rating ladder).
- Legal text no smaller than 6 pt. Body text no smaller than 8.5 pt on A5.
- No return figures, performance tables, stock photos or product names.
- Any wording change goes back to compliance.

## Printer brief

| Item | Specification |
|---|---|
| Trim | A5, 148 × 210 mm portrait. B5 (176 × 250 mm) is a straight 119% scale-up |
| Bleed | 3 mm on all sides |
| Extent | 24 pages, four colours both sides. Section starts on a right-hand page |
| Paper | 100–120 gsm matt art (coated). It takes ballpoint and pencil and holds colour better than maplitho. If the diary body is 70 gsm maplitho, print this section as a separate insert |
| Finish | No gloss lamination or varnish on these pages, so people can write on them |
| Binding | As for the diary. Section-sewn case binding lies flat; a 15 mm inside margin is built in |
| Proofs | A hard proof of at least two spreads (one entry, one with the riskometer) before the run |
| Colour | CMYK on the press profile (for example FOGRA39 for coated stock) |

### Colour builds (starting values, confirm on the hard proof)

| Colour | Screen | CMYK |
|---|---|---|
| Neem green (Protect) | `#2D6A4F` | C80 M30 Y75 K20 |
| Neel indigo (Build) | `#2B3F87` | C95 M85 Y10 K2 |
| Jamun (Specialise) | `#7A2E5C` | C45 M95 Y30 K25 |
| Haldi (Globalise) | `#C47F0F` | C10 M55 Y100 K5 |
| Ink | `#1E1C1A` | K100 for text; C40 M30 Y30 K100 for large solid areas |
| Tints | | 12–15% of each solid |
| Risk ramp, low to high | | C85 M10 Y100 K5 · C55 M0 Y95 K0 · C5 M20 Y95 K0 · C0 M45 Y95 K0 · C0 M80 Y95 K0 · C15 M100 Y90 K10 |

## Compliance checklist

- [ ] Every **Verify** item in [03-fact-sheet.md](03-fact-sheet.md) checked against the primary source, and the "Facts as of" date updated.
- [ ] Mutual fund standard warning printed verbatim and legibly. "AMFI Registered Mutual Fund Distributor" with the ARN.
- [ ] SIF warning wording confirmed. SIFD shown. Staff selling SIFs hold NISM Series V-D (or a valid Series XIII plus V-A until it expires).
- [ ] PMS pages show the APRN, make no performance claims, and fit the advertising code in the 2026 PMS regulations.
- [ ] AIF page is education only: no scheme names, private placement stated, "not an offer" stated.
- [ ] Insurance pages approved in writing by each insurer partner. IRDAI registration shown. No wording that disparages other insurance products.
- [ ] NCD page shows the channel's registration (stock broker or online bond platform). No named issues or rates.
- [ ] GIFT City page: LRS and TCS figures current at print. IFSC distribution arrangement disclosed. No tax claims beyond what is printed.
- [ ] No assured-return language, no celebrities, and the firm is not described as an "adviser" (AMFI naming rules for distributors).
- [ ] Commission disclosure and grievance routes present and correct.

## Client read-test

Before the final proof goes to the printer, give it to five clients of different ages and portfolio sizes for 20 minutes each. Ask them to:

1. Find the minimum for a PMS, and say when they could get money out of an AIF.
2. Pick a product for a scenario you describe ("I want regular income and can wait three years").
3. Fill in "Work out your cover" for themselves.

Watch where they hesitate or misread. If two of the five stumble on the same line, rewrite it. Consumer-testing research on financial disclosures finds that small wording changes make a measurable difference to understanding.

## Keeping it current after printing

Print a QR code on page 1 that opens an online copy of the section. The HTML in this repository can be hosted as that page. Update the online copy when:

- the new PMS regulations take effect (1 April 2027);
- the Union Budget changes tax rates or TCS (1 February 2027);
- DICGC deposit insurance cover changes;
- SEBI changes SIF, mutual fund or AIF rules.

## Later editions

- **Regional language editions.** Mukta has Devanagari and Tamil companions (Mukta Malar), and Anek has Tamil, Devanagari and other Indian scripts, so a Hindi or Tamil edition keeps the same design.
- **Larger print.** B5 gives about 19% larger text with no relayout.
- **A ninth product** (for example NPS or bonds) is one more entry in `products.mjs`, a plate and a gauge. See section 7 of [02-framework.md](02-framework.md).
