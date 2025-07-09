// Tangled @ 2025-07-07T22:40:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/tpl.readme.md

import { css, labD50, rgb, srgb } from "@thi.ng/color";

srgb("#ff0")
// $Color { offset: 0, stride: 1, buf: [ 1, 1, 0, 1 ] }

srgb(0x44ffff00)
// $Color { offset: 0, stride: 1, buf: [ 1, 1, 0, 0.26666666666666666 ] }

srgb(1,1,0)
// $Color { offset: 0, stride: 1, buf: [ 1, 1, 0, 1 ] }

srgb([0.1, 0.2, 0.3, 0.4])
// $Color { offset: 0, stride: 1, buf: [ 0.1, 0.2, 0.3, 0.4 ] }

// convert RGB CSS into Lab (D50)
labD50("#ff0")
// $Color {
//   offset: 0,
//   stride: 1,
//   buf: [ 0.9760712516622824, -0.1575287517691254, 0.9338847788323792, 1 ]
// }

// convert RGB CSS into Lab CSS (CSS Level 4 only)
css(labD50("#ff0"))
// 'lab(97.607% -15.753 93.388)'

// round trip:
// CSS -> sRGB -> lin RGB -> Lab -> lin RGB -> sRGB -> CSS
css(rgb(labD50("#ff0")))
// '#ffff00'