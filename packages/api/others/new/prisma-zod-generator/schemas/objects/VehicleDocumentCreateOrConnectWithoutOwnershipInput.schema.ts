import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateOrConnectWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema = Schema
