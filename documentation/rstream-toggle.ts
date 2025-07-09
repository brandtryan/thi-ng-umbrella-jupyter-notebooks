// Tangled @ 2025-07-07T23:20:11-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/toggle.ts

import { toggle, trace } from "@thi.ng/rstream";

const mute = toggle(false);

mute.subscribe(trace("mute"));
// mute false

mute.next();
// mute true

mute.next();
// mute false