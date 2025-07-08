// Tangled @ 2025-07-07T23:06:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-canvas/tpl.readme.md

import { repeatedly } from "@thi.ng/transducers";
import * as tc from "@thi.ng/text-canvas";
import * as tf from "@thi.ng/text-format";

// generate 20 random values
const data = repeatedly(() => Math.random(), 20)
// format as bar chart string
const chart = tc.barChartVStr(4, data, 0, 1);

// create text canvas
const canvas = new tc.Canvas(64, 20);

// create table
tc.table(
    canvas,
    0,
    0,
    {
        // column defs
        cols: [{ width: 4 }, { width: 20 }, { width: 8 }],
        // default cell format
        format: tf.FG_BLACK | tf.BG_LIGHT_CYAN,
        // default format for header cells (1st row)
        formatHead: tf.FG_RED | tf.BG_LIGHT_CYAN | tf.BOLD | tf.UNDERLINE,
        // border line style
        style: tc.STYLE_DASHED_ROUNDED,
        // border mode
        border: tc.Border.ALL,
        // internal cell padding [h,v]
        padding: [1, 0],
        // hard word wrap
        hard: true,
    },
    // table contents (row major)
    // each cell either a string or RawCell object
    [
        ["ID", "Main", "Comment"],
        [
            "0001",
            { body: chart, format: tf.FG_BLUE | tf.BG_LIGHT_CYAN },
            "This is a test!"
        ],
        ["0002", "Random data plot", "Word wrapped content"],
        ["0003", { body: "More details...", height: 4 }, ""]
    ]
);

// output as ANSI formatted string
console.log(tc.formatCanvas(canvas, tf.FMT_ANSI16));