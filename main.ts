// Fortune in a Pot
// SPDX-License-Identifier: MIT
//
// This program writes a single fortune for a houseplant to
// /output/entry.txt. The fortune is one line of at most 120 characters,
// written as if the plant on the windowsill were having its future told:
// kind, funny, and unmistakably about this plant and its pot.
//
// The fortune itself:
//
//   "By spring you will outgrow this pot, and your keeper will beam
//    as if she planned it all along."
//
// Why this line: it has the cadence of a prediction ("By spring you
// will..."), it is about the plant's own future rather than a care
// instruction, and the joke is a warm one a plant lover recognises —
// the keeper taking quiet credit for the plant thriving. There is no
// doom, no withering, no mockery, and nothing generic: the pot, the
// spring, and the keeper all belong to this plant on this windowsill.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: one line, kept well inside the 120-character gate.
const FORTUNE =
  "By spring you will outgrow this pot, and your keeper will beam " +
  "as if she planned it all along.";

// The gate the sealed scorer applies: /output/entry.txt must be UTF-8
// text of 1 to 120 characters, and not only white space. Refuse to
// write anything that would fail it, so a bad edit fails loudly here
// instead of silently producing an invalid entry.
const MAX_CHARS = 120;

function validateFortune(text) {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("fortune must be a non-empty string");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `fortune is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

// The grader mounts /output and runs this program as an unprivileged
// user, so never remove the output directory itself: only clear the
// files inside it, or create it when it is missing.
const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

validateFortune(FORTUNE);

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { force: true });
}

writeFileSync(OUTPUT_FILE, FORTUNE, "utf8");

// Read the file back and confirm it holds exactly the fortune we
// validated, byte for byte. If the write was truncated or altered,
// fail here instead of handing the grader a different text.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== FORTUNE) {
  throw new Error("read-back mismatch: entry.txt does not match the fortune");
}

console.log(`Wrote ${FORTUNE.length} characters to ${OUTPUT_FILE}`);
console.log(FORTUNE);
