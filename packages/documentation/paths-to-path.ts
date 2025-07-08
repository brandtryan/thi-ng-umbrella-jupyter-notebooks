// Tangled @ 2025-07-07T23:19:55-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/path.ts

import { toPath } from "@thi.ng/paths";

console.log(toPath("a.b.c"));
// ["a", "b", "c"]

console.log(toPath(0));
// [0]

console.log(toPath(["a", "b", "c"]));
// ["a", "b", "c"]