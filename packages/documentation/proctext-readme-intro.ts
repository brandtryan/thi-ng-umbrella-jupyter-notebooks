// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const { result } = await generate(`
[name]
alice
bob

[action]
walked
cycled
ran
swam

[place]
office
shop
cafe
lake

[time]
this morning
last night
a week ago

# The actual generated text...
<time> <name> <action> to the <place>.
`);

console.log(result);

// last night alice cycled to the cafe.