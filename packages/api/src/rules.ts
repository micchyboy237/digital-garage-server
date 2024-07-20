// src/rules.ts
import { rule } from "trpc-shield"
import { Context } from "./context"

export const isAuthenticated = rule<Context>()(async (ctx) => {
  return ctx.user !== null
})

export const isAdmin = rule<Context>()(async (ctx) => {
  return ctx.user?.role === "admin"
})

export const isEditor = rule<Context>()(async (ctx) => {
  return ctx.user?.role === "user"
})
