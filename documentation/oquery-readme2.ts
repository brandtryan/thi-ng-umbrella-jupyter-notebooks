// Tangled @ 2025-07-07T22:57:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/tpl.readme.md

import { defQuery } from "@thi.ng/oquery";

// using partial result objects option for brevity here
const q = defQuery({ partial: true });

// find all subjects with `type = "person"` relationship
q(DB, null, "type", "person");
// { alice: { type: 'person' }, bob: { type: 'person' } }

// everyone w/ given min age
q(DB, null, "age", (age) => age >= 33)
// { alice: { age: 33 } }

// select only subjects with A/B initials
q(DB, (id) => id >= "a" && id < "c", null, null)
// {
//   alice: { age: 33, knows: [ 'bob', 'charlie', 'dori' ], type: 'person' },
//   bob: { age: 32, knows: [ 'alice' ], type: 'person', spouse: 'alice' }
// }

const union = defQuery();

// who knows bob OR charlie?
union(DB, null, "knows", ["bob", "charlie"]);
// {
//   alice: { age: 33, knows: [ 'bob', 'charlie', 'dori' ], type: 'person' },
//   charlie: { parent: 'alice', knows: [ 'alice', 'bob', 'dori' ] },
//   dori: { knows: [ 'bob' ] }
// }

const isec = defQuery({ intersect: true });

// who knows bob AND charlie?
isec(DB, null, "knows", ["bob", "charlie"]);
// {
//   alice: { age: 33, knows: [ 'bob', 'charlie', 'dori' ], type: 'person' }
// }