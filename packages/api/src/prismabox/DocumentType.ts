import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const DocumentType = t.Union(
  [t.Literal("general"), t.Literal("photo")],
  { additionalProperties: true },
);
