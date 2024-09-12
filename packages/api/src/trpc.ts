import { initTRPC, TRPCError } from "@trpc/server"
import { createNextApiHandler } from "@trpc/server/adapters/next"
import superjson from "superjson"
import { createContext } from "./context"
import { permissions } from "./middlewares"

export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
})

export const permissionsMiddleware = t.middleware(permissions)

export const publicProcedure = t.procedure

export const protectedProcedure: typeof t.procedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }
  return next({ ctx })
})

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

// Create Next.js API handler
export const apiHandler = createNextApiHandler({
  router: t.router, // replace with your router
  createContext,
})
