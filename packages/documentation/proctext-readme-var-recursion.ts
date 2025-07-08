// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const { result } = await generate(`
[activity]
walking and <activity_alt>
hiking and <activity_alt>
# the next option is cyclic...
cycling, <activity>

[activity_alt]
sleeping
coding

I enjoy <activity>.
`);

console.log(result);

// I enjoy cycling, walking and coding.