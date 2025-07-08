// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const { result } = await generate(`
[name]
A
B

[A.job]
astronaut

[B.job]
baker

[astronaut.desc]
shooting for the stars
flying to the moon

[baker.desc]
baking bread

<hero=name> is a <hero.job>, <hero.job.desc>.`);

console.log(result);

// B is a baker, baking bread.