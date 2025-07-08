// Tangled @ 2025-07-07T22:45:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/tpl.readme.md

import { channel, fiber, wait } from "@thi.ng/fibers";
import { ConsoleLogger } from "@thi.ng/logger";

// create idle main fiber with custom options
const app = fiber(null, {
	id: "main",
	logger: new ConsoleLogger("app"),
	// if true, fiber automatically terminates once all child fibers are done
	terminate: true,
});

// create CSP channels (w/ default config)
const ping = channel<number>();
const pong = channel<number>();

// attach ping/pong child processes
app.forkAll(
	// ping
	function* () {
		while (ping.readable()) {
			// blocking read op
			// (waits until value is available in `ping` channel)
			const x = yield* ping.read();
			// check if channel was closed meanwhile
			if (x === undefined) break;
			console.log("PING", x);
			// possibly blocking (in general) write op to other channel
			yield* pong.write(x);
			// slowdown
			yield* wait(100);
		}
	},
	// pong (very similar)
	function* () {
		while (pong.readable()) {
			const x = yield* pong.read();
			if (x === undefined) break;
			console.log("PONG", x);
			// trigger next iteration
			yield* ping.write(x + 1);
		}
	},
	// channel managment
	function* () {
		// kickoff ping/pong
		yield* ping.write(0);
		yield* wait(1000);
		// wait for both channels to close
		yield* ping.close();
		yield* pong.close();
	}
);
app.run();

// [DEBUG] app: forking fib-0
// [DEBUG] app: forking fib-1
// [DEBUG] app: forking fib-2
// [DEBUG] app: running main...
// [DEBUG] app: init main
// [DEBUG] app: init fib-0
// [DEBUG] app: init fib-1
// [DEBUG] app: init fib-2
// PING 0
// PONG 0
// PING 1
// PONG 1
// ...
// PING 9
// PONG 9
// [DEBUG] app: done fib-2 undefined
// [DEBUG] app: deinit fib-2
// [DEBUG] app: done fib-1 undefined
// [DEBUG] app: deinit fib-1
// [DEBUG] app: done fib-0 undefined
// [DEBUG] app: deinit fib-0
// [DEBUG] app: cancel main
// [DEBUG] app: deinit main