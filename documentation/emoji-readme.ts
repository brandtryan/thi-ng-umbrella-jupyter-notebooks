// Tangled @ 2025-07-07T22:45:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/emoji/tpl.readme.md

import { EMOJI, NAMES, replaceNames } from "@thi.ng/emoji";

console.log(EMOJI["minibus"]);
// "🚐"

console.log(NAMES["🚐"]);
// "minibus"

console.log(replaceNames("Amazing :grin::heart_eyes::invalid:!"));
// "Amazing 😁😍:invalid:!"