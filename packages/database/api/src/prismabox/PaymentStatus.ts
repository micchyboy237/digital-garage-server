import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PaymentStatus = t.Union(
  [
    t.Literal("PAID"),
    t.Literal("REFUNDED"),
    t.Literal("PENDING"),
    t.Literal("FAILED"),
  ],
  { additionalProperties: true },
);
