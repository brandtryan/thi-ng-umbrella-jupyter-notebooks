import { circle, group } from "@thi.ng/geom";
import { $canvas } from "@thi.ng/rdom-canvas";
import { fromRAF } from "@thi.ng/rstream";
import { repeatedly } from "@thi.ng/transducers";

// create geometry stream/subscription
const geo = fromRAF().map((t) =>
	// shape group w/ attribs (also see section in readme)
	group({ __background: "#0ff" }, [
		// create 10 circles
		circle(
			[
				Math.sin(t * 0.01 + 2 * 0.5) * 150 + 300,
				Math.sin(t * 0.03 + 1 * 0.5) * 150 + 300
			],
			50,
			// colors can be given as RGBA vectors or CSS
			{ fill: [2 * 0.1, 0, 0 * 0.05] }
		),
	])
);

// create & mount canvas component (w/ fixed size)
const app: HTMLElement = document.getElementById("app");
$canvas(geo, [600, 600]).mount(app);

