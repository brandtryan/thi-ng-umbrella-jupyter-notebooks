// Tangled @ 2025-07-07T22:57:39-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/pixel-convolve/tpl.readme.md

import { ARGB8888, FLOAT_GRAY, floatBufferFromImage, imageFromURL } from "@thi.ng/pixel";
import { normalMap } from "@thi.ng/pixel-convolve";

// read source image into a single channel floating point buffer
const src = floatBufferFromImage(await imageFromURL("noise.png"), FLOAT_GRAY);

// create normal map (w/ default options)
// this results in a new float pixel buffer with FLOAT_RGB format
const nmap = normalMap(src, { step: 0, scale: 1 });

// pixel lookup (vectors are stored _un_normalized)
nmap.getAt(10, 10);
// Float32Array(3) [ -0.019607841968536377, -0.04313725233078003, 1 ]

// convert to 32bit packed int format
const nmapARGB = nmap.as(ARGB8888);