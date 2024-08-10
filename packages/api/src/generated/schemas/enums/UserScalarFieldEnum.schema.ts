import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "role",
  "firstName",
  "lastName",
  "email",
  "location",
  "createdAt",
  "updatedAt",
])
