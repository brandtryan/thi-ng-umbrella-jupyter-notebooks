// Tangled @ 2025-07-07T22:54:34-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/leaky-bucket/tpl.readme.md

import { LeakyBucketMap } from "@thi.ng/leaky-bucket";

const buckets = new LeakyBucketMap({
	maxBuckets: 2,
	capacity: 3,
	leakInterval: 1000,
});

buckets.update("a") // true
buckets.update("a") // true
buckets.update("a") // true

// max capacity=3 reached
buckets.update("a"); // false

// another bucket
buckets.update("b"); // true

// max buckets=2 reached
buckets.update("c"); // false

// wait > 1000ms, buckets have leaked...

// bucket A has capacity again
buckets.update("a"); // true

// bucket B has been removed (since emtpy)
buckets.has("b"); // false