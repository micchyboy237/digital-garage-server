// middleware/authenticate.ts
import { prisma } from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import jwt from "jsonwebtoken"

export const authenticateMiddleware = async ({ req }) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } })
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
    }
    return { user }
  } catch (error) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
  }
}
