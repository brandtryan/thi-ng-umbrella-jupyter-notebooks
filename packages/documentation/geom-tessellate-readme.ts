// Tangled @ 2025-07-07T22:49:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-tessellate/tpl.readme.md

import * as gt from "@thi.ng/geom-tessellate";

// points of a square polygon
const points = [[0,0], [100,0], [100,100], [0, 100]];

// tessellate square into a triangle fan
console.log(gt.tessellate(points, gt.triFan));
// BasicTessellation {
//   points: [[ 0, 0 ], [ 100, 0 ], [ 100, 100 ], [ 0, 100 ], [ 50, 50 ]],
//   faces: [[ 4, 0, 1 ], [ 4, 1, 2 ], [ 4, 2, 3 ], [ 4, 3, 0 ]],
//   ...
// }

// tessellate square first into a triangle fan, then each triangle into a quad fan
console.log(gt.tessellate(points, [gt.triFan, gt.quadFan]));
// BasicTessellation {
//   points: [
//     [ 0, 0 ], [ 100, 0 ], [ 100, 100 ], [ 0, 100 ],
//     [ 50, 50 ], [ 50, 16.666 ], [ 75, 25 ], [ 25, 25 ],
//     [ 50, 0 ], [ 83.333, 50 ], [ 75, 75 ], [ 75, 25 ],
//     [ 100, 50 ], [ 50, 83.333 ], [ 25, 75 ], [ 75, 75 ],
//     [ 50, 100 ], [ 16.666, 50 ], [ 25, 25 ], [ 25, 75 ], [ 0, 50 ]
//   ],
//   faces: [
//     [ 5, 6, 4, 7 ], [ 5, 7, 0, 8 ], [ 5, 8, 1, 6 ], [ 9, 10, 4, 11 ],
//     [ 9, 11, 1, 12 ], [ 9, 12, 2, 10 ], [ 13, 14, 4, 15 ], [ 13, 15, 2, 16 ],
//     [ 13, 16, 3, 14 ], [ 17, 18, 4, 19 ], [ 17, 19, 3, 20 ], [ 17, 20, 0, 18 ]
//   ],
//   ...
// }

// apply quadfan twice and use a custom tessellation instance
// (here to dedupe generated edge midpoints)
console.log(gt.tessellateWith(new gt.MeshTessellation(2), points, gt.quadFan, 2));
// MeshTessellation {
//   points: [
//     [ 0, 0 ], [ 100, 0 ], [ 100, 100 ], [ 0, 100 ],
//     [ 50, 50 ], [ 0, 50 ], [ 50, 0 ], [ 100, 50 ],
//     [ 50, 100 ], [ 25, 25 ], [ 50, 25 ], [ 25, 50 ],
//     [ 0, 25 ], [ 25, 0 ], [ 75, 25 ], [ 75, 50 ],
//     [ 75, 0 ], [ 100, 25 ], [ 75, 75 ], [ 50, 75 ],
//     [ 100, 75 ], [ 75, 100 ], [ 25, 75 ], [25, 100], [ 0, 75 ]
//   ],
//   faces: [
//     [ 9, 10, 4, 11 ], [ 9, 11, 5, 12 ], [ 9, 12, 0, 13 ], [ 9, 13, 6, 10 ],
//     [ 14, 15, 4, 10 ], [ 14, 10, 6, 16 ], [ 14, 16, 1, 17 ], [ 14, 17, 7, 15 ],
//     [ 18, 19, 4, 15 ], [ 18, 15, 7, 20 ], [ 18, 20, 2, 21 ], [ 18, 21, 8, 19 ],
//     [ 22, 11, 4, 19 ], [ 22, 19, 8, 23 ], [ 22, 23, 3, 24 ], [ 22, 24, 5, 11 ]
//   ],
//   ...
// }