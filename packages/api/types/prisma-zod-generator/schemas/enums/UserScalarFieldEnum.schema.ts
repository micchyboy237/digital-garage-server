import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "firstName",
  "lastName",
  "displayPictureId",
  "location",
  "accountStatus",
  "createdAt",
  "updatedAt",
])
