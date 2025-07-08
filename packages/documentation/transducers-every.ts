// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/every.ts

import { every } from "@thi.ng/transducers";

console.log(
  every((x)=> x > 0, [1,2,-1,3])
);
// false