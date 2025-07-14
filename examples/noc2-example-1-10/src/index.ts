import { circle, group, translate } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromEvent, fromRAF } from "@thi.ng/rstream";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { mulN, normalize, add, randNorm, type Vec, limit, sub } from "@thi.ng/vectors";

const WIDTH = 600;
const HEIGHT = 600;
const RADIUS = 24;

let mousePos: Vec = [0, 0];

document.addEventListener("mousemove", (event) => {
	mousePos = [event.clientX, event.clientY];
});

let pos: Vec = [300, 300];
let vel: Vec = [0, 0];
let dir: Vec = [0, 0];
let acc: Vec = [0, 0];


// create geometry stream/subscription
const geo = fromRAF().map(() => {
	dir = sub([], mousePos, pos);
	dir = mulN(null, dir, 0.02);
	acc = dir;
	vel = limit(null, vel, 10);

	add(vel, vel, acc);
	add(pos, pos, vel);

	if (pos[0] > WIDTH) {
		pos[0] = 0;
	} else if (pos[0] < 0) {
		pos[0] = WIDTH;
	}

	if (pos[1] > HEIGHT) {
		pos[1] = 0;
	} else if (pos[1] < 0) {
		pos[1] = HEIGHT;
	}

	// if (pos[0] < RADIUS || pos[0] > WIDTH - RADIUS) {
	// 	vel[0] *= -1;
	// }
	// if (pos[1] < RADIUS || pos[1] > HEIGHT - RADIUS) {
	// 	vel[1] *= -1;
	// }

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
