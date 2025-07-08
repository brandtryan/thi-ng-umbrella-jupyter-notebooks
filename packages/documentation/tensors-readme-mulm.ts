// Tangled @ 2025-07-07T23:05:56-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/tensors/tpl.readme.md

import { tensor, mulM, print } from "@thi.ng/tensors";

// create 2x3 matrix
const m1 = tensor([[1, 2, 3], [4, 5, 6]]);

print(m1);
//    1.0000    2.0000    3.0000
//    4.0000    5.0000    6.0000

// create transposed view (view only, zero-copy)
const m2 = m1.transpose([1, 0]);

print(m2);
//    1.0000    4.0000
//    2.0000    5.0000
//    3.0000    6.0000

// matrix multiplication
// (here if 1st arg is null, a new tensor will be created)
print(mulM(null, m1, m2));
//   14.0000   32.0000
//   32.0000   77.0000