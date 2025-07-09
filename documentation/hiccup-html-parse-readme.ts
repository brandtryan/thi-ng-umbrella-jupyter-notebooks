// Tangled @ 2025-07-07T22:52:39-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/hiccup-html-parse/tpl.readme.md

import { parseHtml } from "@thi.ng/hiccup-html-parse";

const src = `<!doctype html>
<html lang="en">
<head>
	<script lang="javascript">
console.log("</"+"script>");
	</script>
	<style>
body { margin: 0; }
	</style>
</head>
<body>
	<div id="foo" bool data-xyz="123" empty=''>
	<a href="#bar">baz <b>bold</b></a><br/>
	</div>
</body>
</html>`;

const result = parseHtml(src);

console.log(result.type);
// "success"

console.log(result.result);

// [
//   ["html", { lang: "en" },
//     ["head", {},
//       ["script", { lang: "javascript" }, "console.log(\"</\"+\"script>\");" ],
//       ["style", {}, "body { margin: 0; }"] ],
//     ["body", {},
//       ["div", { id: "foo", bool: true, "data-xyz": "123" },
//         ["a", { href: "#bar" },
//           "baz ",
//           ["b", {}, "bold"]],
//         ["br", {}]]]]
// ]