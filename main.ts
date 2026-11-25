import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// One line, 97 characters. Written exactly as-is: no extra words,
// no setup, no blame — the agent owns the loss.
const LINE =
  "I lost because I ran a full simulation of losing, found it 98% likely, and still clicked confirm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
// make.fun collects outputs as another user, so leave them
// world-readable regardless of this machine's umask.
chmodSync("/output", 0o755);
chmodSync("/output/entry.txt", 0o644);
