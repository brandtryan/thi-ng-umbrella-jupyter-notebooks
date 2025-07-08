// Tangled @ 2025-07-07T23:20:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/frequencies.ts

import { sortedFrequencies, tokenize } from "@thi.ng/text-analysis";

console.log(
  sortedFrequencies(tokenize("to be or not to be"))
);
// [ [ "to", 2 ], [ "be", 2 ], [ "or", 1 ], [ "not", 1 ] ]