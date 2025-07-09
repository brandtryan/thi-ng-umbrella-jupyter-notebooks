// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const { result } = await generate(`
[name]
Alice
Bob
Charlie
Dora

Let's pick some random names: <hero1=name> and <hero2=name>.

But now we can use them as constants:
<hero1>, <hero1>, <hero1> & <hero2>, <hero2>, <hero2>
`);

console.log(result);

// Let's pick some random names: Dora and Bob.
//
// But now we can use them as constants:
// Dora, Dora, Dora & Bob, Bob, Bob