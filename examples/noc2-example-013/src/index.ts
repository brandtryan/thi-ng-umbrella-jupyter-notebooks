import { type Vec, sub } from "@thi.ng/vectors";
import { fromRAF } from "@thi.ng/rstream";
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { line } from "@thi.ng/geom";

// --- SETUP ---
const WIDTH = 640;
const HEIGHT = 240;
const { ctx } = canvas2d(WIDTH, HEIGHT, document.getElementById("app"));
const CENTER: Vec = [WIDTH / 2, HEIGHT / 2];
const ORIGIN: Vec = [0, 0];

// --- STATE ---
interface AppState {
	mousePos: Vec;
}

let state: AppState = {
	mousePos: CENTER,
};

// --- INPUT (Event Handling) ---
document.addEventListener("mousemove", (event) => {
	state.mousePos = [event.clientX, event.clientY];
});

// --- VIEW (Drawing Logic) ---
const view = (currentState: AppState) => {
	// Perform vector subtraction: mouse - center
	// The first argument `[]` is the output vector, so it's a non-mutating operation.
	const subtractedVec = sub([], currentState.mousePos, CENTER);

	// Return an array of shapes (the scene description)
	return [
		// 1. Draw a white background to clear the canvas
		["rect", { fill: "#fff", stroke: "rgb(0, 0, 0)" }, [0, 0], WIDTH, HEIGHT],

		// 2. Draw the original two vectors from the top-left origin
		["g", { stroke: "rgb(127,127,127)", weight: 2 },
			line(ORIGIN, currentState.mousePos),
			line(ORIGIN, CENTER)
		],

		// 3. Draw the result of the subtraction.
		// We wrap the line in a group and apply a `translate` transform
		// to move its origin to the center of the screen.
		["g",
			{ stroke: "rgb(0, 0, 0)", weight: 4, translate: CENTER },
			// This line is drawn from the new (translated) origin [0,0]
			// to the coordinates of the subtracted vector.
			line(ORIGIN, subtractedVec)
		],
	];
};

// --- MAIN LOOP ---
fromRAF().subscribe({
	next() {
		const scene = view(state);
		draw(ctx, scene);
	}
});
