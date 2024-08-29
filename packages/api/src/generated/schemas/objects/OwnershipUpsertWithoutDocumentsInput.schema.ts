import { z } from "zod"
import { OwnershipUpdateWithoutDocumentsInputObjectSchema } from "./OwnershipUpdateWithoutDocumentsInput.schema"
import { OwnershipUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutDocumentsInput.schema"
import { OwnershipCreateWithoutDocumentsInputObjectSchema } from "./OwnershipCreateWithoutDocumentsInput.schema"
import { OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OwnershipUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpsertWithoutDocumentsInputObjectSchema = Schema
