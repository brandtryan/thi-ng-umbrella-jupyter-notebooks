import { circle, group, translate } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { madd, normalize, add, randNorm, type Vec, limit, sub, mul2 } from "@thi.ng/vectors";

// Width of canvas
const WIDTH = 800;
// Height of canvas
const HEIGHT = 600;
// Radius of ball
const RADIUS = 24;
// Force of gravity
const GRAVITY: Vec = [0, 0.1];
// Force of wind
let WIND: Vec = [0, 0];

// Apply wind force
onmousedown = e => WIND = [0.1, 0];
// Stop wind force
onmouseup = e => WIND = [0, 0];

// Initial position of ball
let pos: Vec = [WIDTH / 2, HEIGHT / 2];
// Initial velocity of ball
let vel: Vec = [0, 0];
// Initial acceleration of ball
let acc: Vec = [0, 0];

// **** Create geometry stream/subscription
const geo = fromRAF().map(() => {
	// for every frame...
	// acceleration is accumulation of all forces
	acc = add([], GRAVITY, WIND);
	// velocity limiter
	vel = limit(null, vel, 10);
	// add acceleration to velocity
	add(vel, vel, acc);
	// add velocity to position
	add(pos, pos, vel);

	// Non-Permeable Edges (keep ball inside canvas/bounce off walls)
	if (pos[0] < RADIUS || pos[0] > WIDTH - RADIUS) {
		vel[0] *= -1;
	}
	if (pos[1] < RADIUS || pos[1] > HEIGHT - RADIUS) {
		vel[1] *= -1;
	}

	return group(
		// special background object
		{ __background: "#0ff" },
		// the ball
		[
			group({ stroke: "#000", weight: 2 }, [
				circle(pos, RADIUS)
			]),
		]
	);
});

// create & mount canvas component
$canvas(geo, [WIDTH, HEIGHT]).mount(document.getElementById("app")!);

// // Permeable Edges:
// if (pos[0] > WIDTH) {
// 	pos[0] = 0;
// } else if (pos[0] < 0) {
// 	pos[0] = WIDTH;
// }
//
// if (pos[1] > HEIGHT) {
// 	pos[1] = 0;
// } else if (pos[1] < 0) {
// 	pos[1] = HEIGHT;
// }

// // Track mouse position:
// let mousePos: Vec = [0, 0];
// document.addEventListener("mousemove", (event) => {
// 	mousePos = [event.clientX, event.clientY];
// });
