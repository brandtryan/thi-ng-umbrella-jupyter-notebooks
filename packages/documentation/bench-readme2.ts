// Tangled @ 2025-07-07T22:37:44-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bench/tpl.readme.md

import { benchmark } from "@thi.ng/bench";

// functions to benchmark...
const fib = (n: number) =>
	n > 2
		? fib(n - 1) + fib(n - 2)
		: n > 0
			? 1
			: 0;

const fib2 = (n: number) => {
    const res = [0, 1];
    for(let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n];
};

benchmark(() => fib(40), { title: "fib", iter: 10, warmup: 5 });
// benchmarking: fib
//         warmup... 1480.79ms (5 runs)
//         total: 2917.41ms, runs: 10 (@ 1 calls/iter)
//         freq: 3.43 ops/sec
//         mean: 291.74ms, median: 291.67ms, range: [291.51..292.58]
//         q1: 291.55ms, q3: 291.79ms
//         sd: 0.10%

// also returns results:
// {
//   title: "fib",
//   iter: 10,
//   size: 1,
//   total: 2917.4060010000003,
//   freq: 3.4277025537660157,
//   mean: 291.74060010000005,
//   median: 291.668125,
//   min: 291.50624999999997,
//   max: 292.581834,
//   q1: 291.55116699999996,
//   q3: 291.788417,
//   sd: 0.10295312107365955,
// }