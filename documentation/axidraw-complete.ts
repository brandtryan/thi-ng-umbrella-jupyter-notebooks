// Tangled @ 2025-07-07T23:18:56-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/axidraw/src/commands.ts

import { complete, MOVE } from "@thi.ng/axidraw";

console.log(
  [...complete([ MOVE([0, 0]) ])]
);
// [ ["start"], ["M", [0, 0]], ["stop"] ]