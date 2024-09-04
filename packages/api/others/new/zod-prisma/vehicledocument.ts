import * as z from "zod"
import * as imports from "../../../../database/null"
import { CompleteMediaFile, RelatedMediaFileModel, CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel } from "./index"

export const VehicleDocumentModel = z.object({
  id: z.string(),
  fileId: z.string(),
  postId: z.string().nullish(),
  ownershipId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehicleDocument extends z.infer<typeof VehicleDocumentModel> {
  file: CompleteMediaFile
  post?: CompleteVehiclePost | null
  ownership?: CompleteVehicleOwnership | null
}

/**
 * RelatedVehicleDocumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehicleDocumentModel: z.ZodSchema<CompleteVehicleDocument> = z.lazy(() => VehicleDocumentModel.extend({
  file: RelatedMediaFileModel,
  post: RelatedVehiclePostModel.nullish(),
  ownership: RelatedVehicleOwnershipModel.nullish(),
}))
