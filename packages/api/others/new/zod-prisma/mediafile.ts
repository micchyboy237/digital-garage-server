import * as z from "zod"
import * as imports from "../../../../database/null"
import { MediaFileType } from "@prisma/client"
import { CompleteVehiclePost, RelatedVehiclePostModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel } from "./index"

export const MediaFileModel = z.object({
  id: z.string(),
  type: z.nativeEnum(MediaFileType),
  mimeType: z.string(),
  fileName: z.string(),
  url: z.string(),
  thumbnailUrl: z.string(),
  postId: z.string().nullish(),
  ownershipId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteMediaFile extends z.infer<typeof MediaFileModel> {
  post?: CompleteVehiclePost | null
  displayPhotoOwnership?: CompleteVehicleOwnership | null
  ownership?: CompleteVehicleOwnership | null
}

/**
 * RelatedMediaFileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMediaFileModel: z.ZodSchema<CompleteMediaFile> = z.lazy(() => MediaFileModel.extend({
  post: RelatedVehiclePostModel.nullish(),
  displayPhotoOwnership: RelatedVehicleOwnershipModel.nullish(),
  ownership: RelatedVehicleOwnershipModel.nullish(),
}))
