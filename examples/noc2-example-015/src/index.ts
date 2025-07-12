import { type Vec, mulN, sub, mag } from "@thi.ng/vectors";
import { fromRAF } from "@thi.ng/rstream";
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { line } from "@thi.ng/geom";

// --- SETUP ---
const canvasSize: Vec = [window.innerWidth, window.innerHeight];
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], document.getElementById("app"));
const CENTER: Vec = [canvasSize[0] / 2, canvasSize[1] / 2];
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
	// Perform vector subtraction/multiplication
	// Return an array of shapes (the scene description)
	return [
		// Draw a white background to clear the canvas
		["rect", { fill: "#fff", stroke: "rgb(0, 0, 0)" }, [0, 0],
			canvasSize[0], canvasSize[1]],

		// Draw multiplied vector from a transformed ORIGIN to mouseposition
		["g",
			{ stroke: "rgb(0, 0, 0)", weight: 24 },
			line([0, 0], [mag(currentState.mousePos), 0]),
		],

		// Draw line from center to mouseposition
		["g", { stroke: "rgb(127,127,127)", weight: 2, translate: CENTER },
			line(ORIGIN, currentState.mousePos),
		],
	];
};

// --- MAIN LOOP --- //
fromRAF().subscribe({
	next() {
		const scene = view(state);
		draw(ctx, scene);
	}
});
