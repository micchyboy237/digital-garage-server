import { prisma } from "@boilerplate/database"
import { inferAsyncReturnType } from "@trpc/server"
import { CreateNextContextOptions } from "@trpc/server/adapters/next"
import { NextApiRequest, NextApiResponse } from "next" // Import Next.js types

export interface ContextType {
  req: NextApiRequest // Change to NextApiRequest
  res: NextApiResponse // Change to NextApiResponse
  prisma: typeof prisma
  session: Awaited<ReturnType<typeof prisma.session.findUnique>> | null
  user: Awaited<ReturnType<typeof prisma.user.findUnique>> | null
}

export const createContext = async ({ req, res }: CreateNextContextOptions): Promise<ContextType> => {
  const getSessionFromHeader = async () => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.slice("Bearer ".length)
      try {
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

  return { req, res, prisma, session, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
