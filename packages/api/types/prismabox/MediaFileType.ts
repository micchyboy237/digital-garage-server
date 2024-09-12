import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const MediaFileType = t.Union(
  [t.Literal("IMAGE"), t.Literal("VIDEO"), t.Literal("DOCUMENT")],
  { additionalProperties: true },
);
