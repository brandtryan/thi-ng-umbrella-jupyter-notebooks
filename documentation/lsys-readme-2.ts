// Tangled @ 2025-07-07T22:55:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/lsys/tpl.readme.md

import { expand, interpret, turtle2d, TURTLE_IMPL_2D } from "@thi.ng/lsys";
import { XsAdd } from "@thi.ng/random";

const PI = Math.PI;
const impl = TURTLE_IMPL_2D;

interpret(
    // create turtle instance with customized delta (rot angle)
    turtle2d({
        // initial movement step distance
        step: 20,
        // initial direction
        theta: -PI / 2,
        // rotation offset
        delta: PI / 10,
        // direction jitter (percentage of delta, i.e. here 50%)
        jitter: 0.5,
        // initial survival chance
        aliveProb: 0.999,
        // decay factors for rotation, step, branch survival chance
        decayDelta: 0.98,
        decayStep: 0.85,
        decayAlive: 0.975,
        // use seedable PRNG for deterministic outcome
        rnd: new XsAdd(0x7337c0de)
    }),
    // process syms "a" & "g" as "f"
    { ...impl, a: impl.f, g: impl.f },
    // recursively expand start rule "s" by ping-ponging between f & g
    // (only difference between f & g is swapped branch orientations)
    // see description of all symbols further below
    expand(
        {
            s: "[f]",
            f: "a[kp!>/-g]/a[kp!>/+g]",
            g: "a[kp!>/+f]/a[kp!>/-f]"
        },
        "s",
        13
    )
)