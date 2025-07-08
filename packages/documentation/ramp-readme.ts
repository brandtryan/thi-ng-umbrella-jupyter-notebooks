// Tangled @ 2025-07-07T22:59:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/tpl.readme.md

import { linear, hermite, easing } from "@thi.ng/ramp";

const stops = [[0.1, 0], [0.5, 1], [0.9, 0]];

const rampL = linear(stops);
const rampH = hermite(stops);
const rampE = easing(stops);

for(let i = 0; i <= 10; i++) {
	const t = i / 10;
    console.log(t, rampL.at(t).toFixed(3), rampH.at(t).toFixed(3), rampE.at(t).toFixed(3));
}

// 0   0.000 0.000 0.000
// 0.1 0.000 0.000 0.000
// 0.2 0.250 0.156 0.016
// 0.3 0.500 0.500 0.500
// 0.4 0.750 0.844 0.984
// 0.5 1.000 1.000 1.000
// 0.6 0.750 0.844 0.984
// 0.7 0.500 0.500 0.500
// 0.8 0.250 0.156 0.016
// 0.9 0.000 0.000 0.000
// 1   0.000 0.000 0.000