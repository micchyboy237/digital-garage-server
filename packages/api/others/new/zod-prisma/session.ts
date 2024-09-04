import * as z from "zod"
import * as imports from "../../../../database/null"
import { AuthProvider } from "@prisma/client"
import { CompleteUser, RelatedUserModel } from "./index"

export const SessionModel = z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  provider: z.nativeEnum(AuthProvider),
  deviceFingerprint: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSession extends z.infer<typeof SessionModel> {
  user?: CompleteUser | null
}

/**
 * RelatedSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSessionModel: z.ZodSchema<CompleteSession> = z.lazy(() => SessionModel.extend({
  user: RelatedUserModel.nullish(),
}))
