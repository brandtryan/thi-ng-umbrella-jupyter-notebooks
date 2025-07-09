// Tangled @ 2025-07-07T22:57:08-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/tpl.readme.md

import { defContext, defGrammar, print } from "@thi.ng/parse";

// define language via grammar DSL
// the upper-cased rule names are built-ins
const lang = defGrammar(`
list: '('! <expr> ')'! ;
sym: ( <ALPHA_NUM> | [?!$+\\u002d*/.~#^=<>] )+ => join ;
expr: ( <FLOAT> | <STRING> | <sym> | <list> | <WS1> )* ;
`);

// define input & parser context
const ctx = defContext(`
(def hello (x) (str "hello, " x))

(print (hello 42))
`);

// parse & print AST
print(lang!.rules.expr)(ctx);
// expr: null
//   list: null
//     expr: null
//       sym: "def"
//       sym: "hello"
//       list: null
//         expr: null
//           sym: "x"
//       list: null
//         expr: null
//           sym: "str"
//           string: "hello, "
//           sym: "x"
//   list: null
//     expr: null
//       sym: "print"
//       list: null
//         expr: null
//           sym: "hello"
//           real: 42

// parse result
// true

// the two top-level s-expressions...
console.log(ctx.children);
// [
//   { id: 'list', state: null, children: [ [Object] ], result: null },
//   { id: 'list', state: null, children: [ [Object] ], result: null }
// ]