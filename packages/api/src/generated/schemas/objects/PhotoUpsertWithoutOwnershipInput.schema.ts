import { z } from "zod"
import { PhotoUpdateWithoutOwnershipInputObjectSchema } from "./PhotoUpdateWithoutOwnershipInput.schema"
import { PhotoUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedUpdateWithoutOwnershipInput.schema"
import { PhotoCreateWithoutOwnershipInputObjectSchema } from "./PhotoCreateWithoutOwnershipInput.schema"
import { PhotoUncheckedCreateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpsertWithoutOwnershipInput> = z
  .object({
    update: z.union([
      z.lazy(() => PhotoUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpsertWithoutOwnershipInputObjectSchema = Schema
