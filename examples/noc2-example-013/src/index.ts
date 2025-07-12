import { type Vec, add, sub, normalize, limit, ZERO2 } from "@thi.ng/vectors";
import { fromRAF } from "@thi.ng/rstream";
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { circle, line } from "@thi.ng/geom";

// SETUP
const WIDTH = 640;
const HEIGHT = 240;
const { ctx } = canvas2d(WIDTH, HEIGHT, document.getElementById("app"));

interface Mover {
	pos: Vec;
	vel: Vec;
}

interface AppState {
	mover: Mover;
}

let state: AppState = {
	mover: {
		pos: [100, 100],
		vel: [2.5, 2]
	},
};

// UPDATE
const update = (currentState: AppState): AppState => {
	const mover = { ...currentState.mover };
	mover.pos = add(null, mover.pos, mover.vel);

	// Edges
	if (mover.pos[0] > WIDTH || mover.pos[0] < 0) {
		mover.vel[0] = mover.vel[0] * -1;
	}
	if (mover.pos[1] > HEIGHT || mover.pos[1] < 0) {
		mover.vel[1] = mover.vel[1] * -1;
	}

	return {
		...currentState,
		mover,
	};
};

// VIEW
const view = (currentState: AppState) => [
	"g", {},
	["rect", { fill: "#333" }, [0, 0], WIDTH, HEIGHT],
	["g", { fill: "none", stroke: "#fff", "stroke-width": 2 },
		circle(currentState.mover.pos, 24)
	]
];

fromRAF().subscribe({
	next() {
		const newState = update(state);
		const scene = view(newState);
		draw(ctx, scene);
		state = newState;
	}
});
