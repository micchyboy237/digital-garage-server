import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "firebaseUid",
  "isEmailVerified",
  "firstName",
  "lastName",
  "displayPicture",
  "location",
  "accountStatus",
])
