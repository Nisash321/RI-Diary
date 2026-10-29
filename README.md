# RI Diary · "Know Your Products"

The product section of the Ram Investments 2027 diary: a 24-page field guide to the eight products the firm offers. Each product gets the same two-page entry, so clients learn the layout once and can compare products side by side.

![Term insurance spread](product-section/dist/previews/spread-02.png)

## What is in the section

| Pages | Content |
|---|---|
| 1–3 | Opener and contents · how to read an entry · four jobs your money can do |
| 4–19 | Eight entries: Term Insurance, Health Insurance, Mutual Funds, NCDs, SIF, PMS, AIF, GIFT City |
| 20–21 | All eight compared across one spread |
| 22–24 | Words to know · quarterly money check-up · important information |

The products are grouped by the job they do: **Protect** (term, health), **Build** (mutual funds, NCDs), **Specialise** (SIF, PMS, AIF) and **Globalise** (GIFT City).

## Files

| Path | What it is |
|---|---|
| [`product-section/dist/know-your-products-proof.pdf`](product-section/dist/know-your-products-proof.pdf) | 24-page A5 proof for review |
| [`product-section/dist/previews/`](product-section/dist/previews/) | One image per spread |
| [`docs/01-visual-benchmarks.md`](docs/01-visual-benchmarks.md) | What asset managers, insurers and regulators do well visually, and what we adopted |
| [`docs/02-framework.md`](docs/02-framework.md) | The framework: section plan, four jobs, anatomy of an entry, visual and writing rules |
| [`docs/03-fact-sheet.md`](docs/03-fact-sheet.md) | Every fact on the pages with its source and what compliance still has to verify |
| [`docs/04-production-plan.md`](docs/04-production-plan.md) | How to get it professionally done: roles, timeline, designer and printer briefs, compliance checklist |
| `product-section/src/` | Source: copy (`content/products.mjs`), diagrams (`plates/`), gauges (`gauges/`), front and back matter (`pages/`), styles |
| `product-section/assets/fonts/` | Anek Latin and Mukta (SIL Open Font License) |

## Rebuilding the proof

Requires Node 18+ and Playwright with Chromium.

```sh
node product-section/build.mjs            # HTML only
node product-section/build.mjs --render   # HTML, proof PDF and spread previews
```

The build warns if text runs off a page or if the side-by-side rows stop lining up.

## Before printing

1. Fill every `[placeholder]` (ARN, APRN, IRDAI registration, NCD channel, AIF and GIFT City arrangements, contact details).
2. Have compliance check each **Verify** item in the fact sheet against the primary regulation.
3. Get written approval for the insurance pages from each insurer partner.
4. Have the designer rebuild the pages for press (CMYK, 3 mm bleed). The HTML proof is the layout master, not the press file.

Facts are as of October 2026.
