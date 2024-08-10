import { z } from "zod"
import { VehicleOwnershipCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutUserInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutUserInput.schema"
import { VehicleOwnershipCreateManyUserInputEnvelopeObjectSchema } from "./VehicleOwnershipCreateManyUserInputEnvelope.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleOwnershipCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema
