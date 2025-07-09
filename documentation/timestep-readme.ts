// Tangled @ 2025-07-07T23:06:46-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/timestep/tpl.readme.md

import { defTimeStep, defNumeric, defVector2 } from "@thi.ng/timestep";
import { maddN2 } from "@thi.ng/vectors";

// initialize with default options (i.e. dt = 1/60 = 60 fps)
// start time is given in milliseconds but will be converted to seconds
// see: https://docs.thi.ng/umbrella/timestep/interfaces/TimestepOpts.html
const sim = defTimeStep({ dt: 1 / 60, startTime: Date.now() });

// define numeric state variable, increase using @ 10 units per second
const a = defNumeric(0, (x, dt) => x + dt * 10);

// define vector state variable, update by applying velocity of [-10, 20] (per second)
// also see thi.ng/vectors for hundreds of other useful vector operations...
// the update function MUST write its result in given vector (1st arg)
const b = defVector2([0, 0], (v, dt) => maddN2(v, [-10, 20], dt, v));

// even though the sim will update at a fixed (theoretical) 60 fps,
// the simulated render frame rate here is only 25 fps...
setInterval(() => {
	// provide current time and an array of state values to update
	// (any ITimeStep impl can be given here, incl. custom types)
	sim.update(Date.now(), [a, b]);
	// show current frame, num updates, time (relative to start) and interpolated state values
	console.log(sim.frame, sim.updates, sim.current, a.value, b.value);
}, 1000 / 25);

// 1   2   0.042 0.253  [ -0.253, 0.506 ]
// 2   4   0.082 0.663  [ -0.663, 1.326 ]
// 3   7   0.124 1.073  [ -1.073, 2.146 ]
// 4   9   0.164 1.483  [ -1.483, 2.966 ]
// 5   12  0.206 1.893  [ -1.893, 3.786 ]
// 6   14  0.246 2.293  [ -2.293, 4.586 ]
// 7   17  0.288 2.713  [ -2.713, 5.426 ]
// 8   19  0.328 3.123  [ -3.123, 6.246 ]
// 9   22  0.371 3.543  [ -3.543, 7.086 ]
// 10  24  0.411 3.953  [ -3.953, 7.906 ]
// 11  27  0.452 4.353  [ -4.353, 8.706 ]
// 12  29  0.493 4.773  [ -4.773, 9.546 ]
// 13  32  0.534 5.173  [ -5.173, 10.346 ]
// 14  34  0.575 5.593  [ -5.593, 11.186 ]
// 15  37  0.617 6.003  [ -6.003, 12.006 ]
// 16  39  0.659 6.423  [ -6.423, 12.846 ]
// 17  42  0.700 6.833  [ -6.833, 13.666 ]
// 18  44  0.740 7.233  [ -7.233, 14.466 ]
// 19  46  0.781 7.643  [ -7.643, 15.286 ]
// 20  49  0.822 8.053  [ -8.053, 16.106 ]
// 21  51  0.861 8.453  [ -8.453, 16.906 ]
// 22  54  0.904 8.873  [ -8.873, 17.746 ]
// 23  56  0.944 9.283  [ -9.283, 18.566 ]
// 24  59  0.986 9.703  [ -9.703, 19.406 ]
// 25  61  1.028 10.113 [ -10.113, 20.226 ]
// ...