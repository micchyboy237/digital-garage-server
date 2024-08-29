import { z } from "zod"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoUpdateWithoutPostInputObjectSchema } from "./PhotoUpdateWithoutPostInput.schema"
import { PhotoUncheckedUpdateWithoutPostInputObjectSchema } from "./PhotoUncheckedUpdateWithoutPostInput.schema"
import { PhotoCreateWithoutPostInputObjectSchema } from "./PhotoCreateWithoutPostInput.schema"
import { PhotoUncheckedCreateWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpsertWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PhotoUpdateWithoutPostInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutPostInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpsertWithWhereUniqueWithoutPostInputObjectSchema = Schema
