// Tangled @ 2025-07-07T22:46:59-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-axidraw/tpl.readme.md

import { AxiDraw, COMMENT, dip, MOVE } from "@thi.ng/axidraw";
import { circle, points, vertices } from "@thi.ng/geom";
import { asAxiDraw } from "@thi.ng/geom-axidraw";

(async () => {
    // create point cloud container
    const pts = points(
        // using 24 points on a circle w/ origin @ 150,150, radius=100
        vertices(circle([150, 150], 100), 24),
        { __axi: {
            // use command interleaving
            interleave: {
                // every 5 points/dots
                num: 5,
                // insert these draw commands:
                // (this function is being re-called every `num` points and
                // can produce different commands to insert each time...)
                commands: (n) => [
                    // no-op command, but will be logged during plotting
                    COMMENT(`--- refill brush (@ ${n} points) ---`),
                    // move to XY pos (i.e. position of paint reservoir)
                    MOVE([10,50]),
                    // dip the brush 3x times down & up (each time wait 200ms whilst down)
                    // (dip() creates a cmd sequence, so need to use the spread operator `...` here)
                    ...dip(3, { downDelay: 200 }),
                    // (...and then drawing continues w/ next 5 points)
                ]
            }
        }
    });

    // actually connect & send to plotter
    const axi = new AxiDraw();
    await axi.connect();
    await axi.draw(asAxiDraw(pts));
})();