import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutUserDisplayPictureInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutUserDisplayPictureInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutUserDisplayPictureInputObjectSchema = Schema
