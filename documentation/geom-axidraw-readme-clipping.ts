// Tangled @ 2025-07-07T22:46:59-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-axidraw/tpl.readme.md

import { AxiDraw } from "@thi.ng/axidraw";
import {
    asSvg,
    circle,
    group,
    starWithCentroid,
    svgDoc,
    vertices,
} from "@thi.ng/geom";
import { asAxiDraw, asGeometry } from "@thi.ng/geom-axidraw";
import { map, range } from "@thi.ng/transducers";
import { writeFileSync } "node:fs";

(async () => {
    const origin = [100, 100];
    const radius = 50;
    const boundary = starWithCentroid(origin, radius, 5, [1, 0.45], { __axi: { speed: 0.25 } });
    // group of concentric circles using boundary as clip polygon
    const geo = group({}, [
        boundary,
        group({ __samples: 60, __axi: { clip: vertices(boundary) } }, [
            ...map((r) => circle(origin, r), range(2, radius, 2)),
        ]),
    ]);

    // convert into AxiDraw command sequence
    const commands = [...asAxiDraw(geo)];

    // now visualize command sequence (convert back to geometry, incl. pen movements)
    const { paths, rapids, ups, downs } = asGeometry(commands);
    // write visualization as SVG
    writeFileSync(
        "export/clipping-commands.svg",
        asSvg(svgDoc({ width: 600, weight: 0.2 }, paths, rapids, ups, downs))
    );

    // actually connect & send to plotter
    const axi = new AxiDraw();
    await axi.connect();
    await axi.draw(commands);
})();