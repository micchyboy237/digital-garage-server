import { initTRPC } from "@trpc/server"
import { Context } from "../context"
import { userRouter } from "./user.route"

const t = initTRPC.context<Context>().create()

export const appRouter = t.router({
  user: userRouter,
})

export type AppRouter = typeof appRouter
