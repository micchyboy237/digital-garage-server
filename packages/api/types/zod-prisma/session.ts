import * as z from "zod"
import { CompleteAccount, RelatedAccountModel, CompleteUser, RelatedUserModel } from "./index"

export const SessionModel = z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  accountId: z.string(),
  deviceFingerprint: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSession extends z.infer<typeof SessionModel> {
  account: CompleteAccount
  user?: CompleteUser | null
}

/**
 * RelatedSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSessionModel: z.ZodSchema<CompleteSession> = z.lazy(() => SessionModel.extend({
  account: RelatedAccountModel,
  user: RelatedUserModel.nullish(),
}))
