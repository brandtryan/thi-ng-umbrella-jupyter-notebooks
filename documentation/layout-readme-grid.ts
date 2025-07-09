// Tangled @ 2025-07-07T22:54:26-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/layout/tpl.readme.md

import * as g from "@thi.ng/geom";
import { gridLayout, type LayoutBox } from "@thi.ng/layout";
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

// create a single column layout @ position [10,10], 1000px wide
// the last values are row height and cell spacing
const layout = gridLayout(10, 10, 1000, 1, 60, 4);

// get next layout box (1st row, by default the column/row span is [1,1])
addRect(1, layout.next(), "#fec");
// { x: 10, y: 10, w: 1000, h: 60, cw: 1000, ch: 60, gap: 4, span: [ 1, 1 ] }

// 2nd row
addRect(2, layout.next(), "#fec");
// { x: 10, y: 74, w: 1000, h: 60, cw: 1000, ch: 60, gap: 4, span: [ 1, 1 ] }

// create nested 2-column layout (3rd row)
const twoCols = layout.nest(2);

addRect(3, twoCols.next(), "#cfc");
// { x: 10, y: 138, w: 498, h: 60, cw: 498, ch: 60, gap: 4, span: [ 1, 1 ] }

addRect(4, twoCols.next(), "#cfc");
// { x: 512, y: 138, w: 498, h: 60, cw: 498, ch: 60, gap: 4, span: [ 1, 1 ] }

// now nest 3-columns in the 1st column of twoCols
// (i.e. now each column is 1/6th of the main layout's width)
const inner = twoCols.nest(3);

// allocate with col/rowspan, here 1 column x 4 rows
addRect(5, inner.next([1, 4]), "#9ff");
// { x: 10, y: 202, w: 163.33, h: 252, cw: 163.33, ch: 60, gap: 4, span: [ 1, 4 ] }
addRect(6, inner.next([1, 4]), "#9ff");
// { x: 177.33, y: 202, w: 163.33, h: 252, cw: 163.33, ch: 60, gap: 4, span: [ 1, 4 ] }
addRect(7, inner.next([1, 4]), "#9ff");
// { x: 344.66, y: 202, w: 163.33, h: 252, cw: 163.33, ch: 60, gap: 4, span: [ 1, 4 ] }

// back to twoCols (2nd column)
addRect(8, twoCols.next([1, 2]), "#cfc");
// { x: 512, y: 202, w: 498, h: 124, cw: 498, ch: 60, gap: 4, span: [ 1, 2 ] }

// export as SVG
writeFileSync(
	"export/readme-grid.svg",
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