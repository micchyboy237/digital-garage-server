import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUpdateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleDocumentUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
