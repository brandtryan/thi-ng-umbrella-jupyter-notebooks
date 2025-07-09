// Tangled @ 2025-07-07T23:03:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/sexpr/tpl.readme.md

import { parse } from "@thi.ng/sexpr";

// define syntax overrides (keep default whitespace rules)
const syntax = {
    scopes: [["<", ">"], ["{", "}"]],
    string: "'"
};

console.log(JSON.stringify(parse(`<nest { a '2' b 3 }>`, syntax), null, 2));