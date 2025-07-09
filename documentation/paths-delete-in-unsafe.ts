// Tangled @ 2025-07-07T23:19:55-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/delete-in.ts

import { deleteInUnsafe } from "@thi.ng/paths";

// unchecked
console.log(
  deleteInUnsafe({ a: { b: { c: 23 } } }, "a.b.c")
);
// { a: { b: { } } }