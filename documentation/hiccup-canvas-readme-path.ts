// Tangled @ 2025-07-07T22:52:01-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/hiccup-canvas/tpl.readme.md

import { asPolyline, asSvg, normalizedPath, pathFromSVG, roundedRect } from "@thi.ng/geom";

// path w/ elliptic arc segments (for 2 of the corners)
const a = roundedRect([0, 0], [100, 100], [0, 40]);

console.log(asSvg(a));
// <path d="M0,0H60A40,40,0,0,1,100,40V100H40A40,40,0,0,1,0,60.000V0z"/>

// normalize path to only use cubic curves
const b = normalizedPath(a);

console.log(asSvg(b));
// <path d="M0,0C20,0,40,0,60,0C82.091,0,100,17.909,100,40C100,60,100,80,100,100C80,100,60,100,40,100C17.909,100,0.000,82.091,0,60.000C0,40,0,20,0,0z"/>

// convert/sample path as polyline
// (some paths have multiple boundaries, here we only want the first)
const c = asPolyline(a, { dist: 20 })[0];

console.log(asSvg(c));
// <polyline fill="none" points="0,0 20,0 40,0 60,0 79.168,4.924 93.644,18.410 99.889,37.186 100,40 100,60 100,80 100,100 80,100 60,100 40,100 20.832,95.076 6.356,81.590 0.111,62.814 0,60 0,40 0,20 0,0"/>