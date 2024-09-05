import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehiclePostCreateNestedOneWithoutFilesInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutFilesInput.schema"
import { UserCreateNestedOneWithoutDisplayPictureInputObjectSchema } from "./UserCreateNestedOneWithoutDisplayPictureInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    fileName: z.string(),
    url: z.string(),
    thumbnailUrl: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutFilesInputObjectSchema).optional(),
    userDisplayPicture: z.lazy(() => UserCreateNestedOneWithoutDisplayPictureInputObjectSchema).optional(),
    vehicleDisplayPhotoOwnership: z
      .lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema)
      .optional(),
  })
  .strict()

export const MediaFileCreateWithoutOwnershipInputObjectSchema = Schema
