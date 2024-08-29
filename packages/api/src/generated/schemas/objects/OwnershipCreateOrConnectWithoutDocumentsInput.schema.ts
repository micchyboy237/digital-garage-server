import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipCreateWithoutDocumentsInputObjectSchema } from "./OwnershipCreateWithoutDocumentsInput.schema"
import { OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
