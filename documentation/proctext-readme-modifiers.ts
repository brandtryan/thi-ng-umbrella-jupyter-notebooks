// Tangled @ 2025-07-07T22:59:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/proctext/tpl.readme.md

import { generate } from "@thi.ng/proctext";

const DIRECTIONS = {
	e: "east",
	w: "west",
	n: "north",
	s: "south",
	d: "down",
	u: "up",
};

const ROOMS = {
	house: {
		desc: "very homely",
		exits: { e: "garden", u: "rafters" },
	},
	rafters: {
		desc: "pretty dark",
		exits: { d: "house" },
	},
	garden: {
		desc: "super lush",
		exits: { w: "house" },
	},
};

// partially data-driven template
const { result } = await generate(`
[room]
${Object.keys(ROOMS).join("\n")}

You're in the <here=room> (exits: <here;exits;uc>)...
It feels <here;desc> here.
`, {
	// custom modifiers (will be added to existing defaults)
	mods: {
		// produce a list of exits for given room ID
		exits: async (id) => Object.keys(ROOMS[id].exits).map((dir) => DIRECTIONS[dir]).join(", "),
		// return a room's description
		desc: async (id) => ROOMS[id].desc
	}
});

console.log(result);

// You're in the house (exits: EAST, UP)...
// It feels very homely here.