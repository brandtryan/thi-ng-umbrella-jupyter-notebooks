// Tangled @ 2025-07-07T23:02:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream-log/tpl.readme.md

import { LogLevel } from "@thi.ng/logger";
import { Logger, formatString, writeConsole } from "@thi.ng/rstream-log";

const logger = new Logger("main");
// or with min level
const logger = new Logger("main", LogLevel.DEBUG);
// or min level given as string
const logger = new Logger("main", "DEBUG");

// add console output w/ string formatter (a transducer)
// each logger instance has a rstream Stream instance
// allowing for downstream processing
logger.stream.transform(formatString()).subscribe(writeConsole());

logger.debug("hello world");
// [DEBUG] main: 2024-02-16T20:38:11.143Z hello world

logger.warn("eek");
// [WARN] main: 2024-02-16T20:38:11.144Z eek

// loggers can form hierarchies by creating/attaching child loggers
const child = logger.childLogger("child", LogLevel.INFO);

import { postWorker } from "@thi.ng/rstream";
// additionally send messages from this logger to worker
child.stream.subscribe(postWorker("log-worker.js"));

child.info("hi from submodule");
// [INFO] child: 2024-02-16T20:38:11.145Z hi from submodule