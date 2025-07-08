// Tangled @ 2025-07-07T23:20:09-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/resolve-map/src/index.ts

import { resolve } from "@thi.ng/resolve-map";

// `c` references sibling `d`
// `d` references parent `a`
console.log(
  resolve({ a: 1, b: { c: "@d", d: "@/a" } })
);
// { a: 1, b: { c: 1, d: 1 } }