// Tangled @ 2025-07-07T22:46:25-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fuzzy-viz/tpl.readme.md

import { centroidStrategy, gaussian } from "@thi.ng/fuzzy";
import { fuzzySetToAscii, instrumentStrategy } from "@thi.ng/fuzzy-viz";

const strategy = instrumentStrategy(
	centroidStrategy({ samples: 1000 }),
	fuzzySetToAscii({ width: 40, height: 8 })
);

// apply strategy as normal (well, usually done via defuzz())
strategy(gaussian(5, 2), [0, 10]);
// 4.995

strategy.deref().forEach((viz) => console.log(viz));
// .................▄▆█|█▆▄.................
// ...............▅████|████▅...............
// .............▄██████|██████▄.............
// ...........▂▇███████|███████▇▂...........
// ..........▅█████████|█████████▅..........
// .......▁▅███████████|███████████▅▁.......
// .....▃▆█████████████|█████████████▆▃.....
// ▃▄▅▇████████████████|████████████████▇▅▄▃
//                     ^ 5.00

// cleanup (optional)
strategy.clear();