import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const UserRole = t.Union([t.Literal("admin"), t.Literal("user")], {
  additionalProperties: true,
});
