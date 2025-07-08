// Tangled @ 2025-07-07T23:19:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compare/src/ops.ts

import { numericOp } from "@thi.ng/compare";

const lessThan42 = numericOp("<", 42);

lessThan42(41)
// true

lessThan42("41")
// false

lessThan42([41])
// false