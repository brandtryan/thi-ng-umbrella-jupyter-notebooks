// Tangled @ 2025-07-07T22:46:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom/tpl.readme.md

import { circle, asSvg } from "@thi.ng/geom";
import { convertTree } from "@thi.ng/hiccup-svg";

// a circle with RGBA color attrib
const a = circle([100, 200], 300, { fill: [1, 0.5, 0, 1] });

// invocation of the IToHiccup interface (all shapes support it)
console.log(a.toHiccup());
// [ "circle", { fill: [ 1, 0, 0, 1 ] }, [ 100, 200 ], 300 ]

// convert shape into to a SVG compatible hiccup format
// (i.e. stringify attributes, convert colors etc.)
console.log(convertTree(a));
// [ "circle", { fill: "#ff8000", cx: "100", cy: "200", r: "300" } ]

// asSvg() automatically uses convertTree() when serializing shape(s) to SVG
console.log(asSvg(a));
// <circle fill="#ff8000" cx="100" cy="200" r="300"/>