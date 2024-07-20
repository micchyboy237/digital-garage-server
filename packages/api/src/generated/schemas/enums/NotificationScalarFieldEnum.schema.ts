import { z } from "zod"

export const NotificationScalarFieldEnumSchema = z.enum(["id", "message", "userId", "createdAt", "updatedAt"])
