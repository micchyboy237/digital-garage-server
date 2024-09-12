import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const TransferStatus = t.Union(
  [t.Literal("REQUESTED"), t.Literal("ACCEPTED"), t.Literal("REJECTED")],
  { additionalProperties: true },
);
