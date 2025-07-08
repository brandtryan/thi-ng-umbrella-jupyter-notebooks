// Tangled @ 2025-07-07T22:57:08-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/tpl.readme.md

import {
	INT, WS0,
	alt, collect, defContext, discard,
	oneOf, seq, xform, zeroOrMore
} from "@thi.ng/parse";

// whitespace parser
// discard() removes matched result from AST
const wsc = discard(zeroOrMore(oneOf(" ,")));

// SVG path parser rules
// collect() collects child results in array, then removes children
// INT & WS0 are preset parsers (see readme section above)
const point = collect(seq([INT, wsc, INT]));
const move = collect(seq([oneOf("Mm"), WS0, point, WS0]));
const line = collect(seq([oneOf("Ll"), WS0, point, WS0]));
const curve = collect(
	seq([oneOf("Cc"), WS0, point, wsc, point, wsc, point, WS0])
);
// xform used here to wrap result in array
// (to produce same result format as parsers above)
const close = xform(
	oneOf("Zz"),
	(scope) => ((scope!.result = [scope!.result]), scope)
);

// main path parser
const path = collect(zeroOrMore(alt([move, line, curve, close])));

// prepare parse context & reader
const ctx = defContext("M0,1L2 3c4,5-6,7 8 9z");
// parse input into AST
console.log(path(ctx));
// true

// transformed result of AST root node
console.log(ctx.result);
// [
//   [ 'M', [ 0, 1 ] ],
//   [ 'L', [ 2, 3 ] ],
//   [ 'c', [ 4, 5 ], [ -6, 7 ], [ 8, 9 ] ],
//   [ 'z' ]
// ]