import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutPhotosInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput.schema"
import { VehicleDocumentCreateNestedOneWithoutFileInputObjectSchema } from "./VehicleDocumentCreateNestedOneWithoutFileInput.schema"

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
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema).optional(),
    displayPhotoOwnership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    vehicleDocument: z.lazy(() => VehicleDocumentCreateNestedOneWithoutFileInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateWithoutOwnershipInputObjectSchema = Schema
