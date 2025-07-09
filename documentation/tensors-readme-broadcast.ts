// Tangled @ 2025-07-07T23:05:56-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/tensors/tpl.readme.md

import { add, sub, print, tensor } from "@thi.ng/tensors";

// 2D + 1D
print(add(null, tensor([[1,2], [3,4]]), tensor([10, 20])));
//   11.0000   22.0000
//   13.0000   24.0000

// 2D + 1D (as column vector)
print(add(null, tensor([[1, 2], [3, 4]]), tensor([10, 20]).reshape([2,1])));
//   11.0000   12.0000
//   23.0000   24.0000

// 1D - 2D
print(sub(null, tensor([10, 20]), tensor([[1,2], [3,4]])));
//    9.0000   18.0000
//    7.0000   16.0000

// 1D + 3D
print(add(null, tensor([10, 20]), tensor([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])));
// --- 0: ---
//   11.0000   22.0000
//   13.0000   24.0000
// --- 1: ---
//   15.0000   26.0000
//   17.0000   28.0000

// 2D + 3D
print(add(null, tensor([[10, 20], [100, 200]]), tensor([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])));
// --- 0: ---
//   11.0000   22.0000
//  103.0000  204.0000
// --- 1: ---
//   15.0000   26.0000
//  107.0000  208.0000