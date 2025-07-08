// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { css, multiCosineGradient, srgb } from "@thi.ng/color";

const gradient = multiCosineGradient({
	num: 10,
	// gradient stops (normalized positions)
	stops: [
		[0.1, [1, 0, 0, 1]],
		[0.5, [0, 1, 0, 1]],
		[0.9, [0, 0, 1, 1]],
	],
	// optional color transform/coercion
	tx: srgb
});

console.log(gradient);
// [
// 	[1, 0, 0, 1],
// 	[1, 0, 0, 1],
// 	[0.854, 0.146, 0, 1],
// 	[0.5, 0.5, 0, 1],
// 	[0.146, 0.854, 0, 1],
// 	[0, 1, 0, 1],
// 	[0, 0.854, 0.146, 1],
// 	[0, 0.5, 0.5, 1],
// 	[0, 0.146, 0.853, 1],
// 	[0, 0, 1, 1],
// 	[0, 0, 1, 1]
// ]

// convert to CSS
console.log(gradient.map((x) => css(x)));
// [
//   "#ff0000",
//   "#ff0000",
//   "#da2500",
//   "#807f00",
//   "#25da00",
//   "#00ff00",
//   "#00da25",
//   "#00807f",
//   "#0025da",
//   "#0000ff",
//   "#0000ff",
// ]