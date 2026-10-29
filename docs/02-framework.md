# The framework: "Know Your Products"

## In one paragraph

The product section is a field guide. Eight products sit under four jobs a client's money can do: **Protect, Build, Specialise, Globalise.** Every product gets the same two-page entry: the left page helps the reader recognise it, the right page helps them decide whether it fits. Risk is shown only on scales the regulators already use. Each entry ends with space for the client's own numbers, which turns a brochure into a page they keep using all year.

## 1. Section plan (24 pages)

The section starts on a right-hand page so every entry opens as a facing spread.

| Page | Content |
|---|---|
| 1 | Opener: title, how the guide works, contents |
| 2 | How to read an entry (annotated miniature spread) |
| 3 | Four jobs your money can do, ticket-size ladder, "before you move right" checklist |
| 4–5 | 01 Term Insurance |
| 6–7 | 02 Health Insurance |
| 8–9 | 03 Mutual Funds |
| 10–11 | 04 NCDs |
| 12–13 | 05 SIF |
| 14–15 | 06 PMS |
| 16–17 | 07 AIF |
| 18–19 | 08 GIFT City |
| 20–21 | Side by side: all eight compared across the spread |
| 22 | Words to know (28 terms) |
| 23 | Your money check-up (quarterly tick boxes, review dates) |
| 24 | Important information: registrations, warnings, grievances |

24 pages make one 16-page and one 8-page signature, or a single insert on heavier paper.

## 2. The four jobs

| Job | Products | The client's question | Colour |
|---|---|---|---|
| Protect | Term insurance, health insurance | "If something happens to me, is my family covered?" | Neem green |
| Build | Mutual funds, NCDs | "How do I grow wealth and earn an income?" | Neel indigo |
| Specialise | SIF, PMS, AIF | "My portfolio is large. What more can I do?" | Jamun |
| Globalise | GIFT City | "How do I invest beyond India?" | Haldi |

**Why this order.** Protection comes before investing, which is standard financial-planning practice and the order a regulator would expect a distributor to follow. Within Specialise, products climb by minimum ticket: SIF (₹10 lakh), PMS (₹50 lakh, or ₹25 lakh on the PRIM route from April 2027), AIF (₹1 crore). Globalise comes last because it is a route that can hold many kinds of assets, not an asset class of its own.

The job, not the product, sets the colour, so a reader can tell at a glance which part of their plan a page belongs to.

## 3. Anatomy of an entry

### Left page: recognise it

| Part | Rule |
|---|---|
| Entry number and job chip | Number in the job colour; job named in the running head |
| Title and formal name | The name clients use, then the formal name and regulator |
| In one line | Two or three sentences. No jargon that is not explained in the same sentence |
| How it works (the plate) | One diagram of the mechanism, ideally with a worked example. Drawn to scale or marked "not to scale" or "illustration" |
| How to recognise it | Three features that set the product apart. No numbers that repeat "At a glance" |
| Often confused with | The look-alike and the one-line difference |

### Right page: decide if it fits

| Part | Rule |
|---|---|
| At a glance | The same six rows for every product: Regulator, Minimum (or What you pay), Time commitment, Money out (or When it pays), Costs, Tax in brief |
| Ticket ruler | For investments, the minimum on one log scale from ₹100 to ₹1 crore, identical on every page |
| The check that matters most | The regulator's own scale where one exists (riskometer, risk band, credit rating). Otherwise the single most useful check: cover worksheet, fine-print table, concentration, profit waterfall, currency effect |
| Suits you if / Think twice if | Three each. "Think twice" names the people the product does not suit |
| Ask before you sign | Four questions with tick boxes |
| My notes | Four write-in fields specific to the product |
| Legal line | The exact standard warning, plus the registration line for that product |

## 4. Visual system

- **Page:** A5, 148 × 210 mm. Margins 11 mm top and outer, 12 mm bottom, 15 mm inside for the binding. A5 and B5 share the same proportions, so the whole section scales to B5 without re-layout; B5 gives older readers 19% larger type.
- **Type:** Anek Latin for headings and labels, Mukta for reading. Both are from Ek Type, an Indian foundry, carry the ₹ sign, and have Devanagari and Tamil companions for a regional-language edition. Both are free to print under the SIL Open Font License.
- **Sizes:** body 8.6 pt, lead sentences 10.2 pt, smallest legal text 6.3 pt. On B5 these become about 10.2, 12.1 and 7.5 pt.
- **Colour:** four job colours plus their tints, a warm near-black, and a separate SEBI-style green-to-red ramp used only for risk scales. Job colours never carry risk meaning.
- **Charts:** marks drawn to scale (the NCD circles by area, the currency bars by percentage, the ticket ladder on a ten-times scale). Anything schematic says "not to scale" or "illustration".
- **No photographs, emoji or decorative icons.** Every graphic explains something.

## 5. Writing rules

- Plain words, short sentences, active voice. Explain a term the first time it appears, then use it consistently.
- Indian number formats: ₹10 lakh, ₹1 crore, USD 2,50,000 (RBI style).
- Typical values say "often" or "usually". Rules and limits are stated flatly and dated.
- No promise or hint of returns. The only return figures are labelled arithmetic illustrations.
- Every page carries "Facts as of October 2026".

## 6. Compliance built into the design

- The section explains **categories**, never named schemes, funds, insurers or issuers, so it reads as investor education.
- Standard warnings are printed **verbatim** in bold where a regulator prescribes them.
- Each entry carries the registration line for that product (ARN, SIFD, APRN, IRDAI registration and so on).
- The AIF entry states that AIFs are offered only by private placement, and that the page is not an offer.
- Insurance pages need written approval from each insurer whose products are distributed (IRDAI advertising rules).
- See [03-fact-sheet.md](03-fact-sheet.md) for every claim and its source.

## 7. Changing or adding a product

All copy lives in `product-section/src/content/products.mjs`. Each product's diagram is in `src/plates/<id>.svg` and its gauge in `src/gauges/<id>.html`. Run `node product-section/build.mjs --render` to rebuild the HTML, the proof PDF and the spread previews. The build warns if any text runs off a page, or if the side-by-side rows stop lining up.

To add a ninth product (for example NPS or bonds), add an object to `products`, a plate and a gauge, and extend the contents, the side-by-side spread and page numbering in `src/pages/`.
