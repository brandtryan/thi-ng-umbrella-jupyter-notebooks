// Tangled @ 2025-07-07T22:57:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/tpl.readme.md

const DB = {
    alice: {
        age: 33,
        knows: ["bob", "charlie", "dori"],
        type: "person",
    },
    bob: {
        age: 32,
        knows: ["alice"],
        type: "person",
        spouse: "alice",
    },
    charlie: {
        parent: "alice",
        knows: ["alice", "bob", "dori"],
    },
    dori: {
        knows: ["bob"]
    }
};

import { defQuery } from "@thi.ng/oquery";

// create query w/ custom options
// (options explained further below...)
const q = defQuery({ partial: true });

console.log(q(DB, null, "knows", "bob"));
// {
//   alice: { knows: [ 'bob' ] },
//   charlie: { knows: [ 'bob' ] },
//   dori: { knows: [ 'bob' ] }
// }

// Who does Alice know?
q(DB, "alice", "knows", null)
// { alice: { knows: [ 'bob', 'charlie', 'dori' ] } }

// Anyone with initial "A" knows Charlie?
q(DB, (s) => s[0] === "a", "knows", "charlie")
// { alice: { knows: [ 'charlie' ] } }

type Person = { id: string; knows: string[] };

const DBALT: Person[] = [
  { id: "alice", knows: ["bob", "charlie"] },
  { id: "bob", knows: ["alice"] },
  { id: "charlie", knows: ["alice","bob","dori"] },
];

defQuery<Person[]>()(DBALT, "knows", "alice")
// [
//   { id: 'bob', knows: [ 'alice' ] },
//   { id: 'charlie', knows: [ 'alice', 'bob', 'dori' ] }
// ]