import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInputObjectSchema = Schema
