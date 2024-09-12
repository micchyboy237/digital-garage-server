import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PostCategory = t.Union(
  [t.Literal("GALLERY"), t.Literal("HISTORY")],
  { additionalProperties: true },
);
