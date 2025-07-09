// Tangled @ 2025-07-07T23:09:18-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/wasm-api/tpl.readme.md

//! Example Zig application (hello.zig)

/// import externals
/// see build command for configuration
const js = @import("wasm-api");

export fn start() void {
    js.printStr("hello world!");
}