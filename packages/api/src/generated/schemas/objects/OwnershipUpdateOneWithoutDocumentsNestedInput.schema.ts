import { z } from "zod"
import { OwnershipCreateWithoutDocumentsInputObjectSchema } from "./OwnershipCreateWithoutDocumentsInput.schema"
import { OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutDocumentsInput.schema"
import { OwnershipCreateOrConnectWithoutDocumentsInputObjectSchema } from "./OwnershipCreateOrConnectWithoutDocumentsInput.schema"
import { OwnershipUpsertWithoutDocumentsInputObjectSchema } from "./OwnershipUpsertWithoutDocumentsInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutDocumentsInputObjectSchema } from "./OwnershipUpdateWithoutDocumentsInput.schema"
import { OwnershipUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateOneWithoutDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => OwnershipUpsertWithoutDocumentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OwnershipUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const OwnershipUpdateOneWithoutDocumentsNestedInputObjectSchema = Schema
