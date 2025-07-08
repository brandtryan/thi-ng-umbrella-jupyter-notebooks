// Tangled @ 2025-07-07T22:59:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/tpl.readme.md

import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import { FORMATTER } from "@thi.ng/vectors";

// use the generic `ramp()` factory function with a custom implementation
// see: https://docs.thi.ng/umbrella/ramp/interfaces/RampImpl.html
const rgb = ramp(
	// use a vector interpolation preset with the VEC3 API
	HERMITE_V(VEC3),
	// keyframes
	[
		[0.0, [1, 0, 0]], // red
		[0.5, [0, 1, 0]], // green
		[1.0, [0, 0, 1]], // blue
	]
);

for (let i = 0; i <= 20; i++) {
	const t = i / 20;
	console.log(t, FORMATTER(rgb.at(t)));
}

// 0    [1.000, 0.000, 0.000]
// 0.05 [0.972, 0.028, 0.000]
// 0.1  [0.896, 0.104, 0.000]
// 0.15 [0.784, 0.216, 0.000]
// 0.2  [0.648, 0.352, 0.000]
// 0.25 [0.500, 0.500, 0.000]
// 0.3  [0.352, 0.648, 0.000]
// 0.35 [0.216, 0.784, 0.000]
// 0.4  [0.104, 0.896, 0.000]
// 0.45 [0.028, 0.972, 0.000]
// 0.5  [0.000, 1.000, 0.000]
// 0.55 [0.000, 0.972, 0.028]
// 0.6  [0.000, 0.896, 0.104]
// 0.65 [0.000, 0.784, 0.216]
// 0.7  [0.000, 0.648, 0.352]
// 0.75 [0.000, 0.500, 0.500]
// 0.8  [0.000, 0.352, 0.648]
// 0.85 [0.000, 0.216, 0.784]
// 0.9  [0.000, 0.104, 0.896]
// 0.95 [0.000, 0.028, 0.972]
// 1    [0.000, 0.000, 1.000]