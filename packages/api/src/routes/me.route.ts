import { meService } from "../services"
import { protectedProcedure, publicProcedure, t } from "../trpc"

export const meRouter = t.router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.user
  }),
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id
    if (!userId) {
      return null
    }
    const activeSubscription = await meService.getActiveSubscription(userId)
    return activeSubscription
  }),
})
