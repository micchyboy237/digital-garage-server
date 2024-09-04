import * as z from "zod"
import * as imports from "../../../../database/null"
import { PostCategory, PostType } from "@prisma/client"
import { CompleteMediaFile, RelatedMediaFileModel, CompleteVehicleDocument, RelatedVehicleDocumentModel, CompleteUser, RelatedUserModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel } from "./index"

export const VehiclePostModel = z.object({
  id: z.string(),
  title: z.string(),
  category: z.nativeEnum(PostCategory),
  description: z.string().nullish(),
  type: z.nativeEnum(PostType).nullish(),
  createdById: z.string(),
  ownershipId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehiclePost extends z.infer<typeof VehiclePostModel> {
  photos: CompleteMediaFile[]
  documents: CompleteVehicleDocument[]
  createdBy?: CompleteUser | null
  ownership?: CompleteVehicleOwnership | null
}

/**
 * RelatedVehiclePostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehiclePostModel: z.ZodSchema<CompleteVehiclePost> = z.lazy(() => VehiclePostModel.extend({
  photos: RelatedMediaFileModel.array(),
  documents: RelatedVehicleDocumentModel.array(),
  createdBy: RelatedUserModel.nullish(),
  ownership: RelatedVehicleOwnershipModel.nullish(),
}))
