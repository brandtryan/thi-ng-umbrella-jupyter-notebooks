import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM, normal } from "@thi.ng/random";
import { circle } from "@thi.ng/geom";

// --- FP CORE ---

// 1. STATE REPRESENTATION
const WIDTH = 640;
const HEIGHT = 240;
const MEAN = WIDTH / 2;
const STD_DEV = 60;
const FILL_COLOR = "rgba(0, 0, 0, 0.04)"; // Semi-transparent black

// --- Main Application Logic ---
const app = document.getElementById("app");

// 1. Setup Canvas
// The `canvas2d` function creates a canvas element, gets its 2D context,
// and appends it to app div
const { ctx } = canvas2d(WIDTH, HEIGHT, app);

// 2. Setup PRNG
// The `normal` function returns a new function which in turn produces a
// random number following a normal(Gaussian?) distribution with the given options.
const randomX = normal(SYSTEM, MEAN, STD_DEV);

// 3. Animation Loop
const animate = () => {
	// Generate a new random x-coordinate
	const x = randomX();
	const y = HEIGHT / 2;

	// Create a circle using the random coordinate.
	const dot = circle([x, y], 8);

	// Define the visual style of the circle (hiccup format)
	const shape = [
		"g", // 'g' is a group element that can hold attributes
		{ fill: FILL_COLOR },
		dot
	];

	// `draw` renders data structure onto the canvas.
	draw(ctx, shape);

	// Request the next animation frame (creates drawing loop)
	requestAnimationFrame(animate);
};

// 4. Start the animation
animate();
