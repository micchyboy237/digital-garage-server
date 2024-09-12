import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutPostInputObjectSchema } from "./MediaFileUpdateWithoutPostInput.schema"
import { MediaFileUncheckedUpdateWithoutPostInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutPostInput.schema"
import { MediaFileCreateWithoutPostInputObjectSchema } from "./MediaFileCreateWithoutPostInput.schema"
import { MediaFileUncheckedCreateWithoutPostInputObjectSchema } from "./MediaFileUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutPostInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutPostInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithWhereUniqueWithoutPostInputObjectSchema = Schema
