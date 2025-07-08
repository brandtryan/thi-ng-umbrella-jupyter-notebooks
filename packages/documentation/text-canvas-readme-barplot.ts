// Tangled @ 2025-07-07T23:06:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-canvas/tpl.readme.md

import { HERMITE_V, VEC4, ramp } from "@thi.ng/ramp";
import { canvas, formatCanvas, plotBarChartV } from "@thi.ng/text-canvas";
import { FG_BLUE, FG_GRAY, FG_GREEN, FG_RED, FMT_ANSI16 } from "@thi.ng/text-format";

// define curves for 4 params which will be computed via
// cubic hermite interpolation
const curves = ramp(
	// use VEC4 interpolation preset
	HERMITE_V(VEC4),
	// keyframes
	[
		[0.0, [1, 0, 0.33, 0]],
		[0.5, [0, 1, 0.06, -0.3]],
		[1.0, [0, 0, 1, 0.5]],
	]
);

const W = 100;
const H = 24;
const samples: number[][] = [];

// sample curves
for (let i = 0; i < W; i++) {
	samples.push(<number[]>curves.at(i / (W - 1)));
}

// create empty canvas
const plot = canvas(W, H);

// create all 4 bar plots in the same canvas, by default uses additive blending
// to composite each plot layer
plotBarChartV(
	plot,
	{ min: 0, max: 1 },
	{ data: samples.map((x) => x[0]), color: FG_RED },
	{ data: samples.map((x) => x[1]), color: FG_GREEN },
	{ data: samples.map((x) => x[2]), color: FG_BLUE },
	{ data: samples.map((x) => x[3]), color: FG_GRAY }
);

// format & print canvas using ANSI colors
console.log(formatCanvas(plot, FMT_ANSI16));