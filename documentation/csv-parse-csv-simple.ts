// Tangled @ 2025-07-07T23:19:08-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/csv/src/parse.ts

import { parseCSVSimple, float } from "@thi.ng/csv";

console.log(
  [...parseCSVSimple(
    { cols: [float(), null,float()]},
    ["a,b,c","1,2,3","4,5,6"])
  ]
);
// [ [ 1, 3 ], [ 4, 6 ] ]