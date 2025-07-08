// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/take-nth.ts

import { range, takeNth } from "@thi.ng/transducers";

console.log(
  [...takeNth(3, range(10))]
);
// [ 0, 3, 6, 9 ]