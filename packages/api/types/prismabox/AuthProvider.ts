import { t } from "elysia";

import { __nullable__ } from "./__nullable__";

export const AuthProvider = t.Union(
  [t.Literal("EMAIL_PASSWORD"), t.Literal("GOOGLE"), t.Literal("APPLE")],
  { additionalProperties: true },
);
