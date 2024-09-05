import { z } from "zod"

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "provider",
  "email",
  "firebaseUid",
  "isEmailVerified",
  "lastLogin",
  "createdAt",
  "updatedAt",
])
