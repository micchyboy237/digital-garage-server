import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutOwnershipInput.schema"
import { MediaFileCreateWithoutOwnershipInputObjectSchema } from "./MediaFileCreateWithoutOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
