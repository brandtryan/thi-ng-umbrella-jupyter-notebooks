// Tangled @ 2025-07-07T23:01:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rdom-forms/tpl.readme.md

import {
	compileForm, form, hidden, password, str, submit
} from "@thi.ng/rdom-forms";

// compile form from given field descriptions
const loginForm = compileForm(
	form({ action: "/login", method: "post" },
		// string input
		str({ id: "user", label: "Username", desc: "or email address" }),
		// password
		password({ id: "pass", label: "Password", desc: "min. 8 characters", min: 8 }),
		// hidden form value
		hidden({ name: "target", value: "user-home" }),
		submit({ title: "Login", label: "" })
	),
	{
		// disable reactive value subscriptions
		behaviors: { values: false },
		// customize attribs for label descriptions
		descAttribs: { class: "desc" }
	}
);

// use thi.ng/hiccup to serialize as HTML
import { serialize } from "@thi.ng/hiccup";

console.log(serialize(loginForm));