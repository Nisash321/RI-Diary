// Copy for the eight product entries. Every fact here is listed with its
// source in docs/03-fact-sheet.md. Change a fact in both places.
//
// Writing rules (docs/02-framework.md, section 5): plain words a 14-year-old
// can follow, short sentences, every term explained where it first appears,
// no vague time words ("sooner", "short-term") without the actual period.
//
// Placeholders in [square brackets] are registration details that only
// the firm can fill in (ARN, APRN, IRDAI registration and so on).
//
// Insurance copy follows the tone guide: talk about the family and its
// plans, not about death. "If something happens to you" and "in your
// absence" are the phrases Indian insurers use.
//
// "Talk to us first if" (the `twice` lists) is an invitation to a
// conversation, not a warning: two gentle points per product, each with a
// helpful next step where one exists.

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
    formal: "Pure life cover for your family · regulated by IRDAI",
    oneLine:
      "Term insurance keeps your family’s plans on track if you are not there to provide for them. You pay a premium every year. " +
      "If something happens to you during the policy term, your family receives the full cover amount.",
    plateTitle: "How it protects a family",
    marks: [
      "It replaces your income for your family, so loans, school fees and monthly expenses stay covered.",
      "The premium is fixed when you buy, and usually stays the same for the whole term.",
      "Your family can receive the money in one go, as a monthly income, or both. You choose when you buy.",
    ],
    confused: [
      {
        name: "Return-of-premium and endowment plans",
        text: "These pay money back at the end, so the premium is higher for the same cover. Some term plans offer a ‘special exit’: stop at a set age and get back the base premiums you paid.",
      },
    ],
    glance: [
      ["Regulator", "IRDAI, the insurance regulator."],
      ["What you pay", "A premium, paid yearly or monthly, fixed when you buy. It depends on your age, health, habits such as smoking, the cover amount and the term."],
      ["Time commitment", "The term you choose, usually until your earning years end (age 60 to 70). You have 30 days to return a new policy if it does not suit you (free look)."],
      ["When it pays", "To your family (your nominee) if something happens to you during the term. The insurer must settle a claim within 15 days, or 45 days if it needs to investigate."],
      ["Costs", "Only the premium. No GST on individual policies since 22 September 2025."],
      ["Tax in brief", "Old tax regime: you can claim the premium as a deduction under Section 123 (earlier 80C). The money your family receives is tax-free."],
    ],
    gaugeTitle: "Work out your cover",
    gaugeAside: "Rule of thumb: 10 to 15 times yearly income",
    suits: [
      "Your family depends on your income, now or in the years ahead.",
      "You have a home loan or other loans your family would have to repay.",
      "You want the most cover for the lowest premium.",
    ],
    twice: [
      "No one depends on your income yet. Cover can be added as your family grows.",
      "You also want money back at the end. We can plan that goal separately.",
    ],
    ask: [
      "Is the cover enough for my family’s plans, including my loans?",
      "Have I shared every health detail, habit and existing policy?",
      "Who is my nominee, and does my family know about this policy?",
      "How many claims does the insurer settle, and how quickly?",
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
    formal: "Hospital cover for your family · regulated by IRDAI",
    oneLine:
      "You pay a premium every year. If you need hospital treatment, the insurer pays the bills up to your sum insured. " +
      "It pays the hospital directly (cashless) or pays you back, so the focus stays on getting better.",
    plateTitle: "How a big bill gets paid",
    marks: [
      "It pays actual hospital bills up to the sum insured, for one person or for the whole family on one policy (floater).",
      "A claim-free year can raise your cover (no-claim bonus). Some policies refill cover you have used up during the year (restoration).",
      "You can move to another insurer and keep credit for the waiting time you have already served (portability).",
    ],
    confused: [
      {
        name: "Critical illness cover",
        text: "Pays a fixed lump sum when a listed illness is diagnosed, whatever the bill. Use it alongside health insurance.",
      },
      {
        name: "Employer cover",
        text: "Usually ends when you change jobs or retire.",
      },
    ],
    glance: [
      ["Regulator", "IRDAI, the insurance regulator."],
      ["What you pay", "A yearly premium, based on age, sum insured, city and health history. Since April 2024, there is no upper age limit to apply."],
      ["Time commitment", "One year at a time. Renew without a break to keep your waiting-period credit and bonus."],
      ["When it pays", "Cashless at network hospitals (the insurer must reply within 1 hour, and approve discharge within 3 hours), or you pay and claim it back."],
      ["Costs", "Only the premium. No GST on individual policies since 22 September 2025."],
      ["Tax in brief", "Old tax regime: claim up to ₹25,000 of premium a year under Section 126 (earlier 80D), or ₹50,000 for senior citizens, plus a separate limit for parents."],
    ],
    gaugeTitle: "Read the fine print",
    gaugeAside: "Compare before you buy",
    suits: [
      "A big hospital bill would hurt your savings.",
      "Your only cover is from your employer.",
      "You look after parents or other elders.",
    ],
    twice: [
      "You want to change insurer. Porting keeps your waiting-period credit.",
      "You have an existing illness. Waiting periods differ by policy.",
    ],
    ask: [
      "Is there a limit on room rent, or a co-payment?",
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
      "Many investors put their money into one pool. A professional fund manager invests it in shares, bonds, gold or other assets, as the scheme’s rules allow. " +
      "You own units of the pool. The price of one unit (the NAV) is published every business day.",
    plateTitle: "How it works",
    marks: [
      "You own units of a pool, not the shares or bonds themselves.",
      "Every scheme has a Direct plan and a Regular plan. A Regular plan includes the distributor’s commission.",
      "Each scheme must stick to its label. For example, a large-cap fund keeps at least 80% in large companies.",
    ],
    confused: [
      {
        name: "SIF",
        text: "Run by mutual fund houses, with the same tax rules, plus tools for falling and sideways markets. See entry 04, next.",
      },
      {
        name: "ULIP",
        text: "An insurance policy with an investment part, regulated by IRDAI. It is not a mutual fund.",
      },
    ],
    glance: [
      ["Regulator", "SEBI. AMFI is the industry body."],
      ["Minimum", "Set by each scheme. A monthly SIP can start at ₹100 to ₹500.", { min: 100, label: "from ₹100" }],
      ["Time commitment", "None for most open-ended funds. Tax-saving ELSS funds lock in for 3 years. Equity funds suit goals at least 5 years away."],
      ["Money out", "Sell units any business day. An exit load (a small charge) may apply if you sell within a set period."],
      ["Costs", "The total expense ratio (TER), taken from the NAV daily, within limits set by SEBI."],
      ["Tax in brief", "Equity funds: 20% on gains if sold within 12 months; 12.5% after that, on gains above ₹1.25 lakh a year. Debt funds: your slab rate (12.5% after 24 months for units bought before 1 April 2023)."],
    ],
    gaugeTitle: "Risk check: the riskometer",
    gaugeAside: "Printed on every scheme",
    suits: [
      "You want a core portfolio for long-term goals.",
      "You want professional management, even for small sums.",
      "You like a fixed monthly investment (SIP).",
    ],
    twice: [
      "You may need the money within a year. Some funds suit short periods better.",
      "You want a fixed, guaranteed return. Fund values move with markets.",
    ],
    ask: [
      "Is the riskometer level right for me?",
      "What are the expense ratio and exit load?",
      "How does this fund fit with what I own?",
      "Direct or Regular: what do I pay, and get?",
    ],
    notes: ["SIPs running", "Monthly total ₹", "Goal and year", "Review month"],
    legal:
      '<span class="warn">Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</span> ' +
      "{{firm}} is an AMFI Registered Mutual Fund Distributor (ARN-[____]).",
  },

  {
    id: "sif",
    no: "04",
    job: "build",
    short: "SIF",
    title: "SIF",
    formal: "Specialised investment funds · regulated by SEBI",
    oneLine:
      "A SIF is a mutual fund with more tools. It follows SEBI’s mutual fund rules and is taxed the same way. " +
      "But the manager can also bet on falls, move between asset types, and turn market exposure up or down.",
    plateTitle: "One fund, three kinds of market",
    marks: [
      "Built for rising, falling and sideways markets. The manager can raise or cut exposure, and bet on falls with up to 25% of the fund.",
      "Taxed like a mutual fund: nothing is taxed inside the fund, only when you redeem or switch.",
      "Can be cautious or adventurous, from arbitrage and bonds to equity long-short. The Risk Band (Level 1 to 5) tells you which.",
    ],
    confused: [
      {
        name: "Mutual funds",
        text: "Same family, same tax rules. A SIF adds tools for falling and sideways markets, and starts at ₹10 lakh.",
      },
      {
        name: "Category III AIFs and PMS",
        text: "Similar long-short tools, but taxed every year. In a SIF, tax waits until you redeem or switch. More on the next two pages.",
      },
    ],
    glance: [
      ["Regulator", "SEBI, under the mutual fund rules, through eligible fund houses."],
      ["Minimum", "₹10 lakh per investor, across one fund house’s SIF strategies.", { min: 1e6, label: "from ₹10 lakh" }],
      ["Time commitment", "No lock-in for most strategies. A few have set redemption dates, or a fixed term."],
      ["Money out", "Equity strategies: usually any business day. Hybrid strategies: on set days, at least twice a week, with up to 15 working days’ notice."],
      ["Costs", "An expense ratio, taken from the NAV, as in a mutual fund."],
      ["Tax in brief", "Same as mutual funds. Equity-oriented: 20% STCG if you redeem or switch within 12 months; 12.5% LTCG after that, on gains above ₹1.25 lakh a year. Debt: your slab rate."],
    ],
    gaugeTitle: "Tax check: one strategy, three products",
    gaugeAside: "Highest tax slab, base rates",
    suits: [
      "You invest in mutual funds and want strategies that can also handle falling and flat markets.",
      "You want one fund that can be your whole portfolio, or its steadier part.",
      "You want mutual fund tax rules for long-short strategies.",
    ],
    twice: [
      "₹10 lakh would be a large part of your savings.",
      "You may need your money on a particular day. Some strategies pay out only on set days.",
    ],
    ask: [
      "Which strategy is this, and what is its Risk Band today?",
      "How does the manager change exposure when markets rise, fall or move sideways?",
      "Is it equity-oriented for tax, and on which days can I redeem?",
      "What are the total costs?",
    ],
    notes: ["SIF / strategy", "Amount ₹", "Risk band", "Redemption days"],
    legal:
      '<span class="warn">Investments in SIFs are subject to market risks, read all investment strategy related documents carefully.</span> ' +
      "{{firm}} is an AMFI Registered Mutual Fund Distributor and SIF Distributor (ARN-[____]).",
    extra: "extra-sif.html",
  },

  {
    id: "ncd",
    no: "05",
    job: "build",
    short: "NCDs",
    title: "NCDs",
    formal: "Non-convertible debentures · regulated by SEBI",
    oneLine:
      "An NCD is a loan you give a company for a fixed period. The company pays you interest at a fixed rate and returns your money at the end (maturity). " +
      "It can never be turned into shares, so it is called “non-convertible”.",
    plateTitle: "Where your money goes, and when it comes back",
    marks: [
      "Fixed interest, paid monthly, yearly, or all together at maturity (cumulative).",
      "Rated by a credit rating agency such as CRISIL, ICRA, CARE or India Ratings.",
      "Secured NCDs are backed by the company’s assets. Unsecured NCDs are not, and are repaid after secured ones if the company fails.",
    ],
    confused: [
      {
        name: "Bank fixed deposits",
        text: "Bank deposits are insured up to ₹5 lakh per depositor per bank by DICGC. NCDs are not insured. The higher rate on an NCD comes with more risk.",
      },
    ],
    glance: [
      ["Regulator", "SEBI, for the issue and listing. If the company is an NBFC, RBI regulates it too."],
      ["Minimum", "Usually ₹10,000 in a public issue.", { min: 1e4, label: "from ₹10,000" }],
      ["Time commitment", "The period of the series you pick, usually 18 months to 10 years."],
      ["Money out", "Interest as you chose, and your money back at maturity. You can sell earlier on the stock exchange, but the price may be lower and buyers may be few."],
      ["Costs", "No fee to apply in a public issue. You need a demat account, and brokerage applies if you sell."],
      ["Tax in brief", "Interest is taxed at your slab rate. If you sell a listed NCD after 12 months, 12.5% on the gain; within 12 months, your slab rate."],
    ],
    gaugeTitle: "Risk check: the credit rating",
    gaugeAside: "Check it before the interest rate",
    suits: [
      "You want a steady, regular income.",
      "You can hold the NCD until it matures.",
      "You understand that repayment depends on the company.",
    ],
    twice: [
      "A very high rate has caught your eye. We can check the rating and security with you.",
      "You may need the money before maturity. Selling on the exchange can mean a lower price.",
    ],
    ask: [
      "What is the rating, from which agency, and is the outlook stable?",
      "Is it secured, and what is the asset cover?",
      "Which series: the period, how often interest is paid, and the effective yield?",
      "What if I need my money before maturity?",
    ],
    notes: ["Issuer / series", "Rate % and payout", "Amount ₹", "Matures on"],
    legal:
      '<span class="warn">Investments in debt securities are subject to risks including delay and/or default in payment. Read all the offer related documents carefully.</span> ' +
      "Ratings are opinions, not guarantees. {{firm}} [stock broker / online bond platform registration: ____].",
  },

  {
    id: "pms",
    no: "06",
    job: "special",
    short: "PMS",
    title: "PMS",
    formal: "Portfolio management services · regulated by SEBI",
    oneLine:
      "A SEBI-registered portfolio manager runs a portfolio of shares or bonds just for you. Unlike a mutual fund, the securities sit in your own demat account, " +
      "so you can see every holding and every trade.",
    plateTitle: "Who owns what, and who decides",
    marks: [
      "The shares are bought in your name and held in your own demat account.",
      "Every PMS reports its returns against a common benchmark, so managers can be compared.",
      "No upfront fees are allowed. Fees are fixed, linked to profits above a set level (the hurdle), or both.",
    ],
    confused: [
      { name: "Mutual funds", text: "A shared pool. You own units, not the shares." },
      { name: "AIFs", text: "A pooled fund with a ₹1 crore minimum. It can hold unlisted companies and may lock in your money for years." },
    ],
    glance: [
      ["Regulator", "SEBI. New rules, the Portfolio Managers Regulations, 2026, apply from 1 April 2027."],
      ["Minimum", "₹50 lakh. From 1 April 2027, ₹25 lakh for PRIM, a new kind of PMS that invests only in mutual funds.", { min: 5e6, label: "₹50 lakh", ghost: { min: 2.5e6, label: "PRIM ₹25 lakh" } }],
      ["Time commitment", "No lock-in. An exit charge may apply in the first three years."],
      ["Money out", "Withdraw part or all. You get cash, or the shares themselves."],
      ["Costs", "A management fee, a performance fee, or both, plus brokerage, custody charges and GST."],
      ["Tax in brief", "Every trade is taxed in your hands, as if you had made it yourself."],
    ],
    gaugeTitle: "Risk check: concentration",
    gaugeAside: "Fewer stocks, more weight on each",
    suits: [
      "You have ₹50 lakh or more for shares and want a focused portfolio.",
      "You want to see every stock and trade in your own account.",
      "You are comfortable with results that can differ a lot from the market index.",
    ],
    twice: [
      "Low fees matter most to you. We can compare the costs with mutual funds.",
      "You prefer a simple tax return. Every sale shows up as a gain or loss in your name.",
    ],
    ask: [
      "How has the strategy done against its benchmark, through good years and bad?",
      "What are all the fees: fixed, performance, hurdle, high-water mark, exit?",
      "Who decides each trade: the manager, or me?",
      "How many stocks will I hold, and how big will each be?",
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
      "An AIF is a private fund that pools money from a small group of investors. It can invest where most investors cannot: in companies before they list, " +
      "loans to private companies, real estate and start-ups. Some AIFs also run specialist strategies in listed shares.",
    plateTitle: "The life of a fund with a fixed term",
    marks: [
      "It gives you a share of companies while they are still private, often years before they list.",
      "You promise (commit) an amount. The manager asks for it in parts (capital calls) as deals are found.",
      "Offered only privately (private placement), to at most 1,000 investors in each scheme.",
    ],
    confused: [
      {
        name: "PMS",
        text: "Your own account, mostly listed shares, and no lock-in. An AIF pools money and may hold assets that take time to sell.",
      },
    ],
    glance: [
      ["Regulator", "SEBI, under the AIF Regulations, 2012."],
      ["Minimum", "₹1 crore commitment, paid in parts as the fund invests.", { min: 1e7, label: "₹1 crore" }],
      ["Time commitment", "Category I and II: a fixed term, often 4 to 10 years. Category III: open-ended, or a fixed term."],
      ["Money out", "As the fund sells its investments, mostly in its later years. Leaving before the term ends is rarely possible."],
      ["Costs", "A management fee, plus carried interest: the manager’s share of profits above the hurdle."],
      ["Tax in brief", "Category I and II: income is taxed in your hands (pass-through). Category III: the fund pays the tax before paying you."],
    ],
    gaugeTitle: "Cost check: how profits are shared",
    gaugeAside: "The order in which money is paid out",
    suits: [
      "You have ₹1 crore or more that you will not need for 7 to 10 years.",
      "You want a share of the growth that happens before companies list.",
      "Your core portfolio is already in place.",
    ],
    twice: [
      "You may need this money before the fund’s term ends. We can look at funds with shorter terms.",
      "₹1 crore would be a large share of your wealth.",
    ],
    ask: [
      "What does the fund invest in, and how did the manager’s earlier funds do?",
      "How much will be called, and how often? What if I miss a call?",
      "What are the fees, the hurdle and the carried interest?",
      "How long is the fund’s term, and can it be extended?",
    ],
    notes: ["Fund / category", "Commitment ₹", "Called so far ₹", "Fund ends"],
    legal:
      "AIFs are offered only by private placement to eligible investors, through the fund’s private placement memorandum. " +
      "This page is investor education. It is not an offer or a solicitation. {{firm}} [AIF distribution arrangement: ____].",
    extra: "extra-aif.html",
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
      "within their yearly LRS limit, through firms regulated by IFSCA.",
    plateTitle: "The route from your bank account to the world",
    marks: [
      "You invest in US dollars. What you get back depends on the markets and on the rupee–dollar rate.",
      "It uses your Liberalised Remittance Scheme (LRS) limit of USD 2,50,000 per person per financial year. Travel, studies and gifts abroad share the same limit.",
      "Your bank collects 20% TCS on money sent abroad to invest above ₹10 lakh a year. You can adjust it against your tax or claim a refund.",
    ],
    confused: [
      {
        name: "International funds in rupees",
        text: "Sold in India in rupees, but they can stop taking new money when the industry’s overseas limit is reached.",
      },
      { name: "Foreign broker accounts", text: "Your money sits overseas, under a foreign regulator." },
    ],
    glance: [
      ["Regulator", "IFSCA, the regulator for GIFT City. Money sent there follows RBI’s Liberalised Remittance Scheme (LRS)."],
      ["Minimum", "Depends on the product. Retail funds set their own. PMS from USD 75,000. AIFs from USD 1,50,000 (accredited investors can invest less)."],
      ["Time commitment", "Open-ended funds: no fixed term. AIFs: a fixed term."],
      ["Money out", "Paid in US dollars. You can bring the money back to your Indian bank account."],
      ["Costs", "Fund or service fees, plus currency conversion and bank charges for sending money."],
      ["Tax in brief", "Gains are taxable in India for residents. TCS is not an extra tax: it is adjusted against the tax you owe."],
    ],
    gaugeTitle: "Risk check: the currency effect",
    gaugeAside: "Illustration only",
    suits: [
      "Most of your wealth is in India and you want to spread it across the world.",
      "You have goals in dollars: studies abroad, travel, overseas property.",
      "You prefer an Indian-regulated route, with service in Indian hours.",
    ],
    twice: [
      "You may need the money within a year or two. Exchange rates can swing over short periods.",
      "You have already used most of this year’s LRS limit.",
    ],
    ask: [
      "What exactly does this product invest in, and where?",
      "What is the minimum, and what are all the costs, including currency conversion?",
      "How much of my LRS limit have I used this financial year?",
      "How will my gains be taxed, and when do I get my TCS back?",
    ],
    notes: ["Product", "Amount USD", "LRS used this FY", "TCS paid ₹"],
    legal:
      "Investments in GIFT IFSC are subject to market and currency risks, and to RBI’s LRS and FEMA rules. Read all scheme related documents carefully. " +
      "{{firm}} [IFSC distribution registration: ____].",
  },
];
