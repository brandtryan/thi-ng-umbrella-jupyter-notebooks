// Tangled @ 2025-07-07T23:20:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/stringify.ts

import { stringify } from "@thi.ng/strings";

console.log(
  stringify()("hello")
);
// hello

console.log(
  stringify(true)("hello")
);
// "hello"

console.log(
  stringify()({ a: "hello" })
);
// { "a": "hello" }