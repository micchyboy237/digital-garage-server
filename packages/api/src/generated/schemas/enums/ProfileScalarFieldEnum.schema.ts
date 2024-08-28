import { z } from "zod"

export const ProfileScalarFieldEnumSchema = z.enum(["id", "firstName", "lastName", "profilePicture", "location", "userId"])
