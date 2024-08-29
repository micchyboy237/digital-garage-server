import { z } from "zod"
import { VehicleDocumentCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutOwnershipInput.schema"
import { VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutOwnershipInput.schema"
import { VehicleDocumentCreateManyOwnershipInputEnvelopeObjectSchema } from "./VehicleDocumentCreateManyOwnershipInputEnvelope.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateNestedManyWithoutOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleDocumentCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleDocumentCreateNestedManyWithoutOwnershipInputObjectSchema = Schema
