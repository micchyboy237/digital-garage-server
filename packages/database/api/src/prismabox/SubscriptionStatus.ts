import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionStatus = t.Union(
  [t.Literal("ACTIVE"), t.Literal("CANCELED"), t.Literal("EXPIRED")],
  { additionalProperties: true },
);
