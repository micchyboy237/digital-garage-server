import * as z from "zod"
import * as imports from "../../../../database/null"
import { CompleteMediaFile, RelatedMediaFileModel, CompleteUser, RelatedUserModel, CompleteVehicle, RelatedVehicleModel, CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleDocument, RelatedVehicleDocumentModel, CompleteVehicleDetails, RelatedVehicleDetailsModel } from "./index"

export const OwnershipModel = z.object({
  id: z.string(),
  userId: z.string(),
  vehicleId: z.string(),
  isCurrentOwner: z.boolean(),
  vehicleDisplayPhotoId: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  excludedPhotos: z.string().array(),
  excludedVideos: z.string().array(),
  excludedDocs: z.string().array(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteOwnership extends z.infer<typeof OwnershipModel> {
  vehicleDisplayPhoto?: CompleteMediaFile | null
  user?: CompleteUser | null
  vehicle?: CompleteVehicle | null
  posts: CompleteVehiclePost[]
  vehiclePhotos: CompleteMediaFile[]
  vehicleDocuments: CompleteVehicleDocument[]
  vehicleDetails?: CompleteVehicleDetails | null
}

/**
 * RelatedOwnershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOwnershipModel: z.ZodSchema<CompleteOwnership> = z.lazy(() => OwnershipModel.extend({
  vehicleDisplayPhoto: RelatedMediaFileModel.nullish(),
  user: RelatedUserModel.nullish(),
  vehicle: RelatedVehicleModel.nullish(),
  posts: RelatedVehiclePostModel.array(),
  vehiclePhotos: RelatedMediaFileModel.array(),
  vehicleDocuments: RelatedVehicleDocumentModel.array(),
  vehicleDetails: RelatedVehicleDetailsModel.nullish(),
}))
