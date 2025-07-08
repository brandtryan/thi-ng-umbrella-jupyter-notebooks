// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { colorsFromTheme, swatchesH, type ColorThemePartTuple } from "@thi.ng/color";
import { serialize } from "@thi.ng/hiccup";
import { svg } from "@thi.ng/hiccup-svg";
import { writeFileSync } "node:fs";

// color theme definition using:
// color range preset names, CSS colors and weights
const theme: ColorThemePartTuple[] = [
	["cool", "goldenrod"],
	["hard", "hotpink", 0.1],
	["fresh", "springgreen", 0.1],
];

// generate 200 LCH colors based on above description
const colors = [...colorsFromTheme(theme, { num: 200, variance: 0.05 })];

// create SVG doc of color swatches (hiccup format)
const doc = svg(
	{ width: 1000, height: 50, __convert: true },
	swatchesH(colors, 5, 50)
);

// serialize to SVG file
writeFileSync("swatches-ex01.svg", serialize(doc));