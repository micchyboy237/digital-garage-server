import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "firstName",
  "lastName",
  "displayPicture",
  "location",
  "accountStatus",
  "createdAt",
  "updatedAt",
])
