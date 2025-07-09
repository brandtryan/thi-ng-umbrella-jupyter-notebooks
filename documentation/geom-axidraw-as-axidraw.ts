// Tangled @ 2025-07-07T23:19:23-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-axidraw/src/as-axidraw.ts

import { circle } from "@thi.ng/geom";
import { asAxiDraw } from "@thi.ng/geom-axidraw";

console.log(
  [...asAxiDraw(circle(100), { samples: 6 })]
);
// [
//   [ "M", [ 100, 0 ], 1 ],
//   [ "d", undefined, undefined ],
//   [ "M", [ 50.00, 86.60 ], 1 ],
//   [ "M", [ -49.99, 86.60 ], 1 ],
//   [ "M", [ -100, 0 ], 1 ],
//   [ "M", [ -50.00, -86.60 ], 1 ],
//   [ "M", [ 49.99, -86.60 ], 1 ],
//   [ "M", [ 100, 0 ], 1 ],
//   [ "u", undefined, undefined ]
// ]