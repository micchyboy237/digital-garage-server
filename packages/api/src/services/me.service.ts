import { AccountStatus, MediaFile, prisma, User } from "@boilerplate/database"

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
  getUser: async (userId: string): Promise<User> => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { displayPicture: true },
    })

    if (!user) {
      throw new Error("User not found")
    }

    return user
  },
  updateUser: async (
    userId: string,
    input: {
      firstName?: string
      lastName?: string
      location?: string
      displayPicture?: MediaFile
      accountStatus?: AccountStatus
    },
  ): Promise<User> => {
    const { displayPicture, ...rest } = input
    return prisma.user.update({
      where: { id: userId },
      data: {
        ...rest,
        displayPicture: {
          create: displayPicture,
        },
      },
      include: { displayPicture: true },
    })
  },
}
