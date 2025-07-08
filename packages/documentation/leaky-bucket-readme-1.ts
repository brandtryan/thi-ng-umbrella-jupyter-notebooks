// Tangled @ 2025-07-07T22:54:34-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/leaky-bucket/tpl.readme.md

import { LeakyBucket } from "@thi.ng/leaky-bucket";

// create bucket w/ 1Hz mean target rate, burstable to 3Hz
const bucket = new LeakyBucket({ capacity: 3, leakInterval: 1000 });

let event = 0;
let t0 = Date.now();

// trigger events at 5Hz
setInterval(() => {
	event++;
	// update bucket and only log successful events (discard the rest)
	if (bucket.update()) {
		console.log("time", Date.now() - t0, "/ event", event);
	}
}, 200);

// time 200 / event 1   <-- initial burst
// time 401 / event 2   <-- initial burst
// time 601 / event 3   <-- initial burst
// time 1003 / event 5  <-- average rate enforced
// time 2007 / event 10
// time 3012 / event 15
// time 4017 / event 20
// ...