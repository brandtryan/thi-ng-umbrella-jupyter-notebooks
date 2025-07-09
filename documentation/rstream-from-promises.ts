// Tangled @ 2025-07-07T23:20:11-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/promises.ts

import { fromPromises, trace } from "@thi.ng/rstream";

fromPromises([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).subscribe(trace())
// 1
// 2
// 3
// done