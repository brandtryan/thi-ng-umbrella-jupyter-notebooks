// Tangled @ 2025-07-07T23:19:55-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/delete-in.ts

import { deleteIn } from "@thi.ng/paths";

// type checked
console.log(
  deleteIn({ a: { b: { c: 23 } } }, ["a","b","c"])
);

// error (invalid path)
console.log(
  deleteIn({ a: { b: { c: 23 } } }, ["a","b","d"])
);