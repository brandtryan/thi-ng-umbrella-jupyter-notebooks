// Tangled @ 2025-07-07T22:36:38-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/args/tpl.readme.md

import {
    flag,
    hex,
    json,
    kvPairs,
    oneOf,
    parse,
    size,
    string,
    vec,
    type Args,
    type KVDict,
    type Tuple,
} from "@thi.ng/args";

type ImgType = "png" | "jpg" | "gif" | "tiff";

// CLI args will be validated against this interface
interface TestArgs {
    configPath?: string;
    force?: boolean;
    bg: number;
    type: ImgType;
    size?: Tuple<number>;
    pos?: Tuple<number>;
    xtra?: { a: number; b: string };
    define?: KVDict;
}

// arg specifications
const specs: Args<TestArgs> = {
    // string arg
    configPath: string({
        alias: "c",
        hint: "PATH",
        desc: "Config file path (CLI args always take precedence over those settings)",
    }),
    // boolean flag (default: false)
    force: flag({
        alias: "f",
        desc: "Force operation",
        // side effect & predicate
        // parsing only continues if fn returns true
        fn: (_) => (console.log("force mode enabled"), true),
    }),
    // hex int value
    bg: hex({
        desc: "Background color",
        // mandatory args require a `default` value and/or `optional: false`
        default: 0xffffff,
        defaultHint: "ffffff",
    }),
    // enum value (mandatory)
    type: oneOf(["png", "jpg", "gif", "tiff"], {
        alias: "t",
        desc: "Image type",
        // mandatory args require a `default` value and/or `optional: false`
        optional: false,
    }),
    // fixed size numeric tuple w/ `x` as delimiter
    // size: tuple(coerceInt, 2, { hint: "WxH", desc: "Target size" }, "x"),
    // syntax sugar for above:
    size: size(2, { hint: "WxH", desc: "Target size" }),
    // another version for tuples of floating point values
    // pos: tuple(coerceFloat, 2, { desc: "Lat/Lon" }, ","),
    pos: vec(2, { desc: "Lat/Lon coordinates" }),
    // JSON string arg
    xtra: json({
        alias: "x",
        desc: "Extra options",
        group: "extra",
    }),
    // key-value pairs parsed into an object
    define: kvPairs({
        alias: "D",
        desc: "Define dict entry",
        group: "extra"
    }),
};

try {
    // parse argv w/ above argument specs & default options
    // (by default usage is shown if error occurs)
    const args = parse(specs, process.argv, {
        usageOpts: {
            prefix: `
 █ █   █           │
██ █               │
 █ █ █ █   █ █ █ █ │ @thi.ng/args demo app
 █ █ █ █ █ █ █ █ █ │ v1.0.0
                 █ │
               █ █ │\n\n`,
            showGroupNames: true,
            groups: ["flags", "main", "extra"],
            lineWidth: 72,
        },
    });
    console.log(args);
} catch (_) {}