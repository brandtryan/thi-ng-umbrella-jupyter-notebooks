// Tangled @ 2025-07-07T23:20:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/trim.ts

import { trim } from "@thi.ng/strings";

console.log(
  trim()("  Hello   ")
);
// "Hello"

console.log(
  trim(" -+")("-+-+- Hello -+-+-")
);
// "Hello"