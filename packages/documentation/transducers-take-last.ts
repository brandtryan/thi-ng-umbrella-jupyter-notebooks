// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/take-last.ts

import { range, takeLast } from "@thi.ng/transducers";

console.log(
  [...takeLast(3, range(10))]
);
// [ 7, 8, 9 ]