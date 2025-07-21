import { circle, group, translate } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { madd, normalize, add, randNorm, type Vec, limit, sub, mul2 } from "@thi.ng/vectors";

const WIDTH = 800;
const HEIGHT = 600;
const RADIUS = 24;
const GRAVITY: Vec = [0, 0.1];

let wind: Vec = [0, 0];

// let mousePos: Vec = [0, 0];
// document.addEventListener("mousemove", (event) => {
// 	mousePos = [event.clientX, event.clientY];
// });

document.addEventListener("mousedown", (event) => {
	wind = [0.1, 0];
});

document.addEventListener("mouseup", (event) => {
	wind = [0, 0];
});

let pos: Vec = [WIDTH / 2, HEIGHT / 2];
let vel: Vec = [0, 0];
let acc: Vec = [0, 0];


// create geometry stream/subscription
const geo = fromRAF().map(() => {
	acc = add([], GRAVITY, wind);
	vel = limit(null, vel, 10);
	add(vel, vel, acc);
	add(pos, pos, vel);

	// // Permeable Edges
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

	// Non-permeable
	if (pos[0] < RADIUS || pos[0] > WIDTH - RADIUS) {
		vel[0] *= -1;
	}
	if (pos[1] < RADIUS || pos[1] > HEIGHT - RADIUS) {
		vel[1] *= -1;
	}

	return group(
		{ __background: "#0ff" },
		[
			group({ stroke: "#000", weight: 2 }, [
				circle(pos, RADIUS)
			]),
		]
	);
});

// create & mount canvas component
$canvas(geo, [WIDTH, HEIGHT]).mount(document.getElementById("app")!);
