import { z } from "zod"

export const SessionScalarFieldEnumSchema = z.enum([
  "id",
  "token",
  "expiresAt",
  "accountId",
  "deviceFingerprint",
  "userId",
  "createdAt",
  "updatedAt",
])
