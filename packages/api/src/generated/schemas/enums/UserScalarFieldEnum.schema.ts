import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "role",
  "firstName",
  "lastName",
  "email",
  "profilePicture",
  "location",
  "createdAt",
  "updatedAt",
])
