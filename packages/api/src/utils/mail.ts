import { prisma } from "@boilerplate/database"
import nodemailer from "nodemailer"

export const sendVerificationEmail = async (email: string, code: string) => {
  // Configure your email service provider
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    text: `Please verify your email by clicking the following link: ${process.env.FRONTEND_URL}/verify-email?code=${code}`,
  }

  await transporter.sendMail(mailOptions)
}

export const checkEmail = async (email: string): Promise<string> => {
  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    throw new Error("Email already exists")
  }

  return "Email is available"
}
