import { z } from "zod"

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "provider",
  "userId",
  "firebaseUid",
  "isEmailVerified",
  "lastLogin",
  "createdAt",
  "updatedAt",
])
