// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/distinct.ts

import { distinct } from "@thi.ng/transducers";

console.log(
  [...distinct({ key: (x) => x.id }, [{id: 1, x: 2}, {id: 1, x: 3}])]
);
// [ { id: 1, x: 2 } ]