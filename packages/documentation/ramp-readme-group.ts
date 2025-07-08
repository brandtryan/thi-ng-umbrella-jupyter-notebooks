// Tangled @ 2025-07-07T22:59:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/tpl.readme.md

import { group, linear, wrap } from "@thi.ng/ramp";

const example = group({
	// child timeline with looping behavior
	a: linear([[0, 0], [20, 100]], { domain: wrap }),
	// another child timeline
	b: linear([[10, 100], [90, 200]]),
});

console.log(JSON.stringify([...example.samples(10, 0, 100)]));
// [
// 	[0, { a: 0, b: 100 }],
// 	[10, { a: 50, b: 100 }],
// 	[20, { a: 100, b: 112.5 }],
// 	[30, { a: 50, b: 125 }],
// 	[40, { a: 100, b: 137.5 }],
// 	[50, { a: 50, b: 150 }],
// 	[60, { a: 0, b: 162.5 }],
// 	[70, { a: 50, b: 175 }],
// 	[80, { a: 0, b: 187.5 }],
// 	[90, { a: 50, b: 200 }],
// 	[100, { a: 50, b: 200 }]
// ]