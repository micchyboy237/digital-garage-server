import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const SubscriptionPlan = t.Union(
  [t.Literal("DAY"), t.Literal("WEEK"), t.Literal("MONTH"), t.Literal("YEAR")],
  { additionalProperties: true },
);
