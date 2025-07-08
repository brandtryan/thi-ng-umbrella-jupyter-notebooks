// Tangled @ 2025-07-07T22:39:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/block-fs/tpl.readme.md

import { BlockFS, MemoryBlockStorage } from "@thi.ng/block-fs";

// create in-memory storage (64KB)
const storage = new MemoryBlockStorage({ numBlocks: 0x100, blockSize: 0x100 });

// create & initialize filesystem for given storage
const fs = new BlockFS(storage);
await fs.init();

// write a new text file (utf-8)
console.log(
	await fs.writeFile("/hello/world.txt", "Hello, world!\n".repeat(20))
);
// { start: 3, end: 4, size: 280 }

// append to file (or auto-create it if missing)
console.log(
	await fs.appendFile("/hello/world.txt", "Goodbye, world!\n".repeat(20))
);
// { start: 3, end: 5, size: 600 }

// read file as text
console.log(await fs.readText("/hello/world.txt"));
// Hello, world!
// Hello, world!
// Hello, world!
// ...
// Goodbye, world!
// Goodbye, world!
// Goodbye, world!
// ...

// write binary file, missing intermediate directories will be auto-created
console.log(
	await fs.writeFile(
		"/deeply/nested/paths/are-ok",
		new Uint8Array([1, 2, 3, 4])
	)
);
// { start: 9, end: 9, size: 4 }

// read back...
console.log(await fs.readFile("/deeply/nested/paths/are-ok"));
// Uint8Array(4) [ 1, 2, 3, 4 ]

// iterate all files & directory entries in root dir
for await (let entry of fs.root.tree()) {
	// entry.path is absolute path
	// entry.size is always a bigint
	// entry.ctime/mtime is UNIX epoch
	console.log(entry.path, entry.size, new Date(entry.ctime));
}

// /hello 0n 2025-04-01T20:18:55.916Z
// /hello/world.txt 600n 2025-04-01T20:18:55.916Z
// /deeply 0n 2025-04-01T20:18:55.919Z
// /deeply/nested 0n 2025-04-01T20:18:55.919Z
// /deeply/nested/paths 0n 2025-04-01T20:18:55.919Z
// /deeply/nested/paths/are-ok 4n 2025-04-01T20:18:55.919Z