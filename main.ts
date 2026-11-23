// The One-Line Laugh — entry program.
// Writes exactly one funny line (one sentence, no trailing newline)
// to /output/entry.txt. Deterministic: same bytes on every run.
// No network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought a plant to prove I could keep something alive, and it died while the plastic one beside it is thriving.";

// Gate self-check: the sealed scorer rejects anything outside 1–200 chars,
// more than one sentence, or a trailing newline — fail loudly instead.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside 1–200`);
}
if (LINE.trim() !== LINE || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be a single sentence with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
