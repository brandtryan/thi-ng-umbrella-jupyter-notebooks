import { type Vec, add } from "@thi.ng/vectors";
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";

// 1. STATE REPRESENTATION
const canvasSize = [640, 240];
let pos: Vec = [100, 100];
let vel: Vec = [2.5, 2];

// 2. BEHAVIOR (as a pure function)
function update() {
	pos = add(pos, pos, vel);
	if (pos[0] > canvasSize[0] || pos[0] < 0) {
		vel[0] = vel[0] * -1;
	}
	if (pos[1] > canvasSize[1] || pos[1] < 0) {
		vel[1] = vel[1] * -1;
	}
	return pos;
}

// 3. VIEW (as a pure function)
const viewBall = (pos: Vec) => {
	return ["circle", { stroke: "#000", fill: "#9a9b9e" }, pos, 24];
};

// --- Application Setup & Main Loop ---

const app = document.getElementById("app")!;
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

const frame = () => {
	const scene = [["rect", { fill: "#fff" }, [0, 0], canvasSize[0],
		canvasSize[1]], [viewBall(update())]];

	draw(ctx, [scene]);

	requestAnimationFrame(frame);
};
// Draw the initial background *once* before the loop starts. [PAINTING]
// draw(ctx, [
// 	["rect", { fill: "#242424" }, [0, 0], canvasSize[0], canvasSize[1]]
// ]);
frame();
