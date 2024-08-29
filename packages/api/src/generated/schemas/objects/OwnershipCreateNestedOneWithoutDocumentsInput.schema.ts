import { z } from "zod"
import { OwnershipCreateWithoutDocumentsInputObjectSchema } from "./OwnershipCreateWithoutDocumentsInput.schema"
import { OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutDocumentsInput.schema"
import { OwnershipCreateOrConnectWithoutDocumentsInputObjectSchema } from "./OwnershipCreateOrConnectWithoutDocumentsInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
