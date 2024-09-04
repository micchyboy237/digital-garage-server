import { z } from "zod"
import { MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedOneWithoutDisplayPhotoOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateNestedOneWithoutDisplayPhotoOwnershipInputObjectSchema = Schema
