import { z } from "zod"
import { VehiclePostCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutOwnershipInput.schema"
import { VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutOwnershipInput.schema"
import { VehiclePostCreateManyOwnershipInputEnvelopeObjectSchema } from "./VehiclePostCreateManyOwnershipInputEnvelope.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateNestedManyWithoutOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehiclePostCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostCreateNestedManyWithoutOwnershipInputObjectSchema = Schema
