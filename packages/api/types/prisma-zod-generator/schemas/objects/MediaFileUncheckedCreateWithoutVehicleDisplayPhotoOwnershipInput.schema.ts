import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { UserUncheckedCreateNestedOneWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedCreateNestedOneWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    fileName: z.string(),
    url: z.string(),
    thumbnailUrl: z.string(),
    postId: z.string().optional().nullable(),
    ownershipId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userDisplayPicture: z.lazy(() => UserUncheckedCreateNestedOneWithoutDisplayPictureInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema = Schema
