// Tangled @ 2025-07-07T23:19:04-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/cellular/src/1d.ts

import { MultiCA1D } from "@thi.ng/cellular";

// classic Wolfram Rule 110 automata
const wolfram = new MultiCA1D(
  [{
    kernel: [[-1, 0], [0, 0], [1, 0]],
    rule: 110,
    states: 2,
    reset: false
  }],
  256
);