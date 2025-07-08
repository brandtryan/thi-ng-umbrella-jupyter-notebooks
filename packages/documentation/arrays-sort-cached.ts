// Tangled @ 2025-07-07T23:18:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/sort-cached.ts

import { sortByCachedKey } from "@thi.ng/arrays";

// sort by length in descending order
console.log(
  sortByCachedKey(["a","bbbb","ccc","dd"], (x) => x.length, (a, b) => b - a)
);
// [ 'bbbb', 'ccc', 'dd', 'a' ]

console.log(
  sortByCachedKey(["a", "b", "c", "d"], [3, 2, 1, 0])
);
// [ 'd', 'c', 'b', 'a' ]