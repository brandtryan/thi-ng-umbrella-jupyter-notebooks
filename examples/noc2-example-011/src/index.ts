
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";

// --- The Functional Programming Core ---

// 1. STATE REPRESENTATION
const canvasSize: number[] = [640, 240];
let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

// 2. BEHAVIOR (as a pure function)
function update() {
	x += xspeed;
	y += yspeed;

	if (x > canvasSize[0] || x < 0) {
		xspeed = xspeed * -1;
	}

	if (y > canvasSize[1] || y < 0) {
		yspeed = yspeed * -1;
	}
	return [x, y];
}

// 3. VIEW (as a pure function)
const viewWalker = (pos: number[]) => {
	return ["circle", { stroke: "#000", fill: "#9a9b9e" }, pos, 24];
};

// --- Application Setup & Main Loop ---

// Find the <div id="app"> in our index.html
const app = document.getElementById("app")!;

// Create the canvas and get its context using the exact, proven pattern
// from your working example.
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

// The main animation loop function
const frame = () => {

	const scene = [["rect", { fill: "#fff" }, [0, 0], canvasSize[0],
		canvasSize[1]], [viewWalker(update())]];

	// C. Render the scene
	draw(ctx, [scene]);

	// D. Request the next frame
	requestAnimationFrame(frame);
};

// Draw the initial background *once* before the loop starts. [PAINTING]

// The `draw` function expects an array of shapes as its second argument.
// draw(ctx, [
// 	["rect", { fill: "#242424" }, [0, 0], canvasSize[0], canvasSize[1]]
// ]);

// Start the animation loop!
frame();
