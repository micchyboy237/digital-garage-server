import { z } from "zod"
import { ErrorMessages } from "../exceptions"

export const emailSchema = z.string().email({ message: ErrorMessages.INVALID_EMAIL_ADDRESS })
export const passwordSchema = z.string().min(6, { message: ErrorMessages.PASSWORD_TOO_SHORT })

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const verifyEmailSchema = z.object({
  code: z.string(),
})
