import * as z from "zod"
import * as imports from "../../../../database/null"
import { AccountStatus } from "@prisma/client"
import { CompleteMediaFile, RelatedMediaFileModel, CompleteSession, RelatedSessionModel, CompleteVehicle, RelatedVehicleModel, CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleTransfer, RelatedVehicleTransferModel, CompleteSubscription, RelatedSubscriptionModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel, CompleteAccount, RelatedAccountModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  displayPictureId: z.string().nullish(),
  location: z.string().nullish(),
  accountStatus: z.nativeEnum(AccountStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  displayPicture?: CompleteMediaFile | null
  sessions: CompleteSession[]
  vehicles: CompleteVehicle[]
  posts: CompleteVehiclePost[]
  transfersReceived: CompleteVehicleTransfer[]
  transfersSent: CompleteVehicleTransfer[]
  subscription?: CompleteSubscription | null
  vehicleOwnerships: CompleteVehicleOwnership[]
  accounts: CompleteAccount[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  displayPicture: RelatedMediaFileModel.nullish(),
  sessions: RelatedSessionModel.array(),
  vehicles: RelatedVehicleModel.array(),
  posts: RelatedVehiclePostModel.array(),
  transfersReceived: RelatedVehicleTransferModel.array(),
  transfersSent: RelatedVehicleTransferModel.array(),
  subscription: RelatedSubscriptionModel.nullish(),
  vehicleOwnerships: RelatedVehicleOwnershipModel.array(),
  accounts: RelatedAccountModel.array(),
}))
