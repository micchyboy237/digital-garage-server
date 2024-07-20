import { z } from "zod"

export const AuthScalarFieldEnumSchema = z.enum([
  "id",
  "password",
  "googleId",
  "emailVerificationCode",
  "emailVerificationExpiry",
  "isEmailVerified",
  "createdAt",
  "updatedAt",
  "userId",
])
