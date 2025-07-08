// Tangled @ 2025-07-07T22:45:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/tpl.readme.md

import { sequence, wait, type MaybeFiber } from "@thi.ng/fibers";
import {
	cycle,
	interpose,
	map,
	partition,
	repeatedly,
} from "@thi.ng/transducers";

const defWorkItem = (id: number) =>
	function* () {
		console.log("part", id);
	};

const defWorkGroup = (items: MaybeFiber[]) =>
	function* () {
		// interject a short pause between given work items
		// then execute in order and wait until all done
		yield* sequence(interpose(() => wait(100), items));
		console.log("---");
		yield* wait(1000);
	};

// create fiber which executes given sub-processes in order
sequence(
	// generate 25 work items
	// partition into groups of 5
	// transform into iterable of work groups
	// repeat indefinitely
	cycle(map(defWorkGroup, partition(5, repeatedly(defWorkItem, 25))))
).run();

// part 0
// part 1
// part 2
// part 3
// part 4
// ---
// part 5
// part 6
// part 7