import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehiclePostCreateNestedOneWithoutFilesInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutFilesInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateWithoutDisplayPhotoOwnershipInput> = z
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
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleFilesInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema = Schema
