import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const AccountStatus = t.Union(
  [
    t.Literal("ONBOARDING"),
    t.Literal("SELECT_SUBSCRIPTION"),
    t.Literal("ACTIVE"),
  ],
  { additionalProperties: true },
);
