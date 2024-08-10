import { z } from "zod"

export const NotificationScalarFieldEnumSchema = z.enum(["id", "title", "message", "userId", "createdAt", "updatedAt"])
