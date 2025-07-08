// Tangled @ 2025-07-07T22:57:08-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/tpl.readme.md

import type { Fn, FnN2 } from "@thi.ng/api";
import {
	INT, WS0,
	alt, altS, defContext, xform, zeroOrMore
} from "@thi.ng/parse";

type StackFn = Fn<number[], void>;
type Op = { arity: number; fn: StackFn };

// wrapper for pure 2-arity stack functions/ops
const defOp2 =
	(fn: FnN2): StackFn =>
	(stack) => {
		const b = stack.pop()!;
		const a = stack.pop()!;
		stack.push(fn(a, b));
	};

// operator/word implementations
const ops: Record<string, Op> = {
	"+": { arity: 2, fn: defOp2((a, b) => a + b) },
	"-": { arity: 2, fn: defOp2((a, b) => a - b) },
	"*": { arity: 2, fn: defOp2((a, b) => a * b) },
	"/": { arity: 2, fn: defOp2((a, b) => a / b) },
	// prints top stack item to console
	print: { arity: 1, fn: (stack) => console.log(stack.pop()) },
	// duplicates top stack item
	dup: { arity: 1, fn: (stack) => stack.push(stack[stack.length - 1]) },
	// swaps two topmost stack items
	swap: {
		arity: 2,
		fn: (stack) => {
			const a = stack.pop()!;
			const b = stack.pop()!;
			stack.push(a, b);
		},
	},
};

// simple RPN parser & interpreter runtime
const interpret = (src: string, debug = true) => {
	// data stack for execution
	const stack: number[] = [];

	// signed integer parser (using INT preset) with transform fn.
	// the user fn here is only used for pushing values on data stack
	// also, if a transform returns null, the parse scope will
	// be removed from the result AST
	const value = xform(INT, (scope) => {
		stack.push(scope!.result);
		return null;
	});

	// parser (with transform) for any of the registered operators
	// the transform here applies the op in RPN fashion to the data stack
	// stack underflow handling omitted for brevity
	const op = xform(altS(Object.keys(ops)), (scope) => {
		const id = scope!.result;
		const { arity, fn } = ops[id];
		if (debug) console.log(id, stack);
		if (stack.length < arity) {
			throw new Error(
				"stack underflow " +
				`("${id}" needs ${arity} args, got ${JSON.stringify(stack)})`
			);
		}
		fn(stack);
		return null;
	});

	// parser for complete RPN program, combines above two parsers
	// and the whitespace preset as alternatives
	const program = zeroOrMore(alt([value, op, WS0]));
	// apply parser to source code
	program(defContext(src));
	// return result stack
	return stack;
};

// checking operator arity
try { interpret("1 +"); } catch (e) { console.warn(e); }
// Error: stack underflow ("+" needs 2 args, got [1])

// execute: (3 * 5 + 10) * -2 / 10 (in infix notation)
interpret("10 5 3 * + -2 * 10 / print");
// * [ 10, 5, 3 ]
// + [ 10, 15 ]
// * [ 25, -2 ]
// / [ -50, 10 ]
// print [ -5 ]
// -5

// execute: ((5 + 3)**2) / 2) - (5 + 3)**2
interpret("5 3 + dup * dup 2 / swap - print");
// + [ 5, 3 ]
// dup [ 8 ]
// * [ 8, 8 ]
// dup [ 64 ]
// / [ 64, 64, 2 ]
// swap [ 64, 32 ]
// - [ 32, 64 ]
// print [ -32 ]
// -32