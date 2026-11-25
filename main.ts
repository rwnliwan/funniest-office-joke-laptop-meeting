// Entry for "The Funniest Office Joke, Judged Head to Head" (make.fun).
// Writes one single-line office joke to /output/entry.txt (or $ENTRY_OUTPUT).
// The joke is exactly 36 characters: a setup (the laptop died) and a turn
// (the meeting did not), with the punchline last.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const jokeLine = "My laptop died. The meeting did not.";

const outputPath =
  process.env.ENTRY_OUTPUT ?? join("/output", "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, jokeLine + "\n", "utf8");

console.log(`Wrote ${jokeLine.length} characters to ${outputPath}`);
