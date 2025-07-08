// Tangled @ 2025-07-07T22:56:42-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/msgpack/tpl.readme.md

import { deserialize, serialize } from "@thi.ng/msgpack";
import { equiv } from "@thi.ng/equiv";

const obj = {
	small_i8: -0x0f,
	i8: -0x80,
	small_u8: 0xff,
	i16: -0x8000,
	u16: 0xfedc,
	i32: -0x8000_0000,
	u32: 0xffff_ffff,
	utf8_array: ["👋 Hello", "msgpack!", "🔥🤌"],
	now: new Date()
};

// encode to byte array
const bytes = serialize(obj);
console.log(bytes);
// Uint8Array(114) [ 137, 168, 115, 109, 97, 108, 108, ... ]

// comparison with JSON
const json = JSON.stringify(obj);
const ratio = bytes.length / json.length;
console.log(`msgpack: ${bytes.length}, json: ${json.length}, ratio: ${ratio.toFixed(2)}`);
// msgpack: 114, json: 178, ratio: 0.64

// roundtrip
const obj2 = deserialize(bytes);

// check equality
console.log(equiv(obj, obj2));
// true