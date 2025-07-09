// Tangled @ 2025-07-07T23:19:54-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/src/match.ts

import { query, matchStrings } from "@thi.ng/oquery";

const DB = [
  { id: 1, tags: ["a", "b"] },
  { id: 2, tags: ["c", "b"] },
  { id: 3, tags: ["c", "a"] },
];

// tag intersection
console.log(
  query(DB, [matchStrings("tags", ["a", "b"])])
);
// [ { id: 1, tags: ["a", "b"] } ]

// tag union
console.log(
  query(DB, [matchStrings("tags", ["a", "b"])])
);
// here returns full DB...
// since each item either has `a` and/or `b` tags

// tag exclusion (require `a`, disallow `b`)
console.log(
  query(DB, [matchStrings("tags", ["a", "!b"])])
);
// [ { id: 3, tags: ["c", "a"] } ]