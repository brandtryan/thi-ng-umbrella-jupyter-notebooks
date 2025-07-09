// Tangled @ 2025-07-07T23:18:57-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bench/src/profiler.ts

import { Profiler } from "@thi.ng/bench";

const profiler = new Profiler();

// recursive function
const countdown = (n: number, acc: number[] = []) => {
  profiler.start("countdown");
  if (n > 0) countdown(n - 1, (acc.push(n),acc));
  profiler.end("countdown");
  return acc;
}

console.log(countdown(10));
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

console.log(countdown(5));
// [ 5, 4, 3, 2, 1 ]

console.log(profiler.deref());
// {
//   countdown: {
//     id: 'countdown',
//     total: 0.029665688286,
//     timePerCall: 0.0017450404874117648,
//     totalPercent: 96.0872831622525,
//     calls: 17,
//     callsPercent: 100,
//     maxDepth: 11
//   }
// }