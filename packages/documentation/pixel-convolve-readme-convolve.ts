// Tangled @ 2025-07-07T22:57:39-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/pixel-convolve/tpl.readme.md

import { floatBufferFromImage, FLOAT_RGB, imageFromURL } from "@thi.ng/pixel";
import { convolveImage, SOBEL_X } from "@thi.ng/pixel-convolve";

// convolutions are only available for float buffers (for now)
const src = floatBufferFromImage(await imageFromURL("test.jpg"), FLOAT_RGB);

// apply horizontal Sobel kernel preset to all channels
// downscale image by factor 2 (must be integer)
// scale kernel result values by factor 4
const dest = convolveImage(src, { kernel: SOBEL_X, stride: 2, scale: 4 });