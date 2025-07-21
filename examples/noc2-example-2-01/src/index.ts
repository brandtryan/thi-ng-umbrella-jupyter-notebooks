import { circle, group, translate } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { maddN, normalize, add, randNorm, type Vec, limit, sub, mul2 } from "@thi.ng/vectors";

// Width of canvas
const WIDTH = 800;
// Height of canvas
const HEIGHT = 600;
// Radius of ball_1
const RADIUS_1 = 12;
// Radius of ball_2
const RADIUS_2 = 44;
// Mass of ball_1
const MASS_1 = 0.044;
// Mass of ball_2
const MASS_2 = 0.012;
// Force of gravity
const GRAVITY: Vec = [0, 0.1];
// Force of wind
let WIND: Vec = [0, 0];

// Apply wind force
onmousedown = e => WIND = [0.1, 0];
// Stop wind force
onmouseup = e => WIND = [0, 0];

// Initial position of ball_1
let position_1: Vec = [WIDTH / 2 + 150, HEIGHT / 2];
// Initial velocity of ball_1
let velocity_1: Vec = [0, 0];
// Initial acceleration of ball_1
let acceleration_1: Vec = [0, 0];

// Initial position of ball_2
let position_2: Vec = [WIDTH / 2 - 150, HEIGHT / 2];
// Initial velocity of ball_1
let velocity_2: Vec = [0, 0];
// Initial acceleration of ball_1
let acceleration_2: Vec = [0, 0];

// **** Create geometry stream/subscription
const geometry = fromRAF().map(() => {
	// for every frame...
	// acceleration_1 is accumulation of all forces
	acceleration_1 = maddN([], GRAVITY, MASS_1, WIND);
	// velocity_1 limiter
	velocity_1 = limit(null, velocity_1, 10);
	// add acceleration_1 to velocity_1
	add(velocity_1, velocity_1, acceleration_1);
	// add velocity_1 to position_1
	add(position_1, position_1, velocity_1);

	// Non-Permeable Edges (keep ball inside canvas/bounce off walls)
	if (position_1[0] < RADIUS_1 || position_1[0] > WIDTH - RADIUS_1) {
		velocity_1[0] *= -1;
	}
	if (position_1[1] < RADIUS_1 || position_1[1] > HEIGHT - RADIUS_1) {
		velocity_1[1] *= -1;
	}

	// acceleration_2 is accumulation of all forces
	acceleration_2 = maddN([], GRAVITY, MASS_2, WIND);
	// velocity_2 limiter
	velocity_2 = limit(null, velocity_2, 10);
	// add acceleration_2 to velocity_2
	add(velocity_2, velocity_2, acceleration_2);
	// add velocity_2 to position_2
	add(position_2, position_2, velocity_2);

	// Non-Permeable Edges (keep ball inside canvas/bounce off walls)
	if (position_2[0] < RADIUS_2 || position_2[0] > WIDTH - RADIUS_2) {
		velocity_2[0] *= -1;
	}
	if (position_2[1] < RADIUS_2 || position_2[1] > HEIGHT - RADIUS_2) {
		velocity_2[1] *= -1;
	}

	return group(
		// special background object
		{ __background: "#0ff" },
		// the ball
		[
			group({ stroke: "#000", weight: 2 }, [
				circle(position_1, RADIUS_1),
				circle(position_2, RADIUS_2)
			]),
		],
	);
});

// create & mount canvas component
$canvas(geometry, [WIDTH, HEIGHT]).mount(document.getElementById("app")!);

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
