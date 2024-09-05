import * as z from "zod"
import * as imports from "../../../../database/null"
import { CompleteMediaFile, RelatedMediaFileModel, CompleteUser, RelatedUserModel, CompleteVehicle, RelatedVehicleModel, CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleDetails, RelatedVehicleDetailsModel } from "./index"

export const VehicleOwnershipModel = z.object({
  id: z.string(),
  userId: z.string(),
  vehicleId: z.string(),
  isCurrentOwner: z.boolean(),
  vehicleDisplayPhotoId: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehicleOwnership extends z.infer<typeof VehicleOwnershipModel> {
  vehicleDisplayPhoto?: CompleteMediaFile | null
  user?: CompleteUser | null
  vehicle?: CompleteVehicle | null
  posts: CompleteVehiclePost[]
  vehicleFiles: CompleteMediaFile[]
  vehicleDetails?: CompleteVehicleDetails | null
}

/**
 * RelatedVehicleOwnershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehicleOwnershipModel: z.ZodSchema<CompleteVehicleOwnership> = z.lazy(() => VehicleOwnershipModel.extend({
  vehicleDisplayPhoto: RelatedMediaFileModel.nullish(),
  user: RelatedUserModel.nullish(),
  vehicle: RelatedVehicleModel.nullish(),
  posts: RelatedVehiclePostModel.array(),
  vehicleFiles: RelatedMediaFileModel.array(),
  vehicleDetails: RelatedVehicleDetailsModel.nullish(),
}))
