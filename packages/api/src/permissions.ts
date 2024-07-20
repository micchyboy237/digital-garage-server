// src/permissions.ts
import { allow, not, shield } from "trpc-shield"
import { Context } from "./context"
import { isAuthenticated } from "./rules"

export const permissions = shield<Context>(
  {
    query: {},
    mutation: {
      register: allow,
    },
  },
  {
    fallbackRule: not(isAuthenticated),
  },
)
