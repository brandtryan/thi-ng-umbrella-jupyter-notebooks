// Tangled @ 2025-07-07T22:41:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/csp/tpl.readme.md

import { channel, consumeWith, into, pubsub } from "@thi.ng/csp";

// input channel (optional)
const src = channel<string>({ id: "users" });

// publisher with a topic function
// (topic here is the first character of each received string)
const pub = pubsub<string>(src, (x) => x[0]);

// create topic subscriptions (channel & debug consumer)
// under the hood each topic is a Mult (multiplexed channel)
// subscription channels are automatically named:
// `<src-id>-<topic>-tap<tapid>` (see below)
for (let i of "abc") {
	consumeWith(pub.subscribeTopic(i), (x, ch) => console.log(ch.id, x));
}

// start processing by feeding an iterable of names
await into(src, ["alice", "bert", "bella", "charlie", "arthur"]);

// users-a-tap0 alice
// users-b-tap1 bert
// users-b-tap1 bella
// users-c-tap2 charlie
// users-a-tap0 arthur

// pubsubs & mults are closed recursively once we close the input channel
src.close();