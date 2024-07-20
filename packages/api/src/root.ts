import { initTRPC } from "@trpc/server"
import { z } from "zod"
import { userRouter } from "./router/user"
import { createTRPCRouter } from "./trpc"

const t = initTRPC.create()

export const appRouter = createTRPCRouter({
  hello: t.procedure.input(z.string().optional()).query(({ input }) => {
    return `Hello, ${input ?? "world"}!`
  }),
  add: t.procedure.input(z.object({ a: z.number(), b: z.number() })).mutation(({ input }) => {
    return input.a + input.b
  }),
  user: userRouter,
})

export type AppRouter = typeof appRouter
