import { prisma } from "@boilerplate/database"
import { inferAsyncReturnType } from "@trpc/server"
import { CreateExpressContextOptions } from "@trpc/server/adapters/express"
import { Request, Response } from "express" // Import Request and Response types

export interface ContextType {
  req: Request // Add req to context type
  res: Response // Add res to context type
  prisma: typeof prisma
  session: Awaited<ReturnType<typeof prisma.session.findUnique>> | null
  user: Awaited<ReturnType<typeof prisma.user.findUnique>> | null
}

export const createContext = async ({ req, res }: CreateExpressContextOptions): Promise<ContextType> => {
  const getSessionFromHeader = async () => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.slice("Bearer ".length)
      try {
        // const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as string
        const session = await prisma.session.findUnique({ where: { token } })
        return session
      } catch (error) {
        return null
      }
    }
    return null
  }

  const getUserFromSession = async (session: Awaited<ReturnType<typeof prisma.session.findUnique>>) => {
    if (!session) {
      return null
    }

    return await prisma.user.findUnique({ where: { id: session.userId } })
  }

  const session = await getSessionFromHeader()
  const user = await getUserFromSession(session)

  return { req, res, prisma, session, user } // Ensure req and res are included
}

export type Context = inferAsyncReturnType<typeof createContext>
