import { circle, group, line, translate } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { mulN, normalize, sub, type Vec } from "@thi.ng/vectors";

const WIDTH = 600;
const HEIGHT = 600;
const ORIGIN: Vec = [0, 0];
const CENTER: Vec = [WIDTH / 2, HEIGHT / 2];

let MOUSE: Vec = [...CENTER];

document.addEventListener("mousemove", (event) => {
	MOUSE = [event.clientX, event.clientY];
});

// create geometry stream/subscription
const geo = fromRAF().map(() => {
	const vecFromCenter: Vec = sub([], MOUSE, CENTER);
	const fixedLengthVec: Vec =
		vecFromCenter[0] === 0 && vecFromCenter[1] === 0
			? [0, 0]
			: mulN([], normalize([], vecFromCenter), 50);

	// shape group w/ attribs (also see section in readme)
	return group(
		{ __background: "#0ff" },
		[
			// This group acts like p5.js's `translate(width / 2, height / 2);`
			// All shapes inside it are relative to the canvas center.
			group({ translate: CENTER }, [
				// Line 1: Thin & gray, from origin (center) to the mouse vector
				line(ORIGIN, vecFromCenter, { stroke: "#fff", weight: 2 }),

				// Line 2: Thick & black, from origin (center) to the fixed-length vector
				line(ORIGIN, fixedLengthVec, { stroke: "#000", weight: 8 }),
			]),
		]
	)
});

// create & mount canvas component (w/ fixed size)
$canvas(geo, [600, 600]).mount(document.getElementById("app")!);

