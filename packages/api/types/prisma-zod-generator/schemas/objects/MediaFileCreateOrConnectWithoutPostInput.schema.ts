import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutPostInputObjectSchema } from "./MediaFileCreateWithoutPostInput.schema"
import { MediaFileUncheckedCreateWithoutPostInputObjectSchema } from "./MediaFileUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutPostInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutPostInputObjectSchema = Schema
