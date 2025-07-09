// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const { result } = await generate(`
[name]
Asterix
Obelix

# hidden assignment
<!hero=name>
My name is <hero>.`);

console.log(result);

// My name is Asterix.