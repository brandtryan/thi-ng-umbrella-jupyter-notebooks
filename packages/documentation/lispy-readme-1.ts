// Tangled @ 2025-07-07T22:54:51-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/lispy/tpl.readme.md

import { evalSource, ENV } from "@thi.ng/lispy";

// define custom root environment
const CUSTOM_ENV = {
	...ENV,
	// re-define print fn (actually the same as default)
	print: console.log,
	// pre-define new global variable
	name: "lispy"
};

const SRC = `
(print (+ 1 2 3 4))
;; 10

;; local variables
(let (a 23 b 42) (print (+ a b)))
;; 65

;; define global var/fn
;; here, a curried version of the built-in print fn
(def greetings! (partial print "hello,"))

;; print greeting ('name' symbol provided via custom env)
(greetings! name)
;; hello, lispy!

;; basic loop w/ local var
(let (i 0)
  (while (< i 5)
    (print i)
	(env! (i (inc i)))))
;; 0
;; 1
;; 2
;; 3
;; 4

;; threading/rewriting operators
(->> name (str "hello, ") (print "result:"))
;; result: hello, lispy

;; print contents of default environment
(print (env))
`;

// execute with customized environment
evalSource(SRC, CUSTOM_ENV);

// output:
// 10
// 65
// hello, lispy
// 0
// 1
// 2
// 3
// 4
// result: hello, lispy
// {
//   "+": "<function>",
//   "*": "<function>",
//   "-": "<function>",
//   "/": "<function>",
//   "inc": "<function>",
//   "dec": "<function>",
//   "null?": "<function>",
//   "zero?": "<function>",
//   "neg?": "<function>",
//   "pos?": "<function>",
//   "nan?": "<function>",
//   "=": "<function>",
//   "!=": "<function>",
//   "<": "<function>",
//   "<=": "<function>",
//   ">=": "<function>",
//   ">": "<function>",
//   "T": true,
//   "F": false,
//   "null": null,
//   "and": "<function>",
//   "or": "<function>",
//   "not": "<function>",
//   "<<": "<function>",
//   ">>": "<function>",
//   ">>>": "<function>",
//   "bit-and": "<function>",
//   "bit-or": "<function>",
//   "bit-xor": "<function>",
//   "bit-not": "<function>",
//   "E": 2.718281828459045,
//   "LN10": 2.302585092994046,
//   "LN2": 0.6931471805599453,
//   "LOG10E": 0.4342944819032518,
//   "LOG2E": 1.4426950408889634,
//   "PI": 3.141592653589793,
//   "SQRT1_2": 0.7071067811865476,
//   "SQRT2": 1.4142135623730951,
//   "abs": "<function>",
//   "acos": "<function>",
//   "acosh": "<function>",
//   "asin": "<function>",
//   "asinh": "<function>",
//   "atan": "<function>",
//   "atan2": "<function>",
//   "atanh": "<function>",
//   "cbrt": "<function>",
//   "ceil": "<function>",
//   "clz32": "<function>",
//   "cos": "<function>",
//   "cosh": "<function>",
//   "exp": "<function>",
//   "expm1": "<function>",
//   "floor": "<function>",
//   "fround": "<function>",
//   "hypot": "<function>",
//   "imul": "<function>",
//   "log": "<function>",
//   "log10": "<function>",
//   "log1p": "<function>",
//   "log2": "<function>",
//   "max": "<function>",
//   "min": "<function>",
//   "pow": "<function>",
//   "random": "<function>",
//   "round": "<function>",
//   "sign": "<function>",
//   "sin": "<function>",
//   "sinh": "<function>",
//   "sqrt": "<function>",
//   "tan": "<function>",
//   "tanh": "<function>",
//   "trunc": "<function>",
//   "HALF_PI": 1.5707963267948966,
//   "TAU": 6.283185307179586,
//   "clamp": "<function>",
//   "deg": "<function>",
//   "fit": "<function>",
//   "mix": "<function>",
//   "rad": "<function>",
//   "step": "<function>",
//   "smoothstep": "<function>",
//   "get": "<function>",
//   "set!": "<function>",
//   "push": "<function>",
//   "concat": "<function>",
//   "count": "<function>",
//   "first": "<function>",
//   "next": "<function>",
//   "str": "<function>",
//   "join": "<function>",
//   "lower": "<function>",
//   "upper": "<function>",
//   "capitalize": "<function>",
//   "pad-left": "<function>",
//   "pad-right": "<function>",
//   "substr": "<function>",
//   "trim": "<function>",
//   "regexp": "<function>",
//   "re-test": "<function>",
//   "re-match": "<function>",
//   "replace": "<function>",
//   "identity": "<function>",
//   "always": "<function>",
//   "never": "<function>",
//   "int": "<function>",
//   "float": "<function>",
//   "print": "<function>",
//   "partial": "<function>",
//   "partial2": "<function>",
//   "comp": "<function>",
//   "comp2": "<function>",
//   "fnull?": "<function>",
//   "reduce": "<function>",
//   "map": "<function>",
//   "filter": "<function>",
//   "name": "lispy",
//   "greetings!": "<function>"
// }