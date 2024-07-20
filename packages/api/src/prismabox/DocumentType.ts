import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const DocumentType = t.Union(
  [
    t.Literal("post"),
    t.Literal("invoice"),
    t.Literal("reminder"),
    t.Literal("document"),
  ],
  { additionalProperties: true },
);
