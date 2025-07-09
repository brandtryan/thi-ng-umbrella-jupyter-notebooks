// Tangled @ 2025-07-07T22:57:57-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/pixel-dominant-colors/tpl.readme.md

import { floatBuffer, FLOAT_RGB } from "@thi.ng/pixel";
import { dominantColors } from "@thi.ng/pixel-dominant-colors";
import { read } from "@thi.ng/pixel-io-netpbm";
import { readFileSync } from "node:fs";

// read test PPM image and convert into float RGB format
const img = floatBuffer(read(readFileSync(`test.ppm`)), FLOAT_RGB);

// extract 5 dominant color clusters
const clusters = dominantColors(img, 5);

console.log(clusters);
// [
//   {
//     color: [ 0.4000000059604645, 0.30980393290519714, 0.21176470816135406 ],
//     area: 0.3141084558823529
//   },
//   {
//     color: [ 0.21960784494876862, 0.19607843458652496, 0.1411764770746231 ],
//     area: 0.2780330882352941
//   },
//   {
//     color: [ 0.4156862795352936, 0.4745098054409027, 0.5647059082984924 ],
//     area: 0.16620710784313725
//   },
//   {
//     color: [ 0.6666666865348816, 0.7568627595901489, 0.9254902005195618 ],
//     area: 0.12385110294117647
//   },
//   {
//     color: [ 0.7176470756530762, 0.4745098054409027, 0.12941177189350128 ],
//     area: 0.11780024509803921
//   }
// ]