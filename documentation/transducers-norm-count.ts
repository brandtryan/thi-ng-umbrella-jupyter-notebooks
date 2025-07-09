// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/norm-count.ts

import { filter, normCount, transduce } from "@thi.ng/transducers";

const items = [1,2,3,1,1,4,2,5,1,2];

// compute percentage of values < 3
console.log(
  transduce(filter(x => x<3), normCount(items.length), items)
);
// 0.7