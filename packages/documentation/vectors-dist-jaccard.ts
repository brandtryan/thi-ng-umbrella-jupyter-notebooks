// Tangled @ 2025-07-07T23:20:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/dist-jaccard.ts

import { distJaccard } from "@thi.ng/vectors";

console.log(distJaccard([0, 0, 0, 0], [1, 1, 1, 1]));
// 1

console.log(distJaccard([0, 1, 0, 0], [1, 1, 1, 1]));
// 0.75

console.log(distJaccard([0, 1, 1, 0], [0, 1, 1, 0]));
// 0