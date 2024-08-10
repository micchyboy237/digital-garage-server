import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const EventType = t.Union(
  [
    t.Literal("post"),
    t.Literal("reminder"),
    t.Literal("invoice"),
    t.Literal("document"),
  ],
  { additionalProperties: true },
);
