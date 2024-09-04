import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
