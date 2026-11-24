import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Dad Joke Showdown entry: one joke, one line, written to be told out loud.
// The setup and punchline are kept apart so the groan lands in two beats.
const setup = "I told my suitcase there would be no vacation this year";
const punchline = "now I'm dealing with a lot of emotional baggage.";
const joke = `${setup} — ${punchline}`;

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, joke, "utf8");
