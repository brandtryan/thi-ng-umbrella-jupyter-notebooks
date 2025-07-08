// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import {
	colorsFromTheme,
	distCIEDE2000,
	lch,
	proximity,
	sort,
	type ColorThemePartTuple,
} from "@thi.ng/color";

// (theme from above example)
const theme: ColorThemePartTuple[] = [
	["cool", "goldenrod"],
	["hard", "hotpink", 0.1],
	["fresh", "springgreen", 0.1],
];

const colors = [...colorsFromTheme(theme, { num: 200, variance: 0.05 })];

sort(colors, proximity(lch("#fff"), distCIEDE2000()));