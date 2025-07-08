// Tangled @ 2025-07-07T22:53:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/imago/tpl.readme.md

import {
	colorLayer,
	composite,
	crop,
	extend,
	imageLayer,
	nest,
	output,
	processImage,
	rawLayer,
	resize,
	rotate,
} from "@thi.ng/imago";
import { ConsoleLogger } from "@thi.ng/logger";

const res = await processImage(
	"test.jpg",
	// operator pipeline (i.e. a nested array of operator spec objects)
	// the functions used here are merely syntax sugar for generating
	// the spec objects to provide an anchor point for docs
	// (ongoing effort, but since still a new project, mostly still forthcoming...)
	[
		// auto-rotate (EXIF orientation)
		rotate({}),
		// composite w/ semi-transparent color layer (screen)
		composite({
			layers: [
				colorLayer({
					// magenta with 50% opacity
					bg: "#f0f8",
					blend: "screen",
					// layer size is 50x100% of image
					size: [50, 100],
					// aligned left (west)
					gravity: "w",
					// size given in percent
					unit: "%",
				}),
				// diagonal hairline pattern overlay (with tiling) from raw
				// pixel data in ABGR format, i.e. 0xAABBGGRR
				rawLayer({
					// prettier-ignore
					buffer: new Uint32Array([
						0x00000000, 0x00000000, 0x00000000, 0x80ffffff,
						0x00000000, 0x00000000, 0x80ffffff, 0x00000000,
						0x00000000, 0x80ffffff, 0x00000000, 0x00000000,
						0x80ffffff, 0x00000000, 0x00000000, 0x00000000,
					]),
					channels: 4,
					size: [4, 4],
					tile: true,
				}),
			],
		}),
		// nested operations each operate on a clone of the current (already
		// semi-transformed) image, they have no impact on the processing pipeline
		// of their parent(s)
		// multiple child pipelines can be spawned, here only a single one
		nest({
			procs: [
				// this pipeline only creates blurhash (stored in `outputs` of result)
				[resize({ size: 100 }), output({ id: "hash", blurhash: true })],
			],
		}),
		// crop to 3:2 aspect ratio (always based on longest side)
		crop({ size: 100, aspect: 3 / 2, unit: "%" }),
		// back in the main pipleline, add 5% white border (based on smallest side)
		extend({ border: 5, unit: "%", bg: "white", ref: "min" }),
		// resize image to 1920 (largest side)
		resize({ size: 1920 }),
		// add logo watermark centered horizontally and near the bottom
		composite({
			layers: [
				imageLayer({
					path: "logo-128.png",
					unit: "%",
					origin: "s",
					pos: { l: 50, b: 5 },
					ref: "both",
					blend: "screen",
				}),
			],
		}),
		output({ id: "main", path: "{date}-1920-frame.jpg" }),
	],
	{
		logger: new ConsoleLogger("img"),
	}
);

console.log(res.outputs);
// {
//   hash: "UVKmR.^SIVR$_NRiM{jupLRjjEWC%goxofoM",
//   main: "...../20240301-144948-1920-frame.jpg",
// }