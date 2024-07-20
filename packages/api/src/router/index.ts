// import { authRouter } from "./router/auth"
// import { userRouter } from "./user"
// import { usersRouter } from "./generated/routers/User.router"
// import { createTRPCRouter, t } from "../trpc"
import { initTRPC } from "@trpc/server"
import { z } from "zod"
import { generateRandomData } from "../dataGenerator"

const t = initTRPC.create()

// export const appRouter = createTRPCRouter({
//   // auth: authRouter,
//   user: userRouter,
//   // user: usersRouter,
// })
export const appRouter = t.router({
  hello: t.procedure.input(z.string().optional()).query(({ input }) => {
    return `Hello, ${input ?? "world"}!`
  }),
  add: t.procedure.input(z.object({ a: z.number(), b: z.number() })).mutation(({ input }) => {
    return input.a + input.b
  }),
  // user: userRouter,
  data: t.procedure.query(() => {
    return generateRandomData()
  }),
})
