// Copy for the eight product entries. Every fact here is listed with its
// source in docs/03-content-fact-sheet.md. Change a fact in both places.
//
// Placeholders in [square brackets] are registration details that only
// the firm can fill in (ARN, APRN, IRDAI registration and so on).

export const meta = {
  firm: "Ram Investments",
  diaryYear: "2027",
  asOf: "October 2026",
};

const insuranceLegal =
  "Insurance is underwritten by the insurer. {{firm}} is [IRDAI registration type and number]. " +
  "For details on risk factors, terms and conditions, read the sales brochure carefully before concluding a sale.";

export const products = [
  {
    id: "term",
    no: "01",
    job: "protect",
    short: "Term insurance",
    title: "Term Insurance",
    formal: "Pure term life cover · regulated by IRDAI",
    oneLine:
      "You pay a premium every year. If you die during the policy term, your nominee receives the full sum assured. " +
      "If you outlive the term, nothing is paid, which is why a large cover stays affordable.",
    plateTitle: "How it works",
    marks: [
      "Pays only if you die during the term. There is no maturity value.",
      "The premium is fixed when you buy and usually stays the same for the whole term.",
      "Riders can add cover for accidental death, critical illness or waiver of premium.",
    ],
    confused: [
      {
        name: "Return-of-premium and endowment plans",
        text: "They pay money back if you survive, but cost much more for the same cover. A term plan keeps protection and saving separate.",
      },
    ],
    glance: [
      ["Regulator", "IRDAI"],
      ["What you pay", "A premium, yearly or monthly. It depends on your age, health, habits, cover and term."],
      ["Time commitment", "The term you choose, usually until your earning years end (age 60–70). You get 30 days to return a new policy (free look)."],
      ["When it pays", "On death during the term, to your nominee. IRDAI allows 15 days to settle a claim, or 45 if it needs investigation."],
      ["Costs", "Only the premium. No GST on individual policies since 22 September 2025."],
      ["Tax in brief", "Old regime: premium deductible under Sec. 123 (earlier 80C). The payout to your nominee is tax-free."],
    ],
    gaugeTitle: "Work out your cover",
    gaugeAside: "Rule of thumb: 10 to 15 times yearly income",
    suits: [
      "Someone depends on your income: spouse, children or parents.",
      "You have a home loan or other debts your family would inherit.",
      "You want the largest cover for the lowest premium.",
    ],
    twice: [
      "No one depends on your income and you have no debts.",
      "You want money back at the end. That is a savings goal.",
      "You cannot disclose your health and habits fully. Non-disclosure can get a claim rejected.",
    ],
    ask: [
      "Is the cover enough for my family, including my loans?",
      "Have I disclosed every illness, habit and existing policy?",
      "Who is my nominee, and does my family know this policy exists?",
      "What is the insurer’s claim settlement record?",
    ],
    notes: ["Insurer", "Cover ₹", "Premium due", "Nominee"],
    legal: insuranceLegal,
  },

  {
    id: "health",
    no: "02",
    job: "protect",
    short: "Health insurance",
    title: "Health Insurance",
    formal: "Indemnity health cover · regulated by IRDAI",
    oneLine:
      "You pay a premium every year. If you are admitted to hospital, the insurer pays the bills up to your sum insured, " +
      "either directly to the hospital (cashless) or by repaying you later.",
    plateTitle: "How a big bill gets paid",
    marks: [
      "Pays actual hospital bills up to the sum insured, for one person or the whole family (floater).",
      "Claim-free years can raise your cover (no-claim bonus). Some policies refill cover used up in a year (restoration).",
      "You can move to another insurer without losing waiting-period credit (portability).",
    ],
    confused: [
      {
        name: "Critical illness cover",
        text: "Pays a fixed lump sum when a listed illness is diagnosed, whatever the bill. It adds to health insurance; it does not replace it.",
      },
      {
        name: "Employer cover",
        text: "Usually ends when you change jobs or retire.",
      },
    ],
    glance: [
      ["Regulator", "IRDAI"],
      ["What you pay", "A yearly premium based on age, sum insured, city and health history. No upper age limit to buy since April 2024; insurers still assess each applicant."],
      ["Time commitment", "One year at a time. Renew without a break to keep waiting-period credit and bonus."],
      ["When it pays", "Cashless at network hospitals (the insurer must decide within 1 hour of a request, and approve discharge within 3 hours), or by reimbursement."],
      ["Costs", "Only the premium. No GST on individual policies since 22 September 2025."],
      ["Tax in brief", "Old regime: premium deductible under Sec. 126 (earlier 80D), up to ₹25,000 (₹50,000 for senior citizens), plus a separate limit for parents."],
    ],
    gaugeTitle: "Read the fine print",
    gaugeAside: "Compare before you buy",
    suits: [
      "A large hospital bill would eat into your savings.",
      "Your only cover today comes from your employer.",
      "You have parents or senior family members to protect.",
    ],
    twice: [
      "You are buying mainly for the tax deduction.",
      "You have not checked the room-rent cap, co-payment and sub-limits.",
      "You plan to let a policy lapse to switch insurers. Port it instead.",
    ],
    ask: [
      "Is there a room-rent cap or a co-payment?",
      "Which hospitals near me offer cashless treatment?",
      "Which of my conditions have a waiting period, and how long is it?",
      "Is the sum insured enough for hospital costs in my city?",
    ],
    notes: ["Insurer", "Sum insured ₹", "Renewal date", "Claims helpline"],
    legal: insuranceLegal,
  },

  {
    id: "mf",
    no: "03",
    job: "build",
    short: "Mutual funds",
    title: "Mutual Funds",
    formal: "Pooled, professionally managed · regulated by SEBI",
    oneLine:
      "Many investors pool their money. A professional fund manager invests it in shares, bonds, gold or other assets, as the scheme’s rules allow. " +
      "You own units of the pool, and their value (the NAV) is published every business day.",
    plateTitle: "How it works",
    marks: [
      "You own units of a pool, not the shares or bonds themselves.",
      "Every scheme has a Direct plan and a Regular plan. A Regular plan includes the distributor’s commission.",
      "Schemes must stay true to their label: a large-cap fund, for example, keeps at least 80% in large companies.",
    ],
    confused: [
      {
        name: "SIF",
        text: "Also run by mutual fund houses, but needs ₹10 lakh and can bet against markets (short) for up to 25%. See entry 05.",
      },
      {
        name: "ULIP",
        text: "An insurance policy with an investment part, regulated by IRDAI. It is not a mutual fund.",
      },
    ],
    glance: [
      ["Regulator", "SEBI. AMFI is the industry body."],
      ["Minimum", "Set by each scheme. SIPs often start at ₹100–₹500 a month.", { min: 100, label: "from ₹100" }],
      ["Time commitment", "None for most open-ended funds. Tax-saving ELSS funds lock in for 3 years. Equity funds suit goals 5+ years away."],
      ["Money out", "Sell units any business day. An exit load may apply if you leave early."],
      ["Costs", "The total expense ratio (TER), taken daily from the NAV and capped by SEBI."],
      ["Tax in brief", "Equity funds: 12.5% on long-term gains (held over 12 months) above ₹1.25 lakh a year; 20% if short-term. Debt funds: your slab rate."],
    ],
    gaugeTitle: "Risk check: the riskometer",
    gaugeAside: "Printed on every scheme",
    suits: [
      "You are starting out, or want a core portfolio for long-term goals.",
      "You want diversification and professional management with small amounts.",
      "You like investing a fixed amount every month (SIP).",
    ],
    twice: [
      "You need guaranteed returns or capital protection.",
      "You may need the money within a year. Equity funds can fall sharply.",
      "You are picking a fund on last year’s return alone.",
    ],
    ask: [
      "What is the riskometer level, and does it match my comfort?",
      "What are the expense ratio and the exit load?",
      "How does this fund fit with what I already own?",
      "Direct or Regular plan: what am I paying for, and what do I get?",
    ],
    notes: ["SIPs running", "Monthly total ₹", "Goal and year", "Review month"],
    legal:
      '<span class="warn">Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</span> ' +
      "{{firm}} is an AMFI Registered Mutual Fund Distributor (ARN-[____]).",
  },

  {
    id: "ncd",
    no: "04",
    job: "build",
    short: "NCDs",
    title: "NCDs",
    formal: "Non-convertible debentures · regulated by SEBI",
    oneLine:
      "An NCD is a loan you give a company for a fixed period. The company pays you interest at a fixed rate and returns your money at maturity. " +
      "It can never turn into shares, hence “non-convertible”.",
    plateTitle: "Where your money goes, and when it comes back",
    marks: [
      "Fixed interest, paid monthly, yearly or all at maturity (cumulative).",
      "Carries a credit rating from an agency such as CRISIL, ICRA, CARE or India Ratings.",
      "Secured NCDs are backed by the company’s assets. Unsecured ones are not, and rank lower if the company fails.",
    ],
    confused: [
      {
        name: "Bank fixed deposits",
        text: "Bank deposits are insured up to ₹5 lakh per depositor per bank by DICGC. NCDs are not insured. A higher NCD rate is payment for taking more risk.",
      },
    ],
    glance: [
      ["Regulator", "SEBI (issue and listing). Issuers that are NBFCs are also regulated by RBI."],
      ["Minimum", "Usually ₹10,000 in a public issue.", { min: 1e4, label: "from ₹10,000" }],
      ["Time commitment", "The tenure of the series you pick, usually 18 months to 10 years."],
      ["Money out", "Interest as chosen, principal at maturity. You can sell earlier on the exchange, but the price may be lower and buyers few."],
      ["Costs", "No fee to apply in a public issue. A demat account is needed; brokerage applies if you sell."],
      ["Tax in brief", "Interest is taxed at your slab rate. Selling a listed NCD after 12 months: 12.5% on the gain; earlier, your slab rate."],
    ],
    gaugeTitle: "Risk check: the credit rating",
    gaugeAside: "Read it before the interest rate",
    suits: [
      "You want a predictable, regular income.",
      "You can hold the NCD until it matures.",
      "You accept that your money depends on the company’s ability to pay.",
    ],
    twice: [
      "You are chasing the highest rate. High rates usually mean higher risk.",
      "You may need the money before maturity.",
      "The NCD is unrated, unsecured, or from a company you do not know.",
    ],
    ask: [
      "What is the rating, from which agency, and is the outlook stable?",
      "Is it secured, and what is the asset cover?",
      "Which series: tenure, payout frequency and effective yield?",
      "What happens if I need my money early?",
    ],
    notes: ["Issuer / series", "Rate % and payout", "Amount ₹", "Matures on"],
    legal:
      '<span class="warn">Investments in debt securities are subject to risks including delay and/or default in payment. Read all the offer related documents carefully.</span> ' +
      "Ratings are opinions, not guarantees. {{firm}} [stock broker / online bond platform registration: ____].",
  },

  {
    id: "sif",
    no: "05",
    job: "special",
    short: "SIF",
    title: "SIF",
    formal: "Specialised investment funds · regulated by SEBI",
    oneLine:
      "A SIF is a newer SEBI category, run by eligible mutual fund houses under a separate brand. It can use tools a regular mutual fund cannot, " +
      "such as betting against (shorting) stocks or bonds for up to 25% of the portfolio.",
    plateTitle: "Long-short, in one picture",
    marks: [
      "Run by a mutual fund house under SEBI’s mutual fund rules, but sold under its own brand.",
      "Every strategy is long-short: it can hold bets that gain if prices rise and bets that gain if they fall.",
      "Uses a five-level Risk Band instead of the mutual fund riskometer.",
    ],
    confused: [
      { name: "Mutual funds", text: "Lower minimum, and no unhedged shorting." },
      { name: "PMS", text: "₹50 lakh minimum, with shares held in your own name. A SIF sits between the two." },
    ],
    glance: [
      ["Regulator", "SEBI, under the mutual fund regulations. The first SIFs launched in 2025."],
      ["Minimum", "₹10 lakh per investor, across strategies of one SIF.", { min: 1e6, label: "from ₹10 lakh" }],
      ["Time commitment", "Depends on the strategy. Some allow redemption only on set days or with notice."],
      ["Money out", "As per the strategy’s redemption frequency and notice period."],
      ["Costs", "An expense ratio taken from the NAV, as with mutual funds."],
      ["Tax in brief", "Taxed like mutual funds. The rate depends on the strategy’s mix of equity and debt."],
    ],
    gaugeTitle: "Risk check: the risk band",
    gaugeAside: "Disclosed for every strategy",
    suits: [
      "You can invest ₹10 lakh and it is a modest part of your portfolio.",
      "You want a strategy that tries to soften falls, not just ride the market.",
      "You are comfortable with derivatives being part of the strategy.",
    ],
    twice: [
      "₹10 lakh is most of your investable money.",
      "You may need daily access to the money.",
      "You expect mutual-fund-like simplicity. These strategies are more complex.",
    ],
    ask: [
      "Which strategy is this, and what is its Risk Band today?",
      "How often can I redeem, and with how much notice?",
      "How does the short side work, and when could it hurt returns?",
      "What are the total costs?",
    ],
    notes: ["SIF / strategy", "Amount ₹", "Risk band", "Redemption window"],
    legal:
      '<span class="warn">Investments in SIFs are subject to market risks, read all investment strategy related documents carefully.</span> ' +
      "{{firm}} is an AMFI Registered Mutual Fund Distributor and SIF Distributor (ARN-[____]).",
  },

  {
    id: "pms",
    no: "06",
    job: "special",
    short: "PMS",
    title: "PMS",
    formal: "Portfolio management services · regulated by SEBI",
    oneLine:
      "A SEBI-registered portfolio manager runs a portfolio of stocks or bonds for you. Unlike a mutual fund, the securities sit in your own demat account, " +
      "so you can see every holding and every trade.",
    plateTitle: "Who owns what, and who decides",
    marks: [
      "The shares sit in your own demat account, so you see every holding and every trade.",
      "Every PMS reports returns against a common benchmark, so managers can be compared.",
      "Upfront fees are not allowed. Fees are fixed, linked to performance above a hurdle, or both.",
    ],
    confused: [
      { name: "Mutual funds", text: "A shared pool. You own units, not shares." },
      { name: "AIFs", text: "A pooled fund with a ₹1 crore minimum that can hold unlisted assets and lock you in for years." },
    ],
    glance: [
      ["Regulator", "SEBI. The Portfolio Managers Regulations, 2026 apply from 1 April 2027."],
      ["Minimum", "₹50 lakh. PRIM (mutual-fund-only route): ₹25 lakh from 1 April 2027.", { min: 5e6, label: "₹50 lakh", ghost: { min: 2.5e6, label: "PRIM ₹25 lakh" } }],
      ["Time commitment", "No lock-in. Exit charges may apply in the early years."],
      ["Money out", "Withdraw part or all. You receive cash, or the securities themselves."],
      ["Costs", "Management fee and/or performance fee, plus brokerage, custody and GST."],
      ["Tax in brief", "Every trade is taxed in your hands, as if you had made it yourself."],
    ],
    gaugeTitle: "Risk check: concentration",
    gaugeAside: "Fewer stocks, bigger bets",
    suits: [
      "You have ₹50 lakh or more for equities and want a focused approach.",
      "You want to see every stock and trade in your own account.",
      "You accept that returns can differ widely from the index.",
    ],
    twice: [
      "Low cost matters most to you. Compare fees with mutual funds.",
      "You would rather not see many capital-gains entries in your tax return.",
      "You are choosing a manager on last year’s return alone.",
    ],
    ask: [
      "How has the strategy done against its benchmark over a full market cycle?",
      "What are all the fees: fixed, performance, hurdle, high-water mark, exit?",
      "Is the service discretionary or non-discretionary?",
      "How many stocks will I hold, and of what size?",
    ],
    notes: ["Manager / strategy", "Amount ₹", "Fee model", "Benchmark"],
    legal:
      '<span class="warn">Investments in securities are subject to market risks. Read the disclosure document carefully before investing.</span> ' +
      "Past performance does not guarantee future returns. {{firm}} is an APMI Registered PMS Distributor (APRN-[____]).",
  },

  {
    id: "aif",
    no: "07",
    job: "special",
    short: "AIF",
    title: "AIF",
    formal: "Alternative investment funds · regulated by SEBI",
    oneLine:
      "An AIF is a privately pooled fund for sophisticated investors. It can invest where ordinary funds cannot: unlisted companies, private credit, " +
      "real estate, start-ups, or complex strategies in listed markets.",
    plateTitle: "The life of a closed-ended fund",
    marks: [
      "You commit an amount, and the manager draws it in parts (capital calls) as deals are found.",
      "There is no daily price. The fund’s value is reported only periodically.",
      "Offered only by private placement, to at most 1,000 investors per scheme.",
    ],
    confused: [
      {
        name: "PMS",
        text: "Your own account, mostly listed shares, and no lock-in. An AIF pools money and may hold assets that cannot be sold quickly.",
      },
    ],
    glance: [
      ["Regulator", "SEBI (Alternative Investment Funds Regulations, 2012)."],
      ["Minimum", "₹1 crore commitment, drawn in parts as the fund invests.", { min: 1e7, label: "₹1 crore" }],
      ["Time commitment", "Category I and II: closed-ended, often 4–10 years. Category III: open or closed-ended."],
      ["Money out", "Usually as the fund sells investments, towards the end of its life. Early exit is limited or not possible."],
      ["Costs", "A management fee plus carried interest, a share of profits above the hurdle."],
      ["Tax in brief", "Category I and II are pass-through: income is taxed in your hands. Category III pays tax in the fund; you receive post-tax returns."],
    ],
    gaugeTitle: "Cost check: how profits are shared",
    gaugeAside: "The distribution waterfall",
    suits: [
      "You have a large portfolio and can leave money untouched for years.",
      "You want access to private equity, private credit or venture capital.",
      "You can judge the manager’s record across earlier funds.",
    ],
    twice: [
      "You may need this money before the fund ends.",
      "₹1 crore is a large share of your net worth.",
      "You are not sure you can meet capital calls on time.",
    ],
    ask: [
      "What does the fund invest in, and how did the manager’s earlier funds do?",
      "How much will be called, and how often? What if I miss a call?",
      "What are the fees, the hurdle and the carry?",
      "How long is the fund’s life, and can it be extended?",
    ],
    notes: ["Fund / category", "Commitment ₹", "Called so far ₹", "Fund ends"],
    legal:
      "AIFs are offered only by private placement to eligible investors, through the fund’s private placement memorandum. " +
      "This page is investor education. It is not an offer or a solicitation. {{firm}} [AIF distribution arrangement: ____].",
  },

  {
    id: "gift",
    no: "08",
    job: "global",
    short: "GIFT City",
    title: "GIFT City",
    formal: "International investing via GIFT IFSC · regulated by IFSCA",
    oneLine:
      "GIFT City in Gujarat is home to India’s International Financial Services Centre (IFSC). Resident Indians can invest there in US dollars, " +
      "within their yearly LRS limit, through entities regulated by IFSCA.",
    plateTitle: "The route from your bank account to the world",
    marks: [
      "You invest in US dollars. Returns depend on the markets and on the rupee–dollar rate.",
      "Uses your LRS limit of USD 2,50,000 per person per financial year, shared with travel, education and gifts.",
      "TCS of 20% applies on investment remittances above ₹10 lakh a year. You can set it off against tax or claim a refund.",
    ],
    confused: [
      {
        name: "International funds in rupees",
        text: "Sold in India in INR, but they can stop taking new money when industry overseas limits are reached.",
      },
      { name: "Foreign broker accounts", text: "Your money sits overseas, under a foreign regulator." },
    ],
    glance: [
      ["Regulator", "IFSCA, the regulator for GIFT City. Remittances follow RBI’s Liberalised Remittance Scheme (LRS)."],
      ["Minimum", "Depends on the product: retail funds set their own; PMS from USD 75,000; AIFs from USD 1,50,000 (accredited investors excepted)."],
      ["Time commitment", "Open-ended funds can be redeemed; AIFs run for a fixed term."],
      ["Money out", "Proceeds are paid in US dollars and can be brought back to your Indian bank account."],
      ["Costs", "Fund or service fees, plus currency conversion and bank remittance charges."],
      ["Tax in brief", "Gains are taxable in India for residents. TCS is not an extra tax: it is adjusted against what you owe."],
    ],
    gaugeTitle: "Risk check: the currency effect",
    gaugeAside: "Illustration only",
    suits: [
      "Most of your wealth is in India and you want global diversification.",
      "You have goals in dollars: education abroad, travel, overseas property.",
      "You prefer an Indian-regulated route and Indian time-zone service.",
    ],
    twice: [
      "You may need the money soon. Currency swings can hurt in the short term.",
      "You have already used most of this year’s LRS limit.",
      "You have not planned for TCS holding back cash until you file your return.",
    ],
    ask: [
      "What exactly does this product invest in, and where?",
      "What is the minimum, and what are all costs, including currency conversion?",
      "How much of my LRS limit have I used this financial year?",
      "How will my gains be taxed?",
    ],
    notes: ["Product", "Amount USD", "LRS used this FY", "TCS paid ₹"],
    legal:
      "Investments in GIFT IFSC are subject to market and currency risks, and to RBI’s LRS and FEMA rules. Read all scheme related documents carefully. " +
      "{{firm}} [IFSC distribution registration: ____].",
  },
];
