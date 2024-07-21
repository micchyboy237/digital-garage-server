import { z } from "zod"
import { ErrorMessages } from "../exceptions"

export const emailSchema = z.string().email({ message: ErrorMessages.INVALID_EMAIL_ADDRESS })
export const passwordSchema = z.string().min(6, { message: ErrorMessages.PASSWORD_TOO_SHORT })

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const loginGoogleSchema = z.object({ idToken: z.string() })

export const verifyEmailSchema = z.object({
  code: z.string(),
})

export const resendEmailVerificationSchema = z.object({
  email: emailSchema,
})

export const refreshTokenSchema = z.object({
  refreshToken: z.string(),
})

export const requestPasswordResetSchema = z.object({
  email: emailSchema,
})

export const resetPasswordSchema = z.object({
  token: z.string(),
  newPassword: passwordSchema,
})
