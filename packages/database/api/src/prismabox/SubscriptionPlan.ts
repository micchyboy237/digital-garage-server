import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionPlan = t.Union(
  [
    t.Literal("MONTHLY"),
    t.Literal("YEARLY"),
    t.Literal("WEEKLY"),
    t.Literal("CUSTOM"),
  ],
  { additionalProperties: true },
);
