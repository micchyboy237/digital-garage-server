import { prisma } from "@boilerplate/database"
import bcrypt from "bcryptjs"
import { OAuth2Client } from "google-auth-library" // Example for Google
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import { checkEmail, sendVerificationEmail } from "../utils/mail"
import { validateEmail, validatePassword } from "../utils/validation"

export const signUpUser = async (email: string, password: string): Promise<string> => {
  // Password validation check (assuming a validatePassword function is defined)
  if (!validatePassword(password)) {
    throw new Error("Password does not meet security criteria")
  }

  // Email validation check
  if (!validateEmail(email)) {
    throw new Error("Invalid email format")
  }

  // Check if email is available
  try {
    await checkEmail(email)
  } catch (error) {
    throw error
  }

  // Check if email already exists
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw new Error("Email already exists")
  }

  // Create new user
  const newUser = await prisma.user.create({
    data: { email },
  })

  // Create authentication record
  const emailVerificationCode = uuidv4()
  const emailVerificationExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

  // Hash password
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  // Save hashed password and email verification details
  await prisma.auth.create({
    data: {
      password: hashedPassword,
      emailVerificationCode,
      emailVerificationExpiry,
      userId: newUser.id,
    },
  })

  // Send verification email
  sendVerificationEmail(email, emailVerificationCode)

  return "User created. Verification email sent."
}

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const socialLogin = async (token: string, provider: string): Promise<string> => {
  let email

  // Verify token with the respective provider
  switch (provider) {
    case "google":
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      const payload = ticket.getPayload()
      email = payload?.email
      break
    // Add cases for Apple and Facebook similarly
    default:
      throw new Error("Unsupported social login provider")
  }

  if (!email) {
    throw new Error("Failed to retrieve email from social login provider")
  }

  // Check if user exists
  let user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    user = await prisma.user.create({
      data: { email },
    })
  }

  // Generate JWT token
  const token = jwt.sign({ email }, process.env.SECRET_KEY as string, {
    expiresIn: "1h",
  })

  return token
}

export const verifyEmail = async (email: string, code: string): Promise<string> => {
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    throw new Error("User not found")
  }

  const authRecord = await prisma.auth.findUnique({ where: { userId: user.id } })

  if (!authRecord || authRecord.emailVerificationCode !== code) {
    throw new Error("Invalid or expired verification code")
  }

  if (!authRecord.emailVerificationExpiry) {
    throw new Error("No verification expiry date found")
  }

  if (authRecord.emailVerificationExpiry < new Date()) {
    throw new Error("Verification code has expired")
  }

  await prisma.auth.update({
    where: { userId: user.id },
    data: { isEmailVerified: true },
  })

  const token = jwt.sign({ email }, process.env.SECRET_KEY as string, {
    expiresIn: "1h",
  })

  return token
}
