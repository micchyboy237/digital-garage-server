import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const PaymentInterval = t.Union([t.Literal("monthly")], {
  additionalProperties: true,
});
