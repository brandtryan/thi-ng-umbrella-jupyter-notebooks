// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { lch, multiColorGradient, swatchesH } from "@thi.ng/color";
import { serialize } from "@thi.ng/hiccup";
import { svg } from "@thi.ng/hiccup-svg";
import { writeFileSync } "node:fs";

const L = 0.8;
const C = 0.8;

const gradient = multiColorGradient({
    num: 100,
    // gradient stops
    stops: [
        [0, lch(L, C, 0)],
        [1 / 3, lch(L, C, 1 / 3)],
        [2 / 3, lch(L, C, 2 / 3)],
        [1, lch(L, 0, 1)],
    ],
    // optionally with easing function
    // easing: (t) => t * t,
});

writeFileSync(
    "lch-gradient.svg",
    serialize(
        svg(
            { width: 500, height: 50, __convert: true },
            swatchesH(gradient, 5, 50)
        )
    )
);