import { z } from "zod"
import { ErrorMessages } from "../exceptions"

export const loginOrRegisterSchema = z.object({
  email: z.string().email({ message: ErrorMessages.INVALID_EMAIL_ADDRESS }),
  firstName: z.string().min(2, { message: ErrorMessages.FIRST_NAME_TOO_SHORT }).optional(),
  lastName: z.string().min(2, { message: ErrorMessages.LAST_NAME_TOO_SHORT }).optional(),
  provider: z.enum(["EMAIL_PASSWORD", "GOOGLE", "APPLE"]),
  firebaseUid: z.string(),
  deviceFingerprint: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  isEmailVerified: z.boolean().optional(),
})
