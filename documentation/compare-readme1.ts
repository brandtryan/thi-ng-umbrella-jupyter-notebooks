// Tangled @ 2025-07-07T22:41:11-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compare/tpl.readme.md

import * as cmp from "@thi.ng/compare";

const src = [
    { id: "charlie", age: 66 },
    { id: "bart", age: 42 },
    { id: "alice", age: 23 },
    { id: "dora", age: 11 },
];

// cluster sort by id -> age (default comparators)
console.log(
	[...src].sort(cmp.compareByKeys2("id", "age"))
);
// [
//   { id: 'alice', age: 23 },
//   { id: 'bart', age: 42 },
//   { id: 'charlie', age: 66 },
//   { id: 'dora', age: 11 }
// ]


// cluster sort by age -> id (default comparators)
console.log(
	[...src].sort(cmp.compareByKeys2("age", "id"))
);
// [
//   { id: 'dora', age: 11 },
//   { id: 'alice', age: 23 },
//   { id: 'bart', age: 42 },
//   { id: 'charlie', age: 66 }
// ]

// cluster sort by age -> id
// (custom comparator for `age` key)
console.log(
	[...src].sort(cmp.compareByKeys2("age", "id", cmp.compareNumDesc))
);
// [
//   { id: 'charlie', age: 66 },
//   { id: 'bart', age: 42 },
//   { id: 'alice', age: 23 },
//   { id: 'dora', age: 11 }
// ]

// using `reverse()` comparator for `id`
console.log(
	[...src].sort(cmp.compareByKeys2("age", "id", cmp.compare, cmp.reverse(cmp.compare)))
);
// [
//   { id: 'dora', age: 11 },
//   { id: 'alice', age: 23 },
//   { id: 'bart', age: 42 },
//   { id: 'charlie', age: 66 }
// ]