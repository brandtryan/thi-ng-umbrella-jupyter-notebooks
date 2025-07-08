// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { css, cosineCoeffs, cosineGradient } from "@thi.ng/color";

// compute gradient coeffs between red / green
console.log(
	cosineGradient(10, cosineCoeffs([1, 0, 1, 1], [0, 1, 0, 1])).map((x) => css(x))
);
// '#ff00ff'
// '#f708f7'
// '#e11ee1'
// '#bf40bf'
// '#966996'
// '#699669'
// '#40bf40'
// '#1ee11e'
// '#08f708'
// '#00ff00'