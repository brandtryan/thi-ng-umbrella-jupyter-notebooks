// Tangled @ 2025-07-07T23:01:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream-dot/tpl.readme.md

import { fromIterable, merge, trace } from "@thi.ng/rstream";
import { serialize } from "@thi.ng/rstream-dot";

// create dummy dataflow
const a = fromIterable([1, 2, 3]);
const b = fromIterable([10, 20, 30]);
a.map((x) => x * 10, { id: "x10" });
merge({ src: [a, b] }).subscribe(trace());

// now capture the topology by walking the graph from its root(s)
// and convert the result to GraphViz DOT format
console.log(serialize([a, b]));