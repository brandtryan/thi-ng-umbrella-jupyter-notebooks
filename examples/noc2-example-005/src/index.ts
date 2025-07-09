import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM as RND } from "@thi.ng/random";
import type { Vec } from "@thi.ng/vectors";

const canvasSize: Vec = [640, 240];
const numCounts = 20;
let counts = Array.from({ length: numCounts }, () => 0);

function weight(): number {
	while (true) {
		let r1: number = RND.minmaxUint(0, numCounts);
		let probability: number = r1;
		let r2 = RND.minmaxUint(0, numCounts);
		if (r2 < probability) {
			return r1;
		}

	}
}

const updateCounts = (currentCounts: number[]): number[] => {
	const index: number = weight();
	const newCounts = [...currentCounts];
	if (typeof index === "number" && index >= 0 && index < newCounts.length) {
		newCounts[index]++;
	}
	return newCounts;
};

const viewDistribution = (currentCounts: number[]) => {
	const barWidth = canvasSize[0] / currentCounts.length;
	const bars = currentCounts.map((count, i) => {
		const heightScale = 2;
		const barHeight = count * heightScale;
		const x = i * barWidth;
		const y = canvasSize[1] - barHeight;
		return ["rect",
			{ fill: "#AAA", stroke: "#000", weight: 1 },
			[x, y],
			barWidth - 1,
			barHeight
		];
	});

	const scene = [
		["rect", { fill: "#ccc" }, [0, 0], ...canvasSize],
		...bars
	];
	return scene;
};

const app = document.getElementById("app");

const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

const frame = () => {
	counts = updateCounts(counts);
	const scene = viewDistribution(counts);
	draw(ctx, scene);
	requestAnimationFrame(frame);
};

frame();
