import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const FieldType = t.Union(
  [
    t.Literal("STRING"),
    t.Literal("NUMBER"),
    t.Literal("DATE"),
    t.Literal("BOOLEAN"),
  ],
  { additionalProperties: true },
);
