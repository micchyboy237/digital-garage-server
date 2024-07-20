// src/permissions.ts
import { and, not, shield } from "trpc-shield"
import { Context } from "./context"
import { isAdmin, isAuthenticated } from "./rules"

export const permissions = shield<Context>(
  {
    query: {
      frontPage: not(isAuthenticated),
      users: and(isAuthenticated, isAdmin),
    },
    mutation: {
      register: isAuthenticated,
    },
  },
  {
    fallbackRule: not(isAuthenticated),
  },
)
