import { prisma } from "@boilerplate/database"
import bcrypt from "bcryptjs"
import nodemailer from "nodemailer"
import { ErrorMessages, ValidationException } from "../exceptions"

export const userService = {
  register: async (email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

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
      html: `Please verify your email by clicking the following link: <a href="${verificationUrl}">${verificationUrl}</a>`, // Include HTML version for better email formatting
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
}
