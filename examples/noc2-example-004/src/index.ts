
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

// 1. Setup Canvas
// The `canvas2d` function creates a canvas element, gets its 2D context,
// and appends it to a parent element (in this case, the document body).
const app = document.getElementById("app");
const { ctx } = canvas2d(WIDTH, HEIGHT, app);

// 2. Setup Random Number Generator
// The `gaussian` function returns a new function which, when called,
// produces a random number following a normal distribution with the given options.
const randomX = normal(SYSTEM, MEAN, STD_DEV);

// 3. Animation Loop
// This function will be called repeatedly to create the animation effect.
const animate = () => {
	// Generate a new random x-coordinate
	const x = randomX();
	const y = HEIGHT / 2;

	// Create a circle geometry object using the random coordinate.
	const dot = circle([x, y], 8);

	// Define the visual style of the circle in hiccup format.
	// `draw` will render this data structure onto the canvas.
	const shape = [
		"g", // 'g' is a group element that can hold attributes
		{ fill: FILL_COLOR },
		dot
	];

	// Draw the hiccup shape to the canvas context.
	draw(ctx, shape);

	// Request the next animation frame to create a continuous drawing loop.
	requestAnimationFrame(animate);
};

// 4. Start the animation
animate();
