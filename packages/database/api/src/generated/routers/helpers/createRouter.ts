import * as trpc from "@boilerplate/shared"
import { permissions } from "../../shield/shield"

import type { Context } from "../../../trpc"

export const t = trpc.initTRPC.context<Context>().create()

export const globalMiddleware = t.middleware(async ({ ctx, next }) => {
  console.log("inside middleware!")
  return next()
})

export const permissionsMiddleware = t.middleware(permissions)

export const publicProcedure = t.procedure

export const shieldedProcedure = t.procedure

  .use(globalMiddleware)

  .use(permissionsMiddleware)
