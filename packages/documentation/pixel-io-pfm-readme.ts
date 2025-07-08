// Tangled @ 2025-07-07T22:58:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/pixel-io-pfm/tpl.readme.md

import { intBuffer, RGB888 } from "@thi.ng/pixel";
import { asPFM }  from "@thi.ng/pixel-io-pfm";
import { writeFileSync } from "node:fs";

// create 2x2 image
const img = intBuffer(2, 2, RGB888);
// set all 4 pixels (in order: red, green, blue, yellow)
img.data.set([0xff0000, 0x00ff00, 0x0000ff, 0xffff00]);

// serialize image to PFM byte array and write to file
// (format conversion to FLOAT_RGB is done automatically & non-destructively)
writeFileSync("export/rgby.pfm", asPFM(img));