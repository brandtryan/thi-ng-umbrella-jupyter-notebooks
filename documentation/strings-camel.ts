// Tangled @ 2025-07-07T23:20:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/case.ts

import { camel } from "@thi.ng/strings";

console.log(camel("foo-bar23-baz"));
// fooBar23Baz

console.log(camel("FOO_BAR23_BAZ", "_"));
// fooBar23Baz