import { prisma } from "@boilerplate/database"
import { inferAsyncReturnType } from "@trpc/server"
import { CreateExpressContextOptions } from "@trpc/server/adapters/express"
import jwt from "jsonwebtoken"

export interface ContextType {
  prisma: typeof prisma
  user: Awaited<ReturnType<typeof prisma.user.findUnique>> | null
}

export const createContext = async ({ req, res }: CreateExpressContextOptions): Promise<ContextType> => {
  const getUserFromHeader = async () => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1]
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as string
        const user = await prisma.user.findUnique({ where: { id: decoded } })
        return user
      } catch (error) {
        return null
      }
    }
    return null
  }

  const user = await getUserFromHeader()

  return { prisma, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
