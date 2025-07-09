// Tangled @ 2025-07-07T23:06:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-canvas/tpl.readme.md

import * as geom from "@thi.ng/geom";
import * as mat from "@thi.ng/matrices";
import * as tc from "@thi.ng/text-canvas";
import * as tf from "@thi.ng/text-format";

const W = 64;
const H = 32;

// create text canvas
const canvas = new tc.Canvas(W, H, tf.BG_BLACK, tc.STYLE_THIN);

// cube corner vertices
const cube = geom.vertices(geom.center(geom.aabb(1))!);

// edge list (vertex indices)
const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6],
    [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]
];

// animated parameters
let rotx = 0;
let roty = 0;

// 3D transformation matrices
const view = mat.lookAt([], [0, 0, 1], [0, 0, 0], [0, 1, 0]);
const proj = mat.perspective([], 90, W / H, 0.1, 10);
const viewp = mat.viewport([], 0, W, H, 0);

setInterval(() => {
    tc.clear(canvas, true);
    // model rotation matrix
    const model = mat.concat(
        [],
        mat.rotationX44([], rotx += 0.01),
        mat.rotationY44([], roty += 0.03)
    );
    // combined model-view-projection matrix
    const mvp = mat.concat([], proj, view, model);
    // draw cube instances
    // project 3D points to 2D viewport (canvas coords)
    const pts = cube.map((p) => mat.project3([], mvp, viewp, p)!);
    // draw cube edges
    for (let e of edges) {
        const a = pts[e[0]];
        const b = pts[e[1]];
        tc.line(canvas, a[0], a[1], b[0], b[1], "+", tf.FG_WHITE | tf.BG_RED);
    }
    // draw vertex labels
    canvas.format = tf.FG_WHITE | tf.BG_BLUE;
    for (let i = 0; i < 8; i++) {
        const p = pts[i];
        tc.textBox(canvas, p[0] - 1, p[1] - 1, 5, 3, ` ${i} `);
    }
    tc.textBox(
        canvas,
        2, 1, 24, -1,
        `@thi.ng/text-canvas wireframe cube\n\nx: ${rotx.toFixed(2)}\ny: ${roty.toFixed(2)}`,
        {
            format: tf.FG_BLACK | tf.BG_LIGHT_CYAN,
            padding: [1, 0]
        }
    );
    // output as ANSI formatted string
    process.stdout.write(
		tf.ANSI_SYNC_START +
		tf.ANSI_CLEAR_SCREEN +
		tf.ANSI_HOME +
		tc.formatCanvas(canvas, tf.FMT_ANSI16) +
		tf.ANSI_SYNC_END
	);
    // ...our output as plain text
    // console.log(tc.formatCanvas(canvas));
}, 16);