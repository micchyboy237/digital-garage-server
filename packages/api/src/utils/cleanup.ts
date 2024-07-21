import { prisma } from "@boilerplate/database"

export const cleanUpExpiredTokens = async () => {
  const now = new Date()

  try {
    const deletedSessions = await prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    })

    console.log(`Deleted ${deletedSessions.count} expired sessions.`)
  } catch (error) {
    console.error("Error cleaning up expired tokens:", error)
  }
}
