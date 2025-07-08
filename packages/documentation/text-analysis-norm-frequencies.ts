// Tangled @ 2025-07-07T23:20:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/frequencies.ts

import { normFrequencies, tokenize } from "@thi.ng/text-analysis";

console.log(
  normFrequencies(tokenize("to be or not to be"))
);
// Map(4) { "to": 0.333, "be": 0.333, "or": 0.166, "not": 0.166 }