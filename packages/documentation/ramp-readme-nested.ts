// Tangled @ 2025-07-07T22:59:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/tpl.readme.md

import { HERMITE_V, LINEAR_N, VEC2, nested, ramp } from "@thi.ng/ramp";

const r = ramp(
	nested({
		a: LINEAR_N,
		b: nested({
			c: HERMITE_V(VEC2),
		}),
	}),
	[
		[0, { a: 0, b: { c: [100, 100] } }],
		[0.5, { a: 10, b: { c: [300, 50] } }],
		[1, { a: -10, b: { c: [200, 120] } }],
	]
);

// produce an iterator of N uniformly spaced sample points
// across the full range of the ramp
console.log([...r.samples(10)]);

// [
// 	[0, { a: 0, b: { c: [100, 100] } }],
// 	[0.1, { a: 2, b: { c: [120.8, 94.8] } }],
// 	[0.2, { a: 4, b: { c: [170.4, 82.4] } }],
// 	[0.3, { a: 6, b: { c: [229.6, 67.6] } }],
// 	[0.4, { a: 8, b: { c: [279.2, 55.2] } }],
// 	[0.5, { a: 10, b: { c: [300, 50] } }],
// 	[0.6, { a: 6, b: { c: [289.6, 57.28] } }],
// 	[0.7, { a: 2, b: { c: [264.8, 74.64] } }],
// 	[0.8, { a: -2, b: { c: [235.2, 95.36] } }],
// 	[0.9, { a: -6, b: { c: [210.4, 112.72] } }],
// 	[1, { a: -10, b: { c: [200, 120] } }]
// ]