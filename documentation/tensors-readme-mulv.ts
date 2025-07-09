// Tangled @ 2025-07-07T23:05:56-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/tensors/tpl.readme.md

import { tensor, mulV, print } from "@thi.ng/tensors";

// create 2x3 transformation matrix (row-major)
const mat = tensor([[10, 0, 100], [0, 5, 200]]);

print(mat);
//   10.0000         0  100.0000
//         0    5.0000  200.0000

// create vector
const vec = tensor([1, 1, 1]);

// matrix-vector multiply
print(mulV(null, mat, vec));
//  110.0000  205.0000