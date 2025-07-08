// Tangled @ 2025-07-07T23:20:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/tensor.ts

import { tensor } from "@thi.ng/vectors";

console.log(
  tensor([], [1, 2, 3], [4, 5])
);
// [ 4, 8, 12, 5, 10, 15 ]

console.log(
  tensor([], [4, 5], [1, 2, 3])
);
// [ 4, 5, 8, 10, 12, 15 ]