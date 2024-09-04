import * as z from "zod"
import * as imports from "../../../../database/null"
import { AccountStatus } from "@prisma/client"
import { CompleteSession, RelatedSessionModel, CompleteVehicle, RelatedVehicleModel, CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleTransfer, RelatedVehicleTransferModel, CompleteSubscription, RelatedSubscriptionModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  firebaseUid: z.string(),
  isEmailVerified: z.boolean(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  displayPicture: z.string().nullish(),
  location: z.string().nullish(),
  accountStatus: z.nativeEnum(AccountStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  sessions: CompleteSession[]
  vehicles: CompleteVehicle[]
  posts: CompleteVehiclePost[]
  transfersReceived: CompleteVehicleTransfer[]
  transfersSent: CompleteVehicleTransfer[]
  subscription?: CompleteSubscription | null
  vehicleOwnerships: CompleteVehicleOwnership[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  sessions: RelatedSessionModel.array(),
  vehicles: RelatedVehicleModel.array(),
  posts: RelatedVehiclePostModel.array(),
  transfersReceived: RelatedVehicleTransferModel.array(),
  transfersSent: RelatedVehicleTransferModel.array(),
  subscription: RelatedSubscriptionModel.nullish(),
  vehicleOwnerships: RelatedVehicleOwnershipModel.array(),
}))
