// Tangled @ 2025-07-07T22:46:25-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fuzzy-viz/tpl.readme.md

import { invSigmoid, sigmoid, trapezoid, variable } from "@thi.ng/fuzzy";
import { varToSvg } from "@thi.ng/fuzzy-viz";
import { writeFileSync } "node:fs";

// temperature sets (in celsius)
const temp = variable([-20, 40], {
	freezing: invSigmoid(0, 2),
	cold: trapezoid(-1, 2, 16, 20),
	warm: trapezoid(15, 20, 30, 34),
	hot: sigmoid(32, 2),
});

// generate & write SVG file
writeFileSync("temperature.svg", varToSvg(temp, { samples: 200 }));