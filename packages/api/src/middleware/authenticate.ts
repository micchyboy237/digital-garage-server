import { prisma } from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import { Request } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

export const authenticateMiddleware = async ({ req }: { req: Request }) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload
    const user = await prisma.user.findUnique({ where: { id: decoded.id } })
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
    }
    return { user }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Token expired" })
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" })
    }
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please authenticate" })
  }
}
