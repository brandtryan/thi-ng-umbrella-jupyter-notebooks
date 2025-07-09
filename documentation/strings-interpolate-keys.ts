// Tangled @ 2025-07-07T23:20:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/interpolate.ts

import { interpolateKeys } from "@thi.ng/strings";

console.log(
  interpolateKeys(
    "let {id}: {type} = {val};",
    { id: "a", type: "number", val: 42 }
  )
);
// "let a: number = 42;"