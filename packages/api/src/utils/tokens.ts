import { prisma } from "@boilerplate/database"
import jwt from "jsonwebtoken"

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "", { expiresIn: "1h" })
}

export const generateRefreshToken = async (userId: string) => {
  const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET || "", { expiresIn: "7d" })
  await prisma.session.create({
    data: {
      token: refreshToken,
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    },
  })
  return refreshToken
}
