// Tangled @ 2025-07-07T23:19:09-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/format.ts

import { defFormat } from "@thi.ng/date";

const fmt = defFormat(["yyyy", "-", "MM", "-", "dd"]);

console.log(
  fmt(new Date(2015, 3, 23))
);
// "2015-04-23"

console.log(
  defFormat(["\\yyyy"])(new Date(2015, 3, 23))
);
// "yyyy"