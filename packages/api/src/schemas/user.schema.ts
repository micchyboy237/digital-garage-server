import { z } from "zod"

export const emailSchema = z.string().email({ message: "Invalid email address" })
export const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters long" })

export const userRegistrationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
