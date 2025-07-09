// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/pluck.ts

import { pluck } from "@thi.ng/transducers";

console.log(
  [...pluck("id", [{id: 1}, {id: 2}, {}])]
);
// [ 1, 2, undefined ]