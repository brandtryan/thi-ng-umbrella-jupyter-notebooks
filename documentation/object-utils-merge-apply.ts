// Tangled @ 2025-07-07T23:19:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/merge-apply.ts

import { mergeApplyObj } from "@thi.ng/object-utils";

console.log(
  mergeApplyObj(
    { a: "hello", b: 23, c: 12 },
    { a: (x) => x + " world", b: 42 }
  )
);
// { a: 'hello world', b: 42, c: 12 }