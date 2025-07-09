// Tangled @ 2025-07-07T22:53:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/imago/tpl.readme.md

import { processImage } from "@thi.ng/imago";
import { readJSON } from "@thi.ng/file-io";

await processImage(
	"test.jpg",
	readJSON("readme-example1.json"),
	{ outDir: "." }
);