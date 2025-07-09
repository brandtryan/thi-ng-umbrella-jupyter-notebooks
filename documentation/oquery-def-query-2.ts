// Tangled @ 2025-07-07T23:19:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/src/api.ts

import { defQuery } from "@thi.ng/oquery";

const DB = { a: { knows: ["b","c"] }, b: { knows: ["a","c"] }};

console.log(
  defQuery({ cwise: true })(DB, null, "knows", "b")
);
// { a: { knows: ["b", "c"] } }

console.log(
  defQuery({ cwise: false })(DB, null, "knows", (x) => x.includes("b"))
);
// { a: { knows: ["b", "c"] } }