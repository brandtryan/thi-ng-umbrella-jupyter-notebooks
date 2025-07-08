// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import {
	COLOR_RANGES,
	colorFromRange,
	colorsFromRange,
	colorsFromTheme,
	hsv,
	lch,
} from "@thi.ng/color";

// single random color drawn from the "bright" color range preset
colorFromRange("bright");
// [ 0.7302125322518669, 0.8519945301256682, 0.8134374983367859, 1 ]

// single random color based on given raw HSV base color and preset
colorFromRange("warm", { base: hsv(0.33, 1, 1) });
// $Color {
//   offset: 0,
//   stride: 1,
//   buf: [ 0.774977122048776, 0.7432832945738063, 0.3186095419992927, 1 ]
// }

// infinite iterator of colors sampled from the preset
// (see table below)
const colors = colorsFromRange("bright");
colors.next();
// {
//   value: [ 0.006959075656347791, 0.8760165887192115, 0.912149937028727, 1 ],
//   done: false
// }

// 10 cool reds, w/ ±10% hue variance
[...colorsFromRange("cool", { num: 10, base: lch(1, 0.8, 0), variance: 0.1 })];

// generate colors based on given (weighted) textual description(s)
// here using named CSS colors, but could also be or typed colors or raw LCH tuples
[
	...colorsFromTheme(
		[
			["warm", "goldenrod"],
			["cool", "springgreen", 0.1],
		],
		{ num: 100, variance: 0.05 }
	),
];

// theme parts can also be given in the format used internally
// all keys are optional (range, base, weight),
// but at least `range` or `base` must be given...
[
	...colorsFromTheme(
		[
			{ range: "warm", base: "goldenrod" },
			{ range: COLOR_RANGES.cool, base: hsv(0, 1, 0.5), weight: 0.1 },
		],
		{ num: 100, variance: 0.05 }
	),
];