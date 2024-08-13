import { prisma } from "@boilerplate/database"
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"
import { ErrorCodes, ValidationException } from "../exceptions"
import { generateCode, generateExpiry, sendPasswordResetEmail, sendVerificationEmail } from "../utils/mail"
import { comparePasswords, hashPassword } from "../utils/password"
import { generateAccessToken, generateRefreshToken } from "../utils/tokens"

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const userService = {
  register: async (email: string, password: string) => {
    return prisma.$transaction(async (prisma) => {
      const existingUser = await prisma.user.findUnique({ where: { email } })

      if (existingUser) {
        throw new ValidationException(ErrorCodes.USER_ALREADY_EXISTS)
      }

      const hashedPassword = await hashPassword(password)
      const emailVerificationCode = generateCode()
      const emailVerificationExpiry = generateExpiry(24) // 24 hours from now

      const user = await prisma.user.create({
        data: {
          email,
          auth: {
            create: {
              password: hashedPassword,
              emailVerificationCode,
              emailVerificationExpiry,
            },
          },
        },
      })

      await sendVerificationEmail(email, emailVerificationCode)

      return user
    })
  },

  login: async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { auth: true },
    })

    if (!user || !user.auth || !user.auth.password || !(await comparePasswords(password, user.auth.password))) {
      throw new ValidationException(ErrorCodes.INVALID_CREDENTIALS)
    }

    if (!user.auth.isEmailVerified) {
      throw new ValidationException(ErrorCodes.EMAIL_NOT_VERIFIED)
    }

    const accessToken = generateAccessToken(user.id)
    const refreshToken = await generateRefreshToken(user.id)

    return { accessToken, refreshToken, user }
  },

  loginWithGoogle: async (idToken: string) => {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    if (!payload || !payload.email) {
      throw new ValidationException(ErrorCodes.INVALID_GOOGLE_ID_TOKEN)
    }

    const { email, sub: googleId, name, picture } = payload

    return prisma.$transaction(async (prisma) => {
      let user = await prisma.user.findUnique({
        where: { email },
        include: { auth: true },
      })

      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            firstName: name?.split(" ")[0],
            lastName: name?.split(" ").slice(1).join(" "),
            profilePicture: picture,
            auth: {
              create: {
                googleId,
              },
            },
          },
          include: { auth: true },
        })
      } else if (!user.auth?.googleId) {
        await prisma.auth.update({
          where: { userId: user.id },
          data: {
            googleId,
          },
        })
        user = await prisma.user.findUnique({
          where: { email },
          include: { auth: true },
        })
      }

      if (!user) {
        throw new ValidationException(ErrorCodes.USER_CREATION_FAILED)
      }

      const accessToken = generateAccessToken(user.id)
      const refreshToken = await generateRefreshToken(user.id)

      return { accessToken, refreshToken, user }
    })
  },

  sendEmailVerification: async (email: string, verificationCode: string) => {
    await sendVerificationEmail(email, verificationCode)
  },

  verifyEmail: async (emailVerificationCode: string) => {
    return prisma.$transaction(async (prisma) => {
      const authRecord = await prisma.auth.findFirst({
        where: { emailVerificationCode },
      })

      if (!authRecord || (authRecord.emailVerificationExpiry && authRecord.emailVerificationExpiry < new Date())) {
        throw new ValidationException(ErrorCodes.INVALID_OR_EXPIRED_VERIFICATION_CODE)
      }

      await prisma.auth.update({
        where: { id: authRecord.id },
        data: {
          isEmailVerified: true,
          emailVerificationCode: null,
          emailVerificationExpiry: null,
        },
      })

      return { verified: true }
    })
  },

  refreshToken: async (refreshToken: string) => {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || "") as { id: string }
    const session = await prisma.session.findFirst({
      where: { token: refreshToken, userId: decoded.id },
    })

    if (!session || session.expiresAt < new Date()) {
      throw new Error("Invalid refresh token")
    }

    const accessToken = generateAccessToken(decoded.id)
    return { accessToken }
  },

  resendEmailVerification: async (email: string) => {
    return prisma.$transaction(async (prisma) => {
      const user = await prisma.user.findUnique({
        where: { email },
        include: { auth: true },
      })

      if (!user || !user.auth) {
        throw new ValidationException(ErrorCodes.USER_NOT_FOUND)
      }

      if (user.auth.isEmailVerified) {
        throw new ValidationException(ErrorCodes.EMAIL_ALREADY_VERIFIED)
      }

      const emailVerificationCode = generateCode()
      const emailVerificationExpiry = generateExpiry(24) // 24 hours from now

      await prisma.auth.update({
        where: { userId: user.id },
        data: {
          emailVerificationCode,
          emailVerificationExpiry,
        },
      })

      await sendVerificationEmail(email, emailVerificationCode)
    })
  },

  requestPasswordReset: async (email: string) => {
    return prisma.$transaction(async (prisma) => {
      const user = await prisma.user.findUnique({
        where: { email },
        include: { auth: true },
      })

      if (!user || !user.auth) {
        throw new ValidationException(ErrorCodes.USER_NOT_FOUND)
      }

      const passwordResetToken = generateCode()
      const passwordResetExpiry = generateExpiry(1) // 1 hour from now

      await prisma.auth.update({
        where: { userId: user.id },
        data: {
          passwordResetToken,
          passwordResetExpiry,
        },
      })

      await sendPasswordResetEmail(email, passwordResetToken)
    })
  },

  resetPassword: async (token: string, newPassword: string) => {
    return prisma.$transaction(async (prisma) => {
      const authRecord = await prisma.auth.findFirst({
        where: { passwordResetToken: token, passwordResetExpiry: { gte: new Date() } },
      })

      if (!authRecord) {
        throw new ValidationException(ErrorCodes.INVALID_OR_EXPIRED_PASSWORD_RESET_TOKEN)
      }

      const hashedPassword = await hashPassword(newPassword)

      await prisma.auth.update({
        where: { id: authRecord.id },
        data: {
          password: hashedPassword,
          passwordResetToken: null,
          passwordResetExpiry: null,
        },
      })

      return { message: "Password reset successfully" }
    })
  },
}
