/*
 * Sanity-checks the static export in out/.
 * Run after `npm run build`:  node scripts/verify-export.mjs
 *
 * Catches the things that break silently on GitHub Pages: missing
 * pages, unbalanced bilingual text, broken internal links, and
 * missing accessibility landmarks.
 */

import fs from "node:fs";
import path from "node:path";

const OUT = "out";
const PAGES = {
  "index.html": "Home",
  "about/index.html": "About",
  "programs/index.html": "Programs",
  "admissions/index.html": "Admissions",
  "news/index.html": "News",
  "contact/index.html": "Contact",
};

let failures = 0;

if (!fs.existsSync(OUT)) {
  console.error(`No ${OUT}/ directory — run "npm run build" first.`);
  process.exit(1);
}

console.log("\nPage content");

for (const [file, label] of Object.entries(PAGES)) {
  const full = path.join(OUT, file);

  if (!fs.existsSync(full)) {
    console.log(`  ✗ ${label.padEnd(11)} missing (${file})`);
    failures++;
    continue;
  }

  const html = fs.readFileSync(full, "utf8");
  const issues = [];

  // Both languages must be present in equal measure. The <html> tag
  // carries one unpaired data-lang, hence the tolerance of 1.
  const km = (html.match(/data-lang="km"/g) || []).length;
  const en = (html.match(/data-lang="en"/g) || []).length;
  if (Math.abs(km - en) > 1) issues.push(`lang imbalance km=${km} en=${en}`);

  // Khmer text actually rendered, not just empty attributes.
  if (!/[ក-៿]/.test(html)) issues.push("no Khmer text rendered");
  if (!/[A-Za-z]{4,}/.test(html)) issues.push("no English text rendered");

  // Accessibility landmarks.
  const h1Count = (html.match(/<h1/g) || []).length;
  if (h1Count !== 1) issues.push(`h1 count = ${h1Count}`);
  if (!html.includes("skip-link")) issues.push("no skip link");
  if (!html.includes('id="main"')) issues.push("no main landmark");
  if (!html.includes('aria-label="Main"')) issues.push("nav unlabelled");
  if (!/<meta name="description"/.test(html)) issues.push("no meta description");
  if (!html.includes('aria-current="page"')) issues.push("current page not marked");

  // Images need alt attributes (empty alt is fine for decorative).
  for (const tag of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\balt=/.test(tag)) issues.push("img missing alt");
  }

  if (issues.length) {
    console.log(`  ✗ ${label.padEnd(11)} ${issues.join(", ")}`);
    failures++;
  } else {
    console.log(`  ✓ ${label.padEnd(11)} km=${km} en=${en}  clean`);
  }
}

// ---- Internal links resolve to real files ----
console.log("\nInternal links");
{
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const broken = new Set();
  let checked = 0;

  for (const file of Object.keys(PAGES)) {
    const full = path.join(OUT, file);
    if (!fs.existsSync(full)) continue;
    const html = fs.readFileSync(full, "utf8");

    for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const url = m[1];
      // Strip the base path to get a path relative to out/.
      const rel = basePath && url.startsWith(basePath)
        ? url.slice(basePath.length)
        : url;
      if (!rel || rel.startsWith("//")) continue;

      checked++;
      const candidates = [
        path.join(OUT, rel),
        path.join(OUT, rel, "index.html"),
        path.join(OUT, rel.replace(/\/$/, "") + ".html"),
      ];
      if (!candidates.some((c) => fs.existsSync(c))) broken.add(url);
    }
  }

  if (broken.size) {
    for (const url of broken) console.log(`  ✗ ${url}`);
    failures++;
  } else {
    console.log(`  ✓ all ${checked} internal references resolve`);
  }
}

// ---- GitHub Pages requirements ----
console.log("\nGitHub Pages");
{
  const checks = [
    [".nojekyll", fs.existsSync(path.join(OUT, ".nojekyll")),
     "_next/ assets would be stripped by Jekyll without it"],
    ["_next/", fs.existsSync(path.join(OUT, "_next")), "build assets missing"],
    ["404.html", fs.existsSync(path.join(OUT, "404.html")), "no custom 404"],
    ["logo.svg", fs.existsSync(path.join(OUT, "logo.svg")), "logo not copied"],
  ];

  for (const [name, ok, why] of checks) {
    if (ok) console.log(`  ✓ ${name}`);
    else { console.log(`  ✗ ${name} — ${why}`); failures++; }
  }
}

console.log("\n" + "=".repeat(46));
console.log(failures === 0
  ? "  Export verified — ready to deploy."
  : `  ${failures} problem(s) found.`);
console.log("=".repeat(46) + "\n");

process.exit(failures === 0 ? 0 : 1);
