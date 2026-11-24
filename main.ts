// Two Days of Quiet Dread
// Writes one code review comment that approves the pull request with
// quiet existential dread to /output/entry.txt (single line, <= 140 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "LGTM. In five years nobody will remember this diff, this sprint, or our names, but the tests pass, so merge it.";

if (line.length > 140) {
  throw new Error(`entry is ${line.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
