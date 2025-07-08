// Tangled @ 2025-07-07T22:54:43-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/leb128/tpl.readme.md

import * as leb from "@thi.ng/leb128";

// if WASM is unavailable, the encode/decode functions will throw an error
let encoded = leb.encodeULEB128(Number.MAX_SAFE_INTEGER);

console.log(encoded);
// Uint8Array [ 255, 255, 255, 255, 255, 255, 255, 15 ]

// decoding returns tuple of [value (bigint), bytes consumed]
console.log(leb.decodeULEB128(encoded));
// [ 9007199254740991n, 8 ]

// encode signed int
encoded = leb.encodeSLEB128(Number.MIN_SAFE_INTEGER);

console.log(encoded)
// Uint8Array [ 129, 128, 128, 128, 128, 128, 128, 112 ]

console.log(leb.decodeSLEB128(encoded));
// [ -9007199254740991n, 8 ]

// when writing into an existing buffer, there needs to be enough bytes to write the value
const target = new Uint8Array(10);
const count = leb.encodeULEB128Into(target, Number.MAX_SAFE_INTEGER);

console.log(target);
// Uint8Array [ 255, 255, 255, 255, 255, 255, 255, 15, 0, 0 ]

console.log(count);
// 8