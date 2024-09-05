import { z } from "zod"

export const AccountScalarFieldEnumSchema = z.enum(["id", "provider", "lastLogin", "userId", "email", "createdAt", "updatedAt"])
