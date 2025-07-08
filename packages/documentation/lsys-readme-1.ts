// Tangled @ 2025-07-07T22:55:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/lsys/tpl.readme.md

import { expand, interpret, turtle2d, TURTLE_IMPL_2D } from "@thi.ng/lsys";
import { asSvg, svgDoc, polyline } from "@thi.ng/geom";
import { writeFileSync } from "node:fs";

const PI = Math.PI;
const impl = TURTLE_IMPL_2D;

// example L-Systems shown above

const examples = [
    { rules: { s: "[f++f++f]", f: "f+f--f+f" }, delta: PI / 3, iter: 5 },
    { rules: { s: "[f-f-f-f-f-f-f-f]", f: "f---f+f+f+f+f+f+f---f" }, delta: PI / 4, iter: 6 },
    { rules: { s: "[x]", x: "-yf+xfx+fy-", y: "+xf-yfy-fx+" }, delta: PI / 2, iter: 7 },
    { rules: { s: "[a]", a: "a-b--b+a++aa+b-", b: "+a-bb--b-a++a+b" }, delta: PI / 3, iter: 5 }
];

examples.forEach(({ rules, delta, iter }, i) =>
    writeFileSync(
        `lsys-ex${i}.svg`,
        asSvg(
            svgDoc(
                { stroke: "#00f", weight: 0.25, width: 600, height: 600 },
                ...interpret(
                    // create turtle instance with customized delta (rot angle)
                    turtle2d({ delta }),
                    // customize implementation to process syms "a" & "b" as "f"
                    { ...impl, a: impl.f, b: impl.f },
                    // recursively expand start rule "s"
                    expand(rules, "s", iter)
                    //convert result paths to polylines for SVG export
                ).paths.map((pts) => polyline(pts))
            )
        )
    )
);