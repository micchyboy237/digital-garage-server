import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUpdateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutOwnershipInput.schema"
import { VehicleDocumentCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleDocumentUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
