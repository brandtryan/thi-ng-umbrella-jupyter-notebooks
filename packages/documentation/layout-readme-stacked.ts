// Tangled @ 2025-07-07T22:54:26-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/layout/tpl.readme.md

import * as g from "@thi.ng/geom";
import { stackedLayout, type LayoutBox } from "@thi.ng/layout";
import { writeFileSync } "node:fs";

// collection of generated layout cells
const cells: g.Group[] = [];

const addRect = (id: number, box: LayoutBox, fill: string) => {
	console.log(box);
	const shape = g.rect([box.x, box.y], [box.w, box.h], { fill });
	cells.push(
		g.group({}, [
			shape,
			g.text(g.centroid(shape)!, "#" + id, {
				fill: "black",
				stroke: "none",
			}),
		])
	);
};

// create a 4-column layout @ position [0,0], 1000px wide
// the last values are row height and cell spacing
const layout = stackedLayout(0, 0, 1000, 4, 60, 4);

// get next layout box (1st column)
addRect(1, layout.next([1, 2]), "#fec");
// { x: 0, y: 0, w: 247, h: 124, cw: 247, ch: 60, gap: 4, span: [ 1, 2 ] }

// 2nd column
addRect(2, layout.next(), "#fec");
// { x: 251, y: 0, w: 247, h: 60, cw: 247, ch: 60, gap: 4, span: [ 1, 1 ] }

// 3rd column
addRect(3, layout.next([1, 4]), "#fec");
// { x: 502, y: 0, w: 247, h: 252, cw: 247, ch: 60, gap: 4, span: [ 1, 4 ] }

// 4th column
addRect(4, layout.next([1, 1]), "#fec");
// { x: 753, y: 0, w: 247, h: 60, cw: 247, ch: 60, gap: 4, span: [ 1, 1 ] }

// 2x2 span
// (note that this will create a gap in the 2nd column)
addRect(5, layout.next([2, 2]), "#fec");
// { x: 0, y: 128, w: 498, h: 124, cw: 247, ch: 60, gap: 4, span: [ 2, 2 ] }

const inner = layout.nest(2);

addRect(6, inner.next([1, 5]), "#cfc");
// { x: 753, y: 64, w: 121.5, h: 316, cw: 121.5, ch: 60, gap: 4, span: [ 1, 5 ] }
addRect(7, inner.next([1, 5]), "#cfc");
// { x: 878.5, y: 64, w: 121.5, h: 316, cw: 121.5, ch: 60, gap: 4, span: [ 1, 5 ] }

// fill available space in the other columns
// (depending on situation, this might have to be done multiple times
// to fill all available space, please consult documentation)
addRect(8, layout.next(layout.availableSpan()), "#9ff");
// { x: 0, y: 256, w: 749, h: 124, cw: 247, ch: 60, gap: 4, span: [ 3, 2 ] }

// export as SVG
writeFileSync(
	"export/readme-stacked.svg",
	g.asSvg(
		g.svgDoc(
			{
				__bleed: 10,
				font: "12px Menlo, monospace",
				align: "center",
				baseline: "middle",
			},
			...cells
		)
	)
);