import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionStatus = t.Union(
  [t.Literal("active"), t.Literal("cancelled"), t.Literal("paused")],
  { additionalProperties: true },
);
