import { initTRPC } from "@trpc/server"
import { Context } from "./context"

export const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure

// export const adminProcedure: typeof t.procedure = publicProcedure.use(async (opts) => {
//   const { ctx } = opts
//   if (!ctx.user?.isAdmin) {
//     throw new TRPCError({ code: "UNAUTHORIZED" })
//   }
//   return opts.next({
//     ctx: {
//       user: ctx.user,
//     },
//   })
// })

export const loggedProcedure: typeof t.procedure = publicProcedure.use(async (opts) => {
  const start = Date.now()

  const result = await opts.next()

  const durationMs = Date.now() - start
  const meta = { path: opts.path, type: opts.type, durationMs }

  result.ok ? console.log("OK request timing:", meta) : console.error("Non-OK request timing", meta)

  return result
})

// export const protectedProcedure: typeof t.procedure = publicProcedure.use(async (opts) => {
//   const { ctx } = opts
//   if (!ctx.user) {
//     throw new TRPCError({ code: "UNAUTHORIZED" })
//   }
//   return opts.next({
//     ctx: {
//       user: ctx.user,
//     },
//   })
// })
