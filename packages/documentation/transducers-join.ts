// Tangled @ 2025-07-07T23:20:27-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/join.ts

import { join } from "@thi.ng/transducers";

console.log([...join("/", [[1, 2, 3], [4, 5]])]);
// [ '1/2/3', '4/5' ]