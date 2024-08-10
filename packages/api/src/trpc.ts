import { initTRPC } from "@trpc/server"
import { Context } from "./context"
import { permissions } from "./permissions"

export const t = initTRPC.context<Context>().create()
export const permissionsMiddleware = t.middleware(permissions)

export const publicProcedure = t.procedure

export const protectedProcedure = t.procedure

export const loggedProcedure: typeof t.procedure = publicProcedure
  .use(async (opts) => {
    const start = Date.now()

    const result = await opts.next()

    const durationMs = Date.now() - start
    const meta = { path: opts.path, type: opts.type, durationMs }

    if (result.ok) {
      console.log(result.marker, "OK request timing:", meta)
    } else {
      console.error(result.marker, `Non-OK request timing\n${JSON.stringify(result.error, null, 2)}`, meta)
    }

    return result
  })
  .use(permissionsMiddleware)

export type { Context } from "./context"
