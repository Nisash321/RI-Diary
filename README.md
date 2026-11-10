# RI Diary · "Know Your Products"

The product section of the Ram Investments 2027 diary: a 27-page field guide to the eight products the firm offers. Each product gets the same two-page entry, so clients learn the layout once and can compare products side by side. SIF and AIF also get an in-depth spread straight after their entry.

![Term insurance spread](product-section/dist/previews/spread-01.png)

## What is in the section

| Pages | Content |
|---|---|
| 1–2 | Opener and contents · where to start (goal finder and minimums) |
| 3–8 | Term Insurance, Health Insurance, Mutual Funds |
| 9–12 | SIF, then SIF in depth |
| 13–16 | NCDs, PMS |
| 17–20 | AIF, then AIF in depth (private markets) |
| 21–22 | GIFT City |
| 23–24 | All eight compared across one spread |
| 25–27 | Words to know · quarterly money check-up · how we help you and important information |

The products are grouped by the job they do: **Protect** (term, health), **Build** (mutual funds, SIF, NCDs), **Specialise** (PMS, AIF) and **Globalise** (GIFT City). SIF sits next to mutual funds so fund investors read it next and see it as part of the same portfolio.

Two house rules run through every page: **no returns** (no return figures, projections or growth illustrations), and **family-first wording** on the insurance pages (no talk of death; the cover keeps the family's plans on track). Both are set out in [`docs/02-framework.md`](docs/02-framework.md).

## Files

| Path | What it is |
|---|---|
| [`product-section/dist/ram-investments-diary-2027-proof.pdf`](product-section/dist/ram-investments-diary-2027-proof.pdf) | Everything in one file: the four opening pages, then the 27-page product guide (31 pages) |
| [`product-section/dist/know-your-products-proof.pdf`](product-section/dist/know-your-products-proof.pdf) | 27-page A5 proof for review |
| [`product-section/dist/diary-front-proof.pdf`](product-section/dist/diary-front-proof.pdf) | The diary's four opening pages: compliments and contacts, a two-page tax reckoner for tax year 2026–27 (laid out like a fund-house reckoner: rates by type of investor, STT, key dates, lettered notes), and our story |
| [`product-section/dist/previews/`](product-section/dist/previews/) | One image per spread |
| [`docs/01-visual-benchmarks.md`](docs/01-visual-benchmarks.md) | What asset managers, insurers and regulators do well visually, how Indian insurers talk about protection, and what we adopted |
| [`docs/02-framework.md`](docs/02-framework.md) | The framework: section plan, four jobs, anatomy of an entry and of the in-depth spreads, visual and writing rules, the no-returns rule and the insurance tone guide |
| [`docs/03-fact-sheet.md`](docs/03-fact-sheet.md) | Every fact on the pages with its source and what compliance still has to verify, plus the figures researched but held back |
| [`docs/04-production-plan.md`](docs/04-production-plan.md) | How to get it professionally done: roles, timeline, designer and printer briefs, compliance checklist |
| `product-section/src/` | Source: copy (`content/products.mjs`), diagrams (`plates/`), gauges (`gauges/`), front and back matter and the in-depth spreads (`pages/`), styles |
| `product-section/assets/fonts/` | Anek Latin and Mukta (SIL Open Font License) |

## Rebuilding the proof

Requires Node 18+ and Playwright with Chromium.

```sh
node product-section/build.mjs            # HTML only
node product-section/build.mjs --render   # HTML, proof PDF and spread previews
```

The build warns if text runs off a page, past the side margins or into the folio, or if the side-by-side rows stop lining up. Page numbers and cross-references are worked out by the build.

## Before printing

1. Confirm the printed registrations and contacts on pages 4, 6, 8, 10, 12, 16 and 27 and on the welcome page: ARN-14532 and ARN-328299 (mutual funds), ARN-328299 (SIFs), APRN-07532 (PMS), IRDAI Advisor Code 9504277 (insurance, Sujeetha Nishanth), the Dindigul address, four phone numbers, support@raminvestments.in. NCD, AIF and GIFT IFSC identifiers are left out by the firm's decision.
2. Have compliance check each **Verify** item in the fact sheet against the primary regulation, and refresh the **Refresh** items (SIF assets, AIF commitments).
3. Have a tax adviser sign off the SIF tax statements.
4. Get written approval for the insurance pages from each insurer partner.
5. Have the designer rebuild the pages for press (CMYK, 3 mm bleed). The HTML proof is the layout master, not the press file.

Facts are as of October 2026.

The logo on the opening pages is cropped from a scan of the 2026 diary, for the proof only. The designer should replace it with the original artwork.
