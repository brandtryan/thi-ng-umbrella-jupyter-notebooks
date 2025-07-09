// Tangled @ 2025-07-07T23:18:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/swizzle.ts

import { swizzle } from "@thi.ng/arrays";

console.log(
  swizzle(["a", "c", "b"])({a: 1, b: 2, c: 3})
);
// [ 1, 3, 2 ]