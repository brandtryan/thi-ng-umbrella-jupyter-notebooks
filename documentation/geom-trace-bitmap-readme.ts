// Tangled @ 2025-07-07T22:49:44-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-trace-bitmap/tpl.readme.md

import { asSvg, group, line, points, svgDoc } from "@thi.ng/geom";
import { traceBitmap } from "@thi.ng/geom-trace-bitmap";
import { read } from "@thi.ng/pixel-io-netpbm";
import { readFileSync, writeFileSync } "node:fs";

// vectorize bitmap, the returned arrays contain:
// - pairs of vectors (line segments)
// - vectors (points)
const { lines, points: dots } =  traceBitmap({
    // source image (WILL be mutated!)
    img: read(readFileSync("foo.pgm")),
    // pixel selection predicate (here to select all bright pixels)
    select: (x) => x > 128,
    // process horizontals, verticals, diagonals & points (default)
	// see: https://docs.thi.ng/umbrella/geom-trace-bitmap/types/TraceDir.html
    dir: ["h", "v", "d1", "d2", "p"]
});

// write extracted geometry as SVG file
writeFileSync(
    "export/trace.svg",
    asSvg(
        svgDoc(
            {},
            group({}, lines.map(([a,b]) => line(a, b))),
            points(dots, { fill: "#000", stroke: "none" })
        )
    )
);