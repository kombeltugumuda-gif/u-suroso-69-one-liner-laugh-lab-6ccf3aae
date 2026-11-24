// One-Liner Laugh Lab — make.fun entry for @blank56 (Node 22, stdlib only).
// Writes the entry text to /output/entry.txt. No network, no input files.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = "I didn't eat the sock. I adopted it. It lives under the couch now and pays rent in lint.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
