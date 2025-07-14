
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM as RND, pickRandom } from "@thi.ng/random";

// --- The Functional Programming Core ---

// 1. STATE REPRESENTATION
const canvasSize: number[] = [640, 240];
let walkerPos: number[] = [canvasSize[0] / 2, canvasSize[1] / 2];
const source = [-1, 0, 1]

// 2. BEHAVIOR (as a pure function)
const updateWalker = (pos: number[]): number[] => {
	const dx = pickRandom(source, RND);
	const dy = pickRandom(source, RND);
	return [pos[0] + dx, pos[1] + dy];
};

// 3. VIEW (as a pure function)
const viewWalker = (pos: number[]) => {
	return ["circle", { fill: "#fff" }, pos, 1];
};

// --- Application Setup & Main Loop ---

// Find the <div id="app"> in our index.html
const app = document.getElementById("app")!;

// Create the canvas and get its context using the exact, proven pattern
// from your working example.
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

// The main animation loop function
const frame = () => {

	// A. Update state
	walkerPos = updateWalker(walkerPos);

	// B. Get scene description
	const scene = viewWalker(walkerPos);

	// C. Render the scene
	draw(ctx, [scene]);

	// D. Request the next frame
	requestAnimationFrame(frame);
};

// Draw the initial background *once* before the loop starts.
// The `draw` function expects an array of shapes as its second argument.
draw(ctx, [
	["rect", { fill: "#242424" }, [0, 0], canvasSize[0], canvasSize[1]]
]);

// Start the animation loop!
frame();
