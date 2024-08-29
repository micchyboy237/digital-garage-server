import { z } from "zod"
import { OwnershipUpdateWithoutPostsInputObjectSchema } from "./OwnershipUpdateWithoutPostsInput.schema"
import { OwnershipUncheckedUpdateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutPostsInput.schema"
import { OwnershipCreateWithoutPostsInputObjectSchema } from "./OwnershipCreateWithoutPostsInput.schema"
import { OwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OwnershipUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutPostsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpsertWithoutPostsInputObjectSchema = Schema
