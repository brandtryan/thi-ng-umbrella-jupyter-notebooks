// Tangled @ 2025-07-07T22:46:59-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-axidraw/tpl.readme.md

import { AxiDraw } from "@thi.ng/axidraw";
import { asCubic, group, pathFromCubics, star } from "@thi.ng/geom";
import { asAxiDraw } from "@thi.ng/geom-axidraw";
import { map, range } from "@thi.ng/transducers";

(async () => {
    // create group of bezier-interpolated star polygons,
    // with each path using a slightly different configuration
    const geo = group({ translate: [100, 100] }, [
        ...map(
            (t) =>
                pathFromCubics(
                    asCubic(star(90, 6, [t, 1]), {
                        breakPoints: true,
                        scale: 0.66,
                    })
                ),
            range(0.3, 1.01, 0.05)
        ),
    ]);

    // connect to plotter
    const axi = new AxiDraw();
    await axi.connect();
    // convert geometry to drawing commands & send to plotter
    await axi.draw(asAxiDraw(geo, { samples: 40 }));
})();