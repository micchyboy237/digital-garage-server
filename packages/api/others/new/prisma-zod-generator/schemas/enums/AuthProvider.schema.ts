import { z } from "zod"

export const AuthProviderSchema = z.enum(["EMAIL_PASSWORD", "GOOGLE", "APPLE"])
