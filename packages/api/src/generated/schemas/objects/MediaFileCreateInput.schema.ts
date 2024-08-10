import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { DocumentCreateNestedOneWithoutFilesInputObjectSchema } from "./DocumentCreateNestedOneWithoutFilesInput.schema"
import { UserCreateNestedOneWithoutProfilePictureInputObjectSchema } from "./UserCreateNestedOneWithoutProfilePictureInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    document: z.lazy(() => DocumentCreateNestedOneWithoutFilesInputObjectSchema).optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProfilePictureInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutDisplayPictureInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateInputObjectSchema = Schema
