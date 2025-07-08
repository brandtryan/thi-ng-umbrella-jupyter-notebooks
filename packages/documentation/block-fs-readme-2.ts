// Tangled @ 2025-07-07T22:39:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/block-fs/tpl.readme.md

import { BlockFS, MemoryBlockStorage } from "@thi.ng/block-fs";

// load binary blob
const response = await fetch("./blocks.dat");
const buffer = await response.arrayBuffer();

// wrap as block storage
const storage = new MemoryBlockStorage({
	buffer,
	blockSize: 1024,
	numBlocks: buffer.byteLength / 1024
});

// wrap as file system
const fs = new BlockFS(storage);

// list all entries (recursive)
for await(let f of fs.root.tree()) {
	console.log(f.path);
}

// list all entries in a directory
const dir = (await fs.entryForPath("/path/to/dir")).directory;
for await (let f of dir) {
	console.log(f.path);
}

// load an image as blob URL (MIME type is inferred automatically)
const img = new Image();
img.src = await fs.readAsObjectURL("/assets/test.jpg");