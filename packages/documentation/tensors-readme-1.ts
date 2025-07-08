// Tangled @ 2025-07-07T23:05:56-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/tensors/tpl.readme.md

import * as t from "@thi.ng/tensors";

// create 4x4x4 3D tensor and fill with values
const a = t.range(64).reshape([4, 4, 4]);

t.print(a);
// --- 0: ---
//         0    1.0000    2.0000    3.0000
//    4.0000    5.0000    6.0000    7.0000
//    8.0000    9.0000   10.0000   11.0000
//   12.0000   13.0000   14.0000   15.0000
// --- 1: ---
//   16.0000   17.0000   18.0000   19.0000
//   20.0000   21.0000   22.0000   23.0000
//   24.0000   25.0000   26.0000   27.0000
//   28.0000   29.0000   30.0000   31.0000
// --- 2: ---
//   32.0000   33.0000   34.0000   35.0000
//   36.0000   37.0000   38.0000   39.0000
//   40.0000   41.0000   42.0000   43.0000
//   44.0000   45.0000   46.0000   47.0000
// --- 3: ---
//   48.0000   49.0000   50.0000   51.0000
//   52.0000   53.0000   54.0000   55.0000
//   56.0000   57.0000   58.0000   59.0000
//   60.0000   61.0000   62.0000   63.0000

// pick a tensor slice/axis (view only, 2d tensor)
t.print(a.pick([3]));
//   48.0000   49.0000   50.0000   51.0000
//   52.0000   53.0000   54.0000   55.0000
//   56.0000   57.0000   58.0000   59.0000
//   60.0000   61.0000   62.0000   63.0000

// any axis set to -1 will be skipped
// here we select slice 3 and column 2 only (1d tensor)
t.print(a.pick([3, -1, 2]));
//   50.0000   54.0000   58.0000   62.0000

// use `.pack()` to apply view to standalone densely packed tensor (own data)
console.log(a.pick([3, 2]).pack().data);
// [ 56, 57, 58, 59 ]

// only select every second value along each axis
t.print(a.step([2, 2, 2]));
// --- 0: ---
//         0    2.0000
//    8.0000   10.0000
// --- 1: ---
//   32.0000   34.0000
//   40.0000   42.0000

// extract an axis range (view only, use `.pack()` to extract)
t.print(a.lo([1, 1, 1]).hi([2, 2, 2]));
// --- 0: ---
//   21.0000   22.0000
//   25.0000   26.0000
// --- 1: ---
//   37.0000   38.0000
//   41.0000   42.0000

// read & write elements (no bounds checking!)
a.set([1, 2, 3], 100);

console.log(a.get([1, 2, 3]));
// 100

// or via direct array access
console.log(a.data[a.index([1, 2, 3])]);
// 100

// tensors are iterables (in current stride order)
console.log([...a]);
// [ 0, 1, 2, 3, 4, ... 60, 61, 62, 63 ]

// create a 2D tensor w/ random values (by default normal distribution, bias=0, std=1)
const b = t.randDistrib(t.tensor("f64", [4, 2]));

t.print(b);
//    0.3854    0.6597
//    0.5775    0.9201
//   -0.7276   -0.1069
//    1.0550    0.4903

// apply sigmoid
// (null as output arg means mutate original [in 99% of all provided ops])
t.print(t.sigmoid(null, b));
//    0.5952    0.6592
//    0.6405    0.7151
//    0.3257    0.4733
//    0.7417    0.6202