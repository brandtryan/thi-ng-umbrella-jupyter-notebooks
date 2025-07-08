// Tangled @ 2025-07-07T23:19:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/src/api.ts

import { defQuery } from "@thi.ng/oquery";

const DB = { a: { id: 1, name: "alice" }, b: { name: "bob" } };

console.log(
  defQuery({ partial: false })(DB, null, "id", 1)
);
// { a: { id: 1, name: "alice" } }

console.log(
  defQuery({ partial: true })(DB, null, "id", 1)
);
// { a: { id: 1 } }