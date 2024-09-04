import { z } from "zod"
import { MediaFileUpdateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutDisplayPhotoOwnershipInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutDisplayPhotoOwnershipInputObjectSchema = Schema
