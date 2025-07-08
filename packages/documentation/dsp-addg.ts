// Tangled @ 2025-07-07T23:19:15-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/addg.ts

import { addG, constant } from "@thi.ng/dsp";

console.log(
  addG(constant(1), 10).take(5)
);
// [ 10, 11, 12, 13, 14 ]