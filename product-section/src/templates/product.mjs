// Product spread template: a left page to recognise the product and a right
// page to decide whether it fits. Every product uses the same anatomy so a
// reader learns the layout once and can compare entries side by side.

export const jobs = {
  protect: "Protect",
  build: "Build",
  special: "Specialise",
  global: "Globalise",
};

const pad = (n) => String(n).padStart(2, "0");

// Minimum-ticket ruler: one log scale from ₹100 to ₹1 crore, identical on
// every investment entry, so the reader sees each product's entry point
// relative to the others. Width matches the "At a glance" value column.
export function ruler({ min, label, ghost }) {
  const W = 99, H = 9.2, x0 = 1.2, x1 = 96.8, y = 5.2;
  const lo = 2, hi = 7;
  const X = (v) => x0 + ((Math.log10(v) - lo) / (hi - lo)) * (x1 - x0);
  const ticks = [
    [1e2, "₹100"], [1e3, "₹1,000"], [1e4, "₹10,000"],
    [1e5, "₹1 lakh"], [1e6, "₹10 lakh"], [1e7, "₹1 crore"],
  ];
  const xm = X(min);
  // With a second (ghost) marker close by, anchor both labels to the right
  // so they sit side by side instead of on top of each other.
  const anchor = ghost ? "end" : xm < 8 ? "start" : xm > 90 ? "end" : "middle";
  const labelX = ghost ? Math.min(x1, xm + 5.5) : xm;
  const tickMarks = ticks.map(([v, t], i) => {
    const x = X(v);
    const a = i === 0 ? "start" : i === ticks.length - 1 ? "end" : "middle";
    return `<line x1="${x}" y1="${y - 0.9}" x2="${x}" y2="${y + 0.9}" class="s-ink3 hair"/>` +
      `<text x="${x}" y="${y + 3.6}" class="t-sm t-num" style="font-size:2.05px;text-anchor:${a}">${t}</text>`;
  }).join("");
  const ghostMark = ghost
    ? `<line x1="${X(ghost.min)}" y1="${y}" x2="${xm}" y2="${y}" class="s-job dash" style="stroke-width:1.1"/>` +
      `<circle cx="${X(ghost.min)}" cy="${y}" r="0.95" class="f-paper s-job thin"/>` +
      `<text x="${X(ghost.min) - 1.2}" y="${y - 3.1}" class="t-cap job" style="font-size:1.9px;text-anchor:end;opacity:.85">${ghost.label}</text>`
    : "";
  return `<svg class="ruler" viewBox="0 0 ${W} ${H}" role="img" aria-label="Minimum to invest: ${label}">
  <line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="s-rule" style="stroke-width:1.1;stroke-linecap:round"/>
  <line x1="${xm}" y1="${y}" x2="${x1}" y2="${y}" class="s-job" style="stroke-width:1.1;stroke-linecap:round"/>
  ${tickMarks}
  ${ghostMark}
  <path d="M${xm - 1.1},${y - 2.6} h2.2 l-1.1,1.6 z" class="f-deep"/>
  <text x="${labelX}" y="${y - 3.1}" class="t-cap job" style="font-size:2.05px;text-anchor:${anchor}">${label}</text>
</svg>`;
}

function glanceRows(rows) {
  return rows.map(([k, v, r]) => `<dt>${k}</dt><dd>${v}${r ? ruler(r) : ""}</dd>`).join("\n      ");
}

export function productSpread(p, { plate, gauge, verso, total, meta }) {
  const recto = verso + 1;
  const job = jobs[p.job];
  const notes = p.notes.map((n) => `<div class="field${n.wide ? " wide" : ""}"><span>${n.label ?? n}</span></div>`).join("");
  return `
<section class="page verso" data-job="${p.job}" id="${p.id}">
  <header class="runhead"><span class="chip">${job}</span><span>Know your products · ${p.no} of ${pad(total)}</span></header>
  <div class="entry-head">
    <div class="entry-no">${p.no}</div>
    <div>
      <h1 class="entry-title">${p.title}</h1>
      <p class="entry-formal">${p.formal}</p>
    </div>
  </div>
  <p class="oneline">${p.oneLine}</p>
  <figure class="plate">
    <figcaption class="plate-head"><span class="label">${p.plateTitle}</span><span class="fig">Fig. ${p.no}</span></figcaption>
    ${plate.trim()}
  </figure>
  <div class="lower">
    <div>
      <h2 class="label block-title">How to recognise it</h2>
      <ul class="marks">
        ${p.marks.map((m) => `<li>${m}</li>`).join("\n        ")}
      </ul>
    </div>
    <aside class="confused">
      <h2 class="label block-title">Often confused with</h2>
      ${p.confused.map((c) => `<p><span class="vs">${c.name}.</span> ${c.text}</p>`).join("\n      ")}
    </aside>
  </div>
  <footer class="folio"><span class="pg">${verso}</span><span class="asof">Facts as of ${meta.asOf}</span></footer>
</section>
<!-- /page -->
<section class="page recto" data-job="${p.job}">
  <header class="runhead"><span>${p.no} · ${p.short}</span><span class="chip">${job}</span></header>
  <div class="label" style="display:flex;justify-content:space-between;padding-bottom:1.5mm"><span>At a glance</span><span class="muted" style="letter-spacing:.06em;text-transform:none;font-family:var(--text);font-stretch:100%;font-weight:500;font-size:6.6pt">The same six facts for every product</span></div>
  <dl class="glance">
      ${glanceRows(p.glance)}
  </dl>
  <div class="section gauge">
    <h2 class="label"><span>${p.gaugeTitle}</span><span class="aside">${p.gaugeAside ?? ""}</span></h2>
    ${gauge.trim()}
  </div>
  <div class="section">
    <div class="fit">
      <div class="yes"><h3 class="label">Suits you if</h3><ul>${p.suits.map((s) => `<li>${s}</li>`).join("")}</ul></div>
      <div class="no"><h3 class="label">Think twice if</h3><ul>${p.twice.map((s) => `<li>${s}</li>`).join("")}</ul></div>
    </div>
  </div>
  <div class="section">
    <h2 class="label"><span>Ask before you sign</span><span class="aside">Tick when answered</span></h2>
    <ul class="ask">${p.ask.map((q) => `<li>${q}</li>`).join("")}</ul>
  </div>
  <div class="section">
    <h2 class="label"><span>My notes</span><span class="aside">Write your own numbers here</span></h2>
    <div class="notes">${notes}</div>
  </div>
  <p class="legal">${p.legal}</p>
  <footer class="folio"><span class="pg">${recto}</span><span class="asof">${meta.firm} · Diary ${meta.diaryYear}</span></footer>
</section>
<!-- /page -->`;
}
