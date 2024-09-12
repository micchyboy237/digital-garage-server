import { z } from "zod"
import { MediaFileCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileCreateOrConnectWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateOrConnectWithoutUserDisplayPictureInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedOneWithoutUserDisplayPictureInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutUserDisplayPictureInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutUserDisplayPictureInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateNestedOneWithoutUserDisplayPictureInputObjectSchema = Schema
