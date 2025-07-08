// Tangled @ 2025-07-07T23:18:57-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bench/src/profiler.ts

import { Profiler } from "@thi.ng/bench";

const profiler = new Profiler();

const sum = profiler.wrap(
  "sum",
  (vec: number[]) => vec.reduce((acc, x) => acc + x, 0)
);

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 55

console.log(profiler.deref());
// {
//   sum: {
//     id: 'sum',
//     total: 0.015644915291,
//     timePerCall: 0.015644915291,
//     totalPercent: 100,
//     calls: 1,
//     callsPercent: 100,
//     maxDepth: 1
//   }
// }