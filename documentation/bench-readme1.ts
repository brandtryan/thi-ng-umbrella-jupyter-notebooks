// Tangled @ 2025-07-07T22:37:44-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bench/tpl.readme.md

import { timed, bench } from "@thi.ng/bench";

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

// measure single execution time
console.log(timed(() => fib(40)));
// 318.86ms
// 102334155

console.log(timed(() => fib2(40)));
// 0.05ms
// 102334155

// measure 1mil iterations (default)
console.log(bench(() => fib(10), 1e6));
// 157.41ms
// 55

console.log(bench(() => fib2(10), 1e6));
// 95.97ms
// 55