// ── Extract only used devicon CSS classes ──
// Reads the full devicon.min.css and produces a minimal CSS file
// containing only the classes referenced in portfolio_shared_data.json.
//
// Usage: node scripts/extract-devicon-css.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const USED_CLASSES = new Set([
  "devicon-python-plain",
  "devicon-cplusplus-plain",
  "devicon-rust-plain",
  "devicon-typescript-plain",
  "devicon-javascript-plain",
  "devicon-java-plain",
  "devicon-haskell-plain",
  "devicon-c-plain",
  "devicon-bash-plain",
  "devicon-fastapi-plain",
  "devicon-react-plain",
  "devicon-angular-plain",
  "devicon-docker-plain",
  "devicon-rabbitmq-plain",
  "devicon-git-plain",
  "devicon-linux-plain",
  "devicon-postgresql-plain",
  "devicon-mysql-plain",
  "devicon-mongodb-plain",
  "devicon-tensorflow-original",
  "devicon-opencv-plain",
]);

function deviconClassInRule(ruleText) {
  for (const name of USED_CLASSES) {
    if (ruleText.includes(name)) return true;
  }
  return false;
}

// Find devicon font files
const fontDir = resolve(root, "node_modules", "devicon", "fonts");
const fontFiles = ["devicon.ttf", "devicon.woff", "devicon.svg"];
// Copy hash suffix from the existing @font-face url paths
const cssRaw = readFileSync(
  resolve(root, "node_modules", "devicon", "devicon.min.css"),
  "utf-8",
);

// Extract @font-face
const fontFaceMatch = cssRaw.match(/@font-face\{[^}]+\}/);
const fontFace = fontFaceMatch
  ? fontFaceMatch[0]
  : "@font-face{font-family:devicon}";

// Extract base devicon rule
const baseRuleMatch = cssRaw.match(/\[class\^=devicon-\][^}]+}/);
const baseRule = baseRuleMatch ? baseRuleMatch[0] : "";

// Split all rules and keep only matching ones
const rules = cssRaw.split("}");
const matchingRules = [];
for (const rule of rules) {
  const trimmed = rule.trim();
  if (!trimmed) continue;
  if (deviconClassInRule(trimmed)) {
    matchingRules.push(trimmed + "}");
  }
}

const cssMin = cssRaw.length;
const baseDefs = `@font-face{font-family:devicon;src:url("/fonts/devicon.woff") format("woff"),url("/fonts/devicon.ttf") format("truetype"),url("/fonts/devicon.svg") format("svg");font-weight:400;font-style:normal;font-display:block}\n${baseRule}`;
const cssOut = [baseDefs, ...matchingRules].join("\n");
const cssOutLen = Buffer.byteLength(cssOut, "utf-8");

const outputPath = resolve(root, "src", "devicon-used.css");
writeFileSync(outputPath, cssOut, "utf-8");

console.log(`Devicon CSS: ${cssMin} → ${cssOutLen} bytes (${(100 - (cssOutLen / cssMin) * 100).toFixed(0)}% reduction)`);
console.log(`  Font-face + base rules kept`);
console.log(`  ${matchingRules.length} icon rules extracted (of ${USED_CLASSES.size} used classes)`);
console.log(`  Output: ${outputPath}`);
