// Tangled @ 2025-07-07T22:37:44-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bench/tpl.readme.md

import { suite, FORMAT_MD } from "@thi.ng/bench";

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

suite(
    [
        { title: "fib2(10)", fn: () => fib2(10) },
        { title: "fib2(20)", fn: () => fib2(20) },
        { title: "fib2(30)", fn: () => fib2(30) },
        { title: "fib2(40)", fn: () => fib2(40) },
    ],
    { iter: 10, size: 100000, warmup: 5, format: FORMAT_MD }
)

// |                   Title|    Iter|    Size|       Total|   Frequency|    Mean|  Median|     Min|     Max|      Q1|      Q3|     SD%|
// |------------------------|-------:|-------:|-----------:|-----------:|-------:|-------:|-------:|-------:|-------:|-------:|-------:|
// |                fib2(10)|      10|  100000|       93.25| 10723774.45|    9.33|    9.25|    8.94|   10.27|    9.03|    9.46|    4.15|
// |                fib2(20)|      10|  100000|      110.73|  9030823.33|   11.07|   11.02|   10.91|   11.56|   10.92|   11.10|    1.76|
// |                fib2(30)|      10|  100000|      175.10|  5711056.26|   17.51|   17.58|   17.03|   17.65|   17.50|   17.60|    0.96|
// |                fib2(40)|      10|  100000|      200.01|  4999765.64|   20.00|   19.71|   19.34|   21.78|   19.55|   19.91|    3.90|