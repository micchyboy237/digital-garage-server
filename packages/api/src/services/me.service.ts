import { prisma } from "@boilerplate/database"

export const meService = {
  getActiveSubscription: async (userId: string) => {
    return prisma.$transaction(async (prisma) => {
      const subscriptions = await prisma.subscription.findMany({
        where: { userId, status: "ACTIVE" },
        orderBy: { startDate: "desc" },
      })

      // Filter the most relevant subscription (most recent and active)
      const activeSubscription = subscriptions.find((sub) => {
        return sub.expiresAt && new Date(sub.expiresAt) > new Date()
      })

      return activeSubscription
    })
  },
}
