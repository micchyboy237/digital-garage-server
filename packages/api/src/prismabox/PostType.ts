import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PostType = t.Union(
  [t.Literal("REMINDER"), t.Literal("INVOICE"), t.Literal("DOCUMENT")],
  { additionalProperties: true },
);
