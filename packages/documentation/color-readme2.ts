// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { Hue, css, namedHueRgb, rgb, srgb } from "@thi.ng/color";

const memory = new Float32Array(16);

// create RGBA color views of buffer: num, start index, strides
// here the colors are tightly packed w/o gaps in between
// (by default entire buffer is mapped, last 4 args are optional)
const colors = rgb.mapBuffer(memory, 4, 0, 1, 4);

// manipulating the colors, will directly manipulate the underlying buffer
namedHueRgb(colors[0], Hue.ORANGE);
namedHueRgb(colors[1], Hue.CHARTREUSE);
namedHueRgb(colors[2], Hue.SPRING_GREEN);
namedHueRgb(colors[3], Hue.AZURE);

memory
// Float32Array(16) [ 1, 0.5, 0, 1, 0.5, 1, 0, 1, 0, 1, 0.5, 1, 0, 0.5, 1, 1 ]

css(colors[0])
// '#ff8000'
css(colors[1])
// '#80ff00'
css(colors[2])
// '#00ff80'
css(colors[3])
// '#0080ff'

// use deref() to obtain a packed copy
colors[0].deref()
// [ 1, 0.5, 0, 1 ]

// here we create a *strided* WebGL attrib buffer for 3 points
// each point defines a: 3D position, UV coords and RGB(A) color
const attribs = new Float32Array([
  // pos     uv   color
  0,0,0,     0,0, 0.25,0.5,0,1,
  100,0,0,   1,0, 0.5,0.5,0.25,1,
  100,100,0, 1,1, 0,1,0.5,1,
]);

// create strided view of colors
// 3 items, start index 5, component stride 1, element stride 9
const colors2 = srgb.mapBuffer(attribs, 3, 5, 1, 9);

css(colors2[0])
// '#408000'
css(colors2[1])
// '#808040'
css(colors2[2])
// '#00ff80'