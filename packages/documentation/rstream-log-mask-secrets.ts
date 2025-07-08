// Tangled @ 2025-07-07T23:20:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream-log/src/format.ts

import {
  Logger, formatString, maskSecrets, writeConsole
} from "@thi.ng/rstream-log";

const logger = new Logger();

logger.stream.transform(
  formatString(),
  maskSecrets([/(?<=[A-Z0-9_]\=)\w+/g])
).subscribe(
  writeConsole()
);

logger.info("logged in USER=toxi, using TOKEN=123456");
// [INFO] logger-0: 2024-06-21T12:22:58.004Z  logged in USER=****, using TOKEN=****