// Tangled @ 2025-07-07T22:41:18-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/complex/tpl.readme.md

import { abs, madd, type Complex } from "@thi.ng/complex";
import { SHADES_ASCII_16, canvas, formatCanvas } from "@thi.ng/text-canvas";
import { map, range2d, run } from "@thi.ng/transducers";
import { fit2 } from "@thi.ng/vectors";

// mandelbrot evaluation
const mandelbrot = (pos: Complex, escapeRadius: number, maxIter: number) => {
	let i = 0;
	for (
		let z: Complex = pos;
		++i < maxIter && abs(z) < escapeRadius;
		z = madd(z, z, pos)
	);
	return maxIter - i;
};

// text canvas setup
const canv = canvas(120, 60);

// evaluate for all pixels and visualize as ASCII art
run(
	map((pos) => {
		// compute fractal at pos
		const m = mandelbrot(
			// map pixel pos to mandelbrot region
			fit2([], pos, [0, 0], canv.size, [-2, -1.25], [0.65, 1.25]),
			// escape radius
			2000,
			// max iter = number of chars/shades
			16
		);
		// set pixel using corresponding shade
		canv.setAt(pos[0], pos[1], SHADES_ASCII_16[m]);
	}),
	range2d(...canv.size)
);

// output canvas as string
console.log(formatCanvas(canv));