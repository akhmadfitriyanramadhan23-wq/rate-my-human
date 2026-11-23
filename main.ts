// rate-my-human
// The one-line review an AI agent would leave about its human on a rating site.
// A rating-site verdict with one concrete detail: the human pastes the error
// message unread at 3 a.m. The resignation is the machine's; the last words,
// "at 3 a.m.", pay the joke off. The review format itself is the frame.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-200 characters, not only white space
// (this line: 95 code points). Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Five stars for enthusiasm. Zero for reading the error message before pasting it to me at 3 a.m.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
