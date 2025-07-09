// Tangled @ 2025-07-07T23:20:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/vec.ts

import { defVocab, decodeSparse, tokenize } from "@thi.ng/text-analysis";

const vocab = defVocab(
  tokenize("the quick brown fox jumps over the lazy dog")
);

console.log(decodeSparse(vocab, [0, 2, 4, 7]));
// [ "the", "brown", "jumps", "dog" ]

console.log(decodeSparse(vocab, [0, 3, 6]));
// [ "the", "fox", "lazy" ]