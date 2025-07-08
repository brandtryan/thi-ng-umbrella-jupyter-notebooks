// Tangled @ 2025-07-07T22:41:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/csp/tpl.readme.md

import { channel } from "@thi.ng/csp";

// create CSP channel for bi-directional communication
const chan = channel<number>();

// create first async process (ping)
(async () => {
	while (true) {
		// this op will block until a value becomes available in the channel
		const x = await chan.read();
		// if the channel was closed meanwhile, read() will deliver `undefined`
		if (x === undefined || x > 5) {
			console.log("stopping...");
			// calling close() is idempotent
			// any in-flight writes will still be readable
			chan.close();
			break;
		}
		console.log("ping", x);
		// this op will also block until the other side is reading the value
		await chan.write(x + 1);
	}
	console.log("ping done");
})();

// create second async process (pong, almost identical to ping)
(async () => {
	while (true) {
		// wait until value can be read (or channel closed)
		const x = await chan.read();
		// exit loop if channel closed
		if (x === undefined) break;
		console.log("pong", x);
		// write next value & wait until other side read it
		await chan.write(x + 1);
	}
	console.log("pong done");
})();

// kickoff
chan.write(0);

// ping 0
// pong 1
// ping 2
// pong 3
// ping 4
// pong 5
// stopping...
// ping done
// pong done