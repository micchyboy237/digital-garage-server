import type { PrismaClient } from "../database/node_modules/@prisma/client"

declare global {
  namespace Express {
    interface Request {
      prisma: PrismaClient
    }
  }
}
