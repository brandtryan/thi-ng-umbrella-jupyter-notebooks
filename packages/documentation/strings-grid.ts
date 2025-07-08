// Tangled @ 2025-07-07T23:20:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/ruler.ts

import { grid } from "@thi.ng/strings";

console.log(grid(3, 3, 4, 2));
// +---+---+---+
// |   |   |   |
// +---+---+---+
// |   |   |   |
// +---+---+---+
// |   |   |   |
// +---+---+---+

console.log(grid(3, 3, 4, 2, "*_/"));
// *___*___*___*
// /   /   /   /
// *___*___*___*
// /   /   /   /
// *___*___*___*
// /   /   /   /
// *___*___*___*

console.log(grid(3, 2, 3, 3, "+  #"));
// +  +  +
//  ## ##
//  ## ##
// +  +  +
//  ## ##
//  ## ##
// +  +  +