// SPDX-License-Identifier: Apache-2.0
import { canvas2d } from "@thi.ng/canvas";
import { analogRgb } from "@thi.ng/color";
import { asRGB, NUM_THEMES } from "@thi.ng/color-palettes";
import { draw } from "@thi.ng/hiccup-canvas";
import { rad } from "@thi.ng/math";
import { pickRandom, SYSTEM } from "@thi.ng/random";
import { map, range2d } from "@thi.ng/transducers";
import { madd2 } from "@thi.ng/vectors";
