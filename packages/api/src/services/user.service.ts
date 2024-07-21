import { prisma } from "@boilerplate/database"
import bcrypt from "bcryptjs"
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { ErrorMessages, ValidationException } from "../exceptions"
import { generateAccessToken, generateRefreshToken } from "../utils/tokens"

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const userService = {
  register: async (email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      throw new ValidationException(ErrorMessages.USER_ALREADY_EXISTS)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const emailVerificationCode = Math.random().toString(36).substring(2, 15)
    const emailVerificationExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

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

    await userService.sendEmailVerification(email, emailVerificationCode)

    return user
  },

  login: async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { auth: true },
    })

    if (!user || !user.auth || !user.auth.password || !(await bcrypt.compare(password, user.auth.password))) {
      throw new ValidationException(ErrorMessages.INVALID_CREDENTIALS)
    }

    if (!user.auth.isEmailVerified) {
      throw new ValidationException("Email not verified")
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
      throw new ValidationException("Invalid Google ID token")
    }

    const { email, sub: googleId, name, picture } = payload

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
      throw new ValidationException("User creation failed")
    }

    const accessToken = generateAccessToken(user.id)
    const refreshToken = await generateRefreshToken(user.id)

    return { accessToken, refreshToken, user }
  },

  sendEmailVerification: async (email: string, verificationCode: string) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    const appUrl = `${process.env.APP_URL}:${process.env.APP_PORT}`
    const verificationUrl = `${appUrl}/trpc/user.verifyEmail?input=${encodeURIComponent(JSON.stringify({ code: verificationCode }))}`

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      text: `Please verify your email by clicking the following link: ${verificationUrl}`,
      html: `Please verify your email by clicking the following link: <a href="${verificationUrl}">${verificationUrl}</a>`,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("Email sent:", info)
    } catch (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email verification.")
    }
  },

  verifyEmail: async (emailVerificationCode: string) => {
    const authRecord = await prisma.auth.findFirst({
      where: { emailVerificationCode },
    })

    if (!authRecord || (authRecord.emailVerificationExpiry && authRecord.emailVerificationExpiry < new Date())) {
      throw new ValidationException("Invalid or expired verification code")
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
}
