import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const MediaFileType = t.Union(
  [t.Literal("photo"), t.Literal("video"), t.Literal("document")],
  { additionalProperties: true },
);
