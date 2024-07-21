import nodemailer from "nodemailer"

export const generateCode = (): string => {
  return Math.random().toString(36).substring(2, 15)
}

export const generateExpiry = (hours: number): Date => {
  return new Date(Date.now() + hours * 60 * 60 * 1000)
}

export const sendVerificationEmail = async (email: string, code: string) => {
  // Configure your email service provider
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  })

  const appUrl = `${process.env.APP_URL}:${process.env.APP_PORT}`
  const verificationUrl = encodeURI(`${appUrl}/trpc/user.verifyEmail?input={"code":"${code}"}`)

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    text: `Please verify your email by clicking the following link: ${verificationUrl}`,
  }

  await transporter.sendMail(mailOptions)
}

export const sendPasswordResetEmail = async (email: string, resetToken: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  })

  const appUrl = `${process.env.APP_URL}:${process.env.APP_PORT}`
  const resetUrl = encodeURI(`${appUrl}/trpc/user.resetPassword?input={"token":"${resetToken}"}`)

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    text: `You requested a password reset. Please click the following link to reset your password: ${resetUrl}`,
    html: `You requested a password reset. Please click the following link to reset your password: <a href="${resetUrl}">${resetUrl}</a>`,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info)
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send password reset email.")
  }
}
