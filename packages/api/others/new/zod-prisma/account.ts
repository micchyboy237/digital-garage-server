import * as z from "zod"
import * as imports from "../../../../database/null"
import { AuthProvider } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteSession, RelatedSessionModel } from "./index"

export const AccountModel = z.object({
  id: z.string(),
  provider: z.nativeEnum(AuthProvider),
  email: z.string(),
  firebaseUid: z.string(),
  isEmailVerified: z.boolean(),
  lastLogin: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteAccount extends z.infer<typeof AccountModel> {
  user: CompleteUser
  sessions: CompleteSession[]
}

/**
 * RelatedAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAccountModel: z.ZodSchema<CompleteAccount> = z.lazy(() => AccountModel.extend({
  user: RelatedUserModel,
  sessions: RelatedSessionModel.array(),
}))
