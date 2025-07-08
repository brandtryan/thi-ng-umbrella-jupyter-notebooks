// SPDX-License-Identifier: Apache-2.0
import { threadLast } from "@thi.ng/compose";
import { osc, parabolic, sin } from "@thi.ng/dsp";
import { circle, group } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { mapIndexed, take, zip } from "@thi.ng/transducers";
import type { Vec } from "@thi.ng/vectors";
import { SYSTEM as RND, pickRandom } from "@thi.ng/random";

// create subscription for `requestAnimationFrame()` (RAF) events
// transform input timestamps into geometry
const app = document.getElementById("app");
const step = [-1, 0, 1];
const choice = pickRandom(step);

const geo = fromRAF().map((time) =>
	// generate geometry...
	// see: https://docs.thi.ng/umbrella/compose/functions/threadLast.html
	threadLast(
		// 1. form coordinates by combining oscillators into tuples (2d points).
		// used like this, the oscillators (and therefore `zip` too) are
		// producing a lazy, but infinite(!) sequence...
		// depending on oscillator config, this approach can also be used to
		// generate Lissajous curves...
		zip(
			// x-axis oscillator (see thi.ng/dsp readme)
			// oscillators are also iterable, hence can be used with zip
			// https://docs.thi.ng/umbrella/dsp/functions/osc-1.html
			osc(sin, 0.004, 10, 270, time / 500),

			// y-axis oscillator (with different waveform & phase offset)
			osc(parabolic, 0.004, 10, 70, time / 1000)

			// [choice + i - i, choice],
		),
		// 2. only take first N values from the infinite sequence
		[take, 1],
		// 3. convert points into colored circles:
		// unlike in e.g. Processing/p5.js these are **NOT** drawing commands!
		// here we're purely generating 2d shapes, which could be
		// used in many different ways (incl. for drawing to a canvas, as done
		// further below, but at this point there're just data...)
		[
			mapIndexed,
			(i: number, pos: Vec) =>
				circle(
					pos,
					2,
					// colors can be given as plain RGB(A) vectors or CSS strings
					{ fill: [0, 0, 0] }
				),
		],
		// 4. wrap all shapes into a group shape node
		// as container for entire scene...
		[
			group,
			// group attributes:
			// fill canvas w/ background color (see thi.ng/rdom-canvas readme)
			{ __background: "#0ff" },
		],
	)
);

// create & mount reactive HTML canvas component (with fixed size).
// this DOM component subscribes to the above geometry stream and
// redraws the canvas with every update/frame...
$canvas(geo, [640, 240]).mount(document.body);

// import { canvas2d } from "@thi.ng/canvas";
// import { draw } from "@thi.ng/hiccup-canvas";
// import { SYSTEM as RND } from "@thi.ng/random";
// import { add, type Vec } from "@thi.ng/vectors";

// // --- The Functional Programming Core ---

// // 1. STATE REPRESENTATION
// const canvasSize: Vec = [window.innerWidth, window.innerHeight];
// let walkerPos: Vec = [canvasSize[0] / 2, canvasSize[1] / 2];

// // 2. BEHAVIOR (as a pure function)
// const updateWalker = (pos: Vec): Vec => {
// 	const step: Vec = [Math.floor(RND.minmax(-1, 1)), Math.floor(RND.minmax(-1, 1))];
// 	return add([], pos, step);
// };

// // 3. VIEW (as a pure function)
// const viewWalker = (pos: Vec) => {
// 	// Use circle - points are invisible basically
// 	return ["circle", { fill: "#fff" }, pos, 1]; // pos is the center, 5 is the radius
// };

// // --- Application Setup & Main Loop ---

// // Find the <div id="app"> in our index.html
// const app = document.getElementById("app")!;

// // Create the canvas and get its context using the exact, proven pattern
// // from your working example.
// const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

// // The main animation loop function
// const frame = () => {

// 	// A. Update state
// 	walkerPos = updateWalker(walkerPos);

// 	// B. Get scene description
// 	const scene = viewWalker(walkerPos);

// 	// C. Render the scene
// 	draw(ctx, [scene]);

// 	// D. Request the next frame
// 	requestAnimationFrame(frame);
// };

// // Draw the initial background *once* before the loop starts.
// // The `draw` function expects an array of shapes as its second argument.
// draw(ctx, [
// 	["rect", { fill: "#242424" }, [0, 0], ...canvasSize]
// ]);

// // Start the animation loop!
// frame();
