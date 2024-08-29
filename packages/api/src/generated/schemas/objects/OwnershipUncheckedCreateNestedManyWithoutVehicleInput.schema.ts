import { z } from "zod"
import { OwnershipCreateWithoutVehicleInputObjectSchema } from "./OwnershipCreateWithoutVehicleInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleInput.schema"
import { OwnershipCreateOrConnectWithoutVehicleInputObjectSchema } from "./OwnershipCreateOrConnectWithoutVehicleInput.schema"
import { OwnershipCreateManyVehicleInputEnvelopeObjectSchema } from "./OwnershipCreateManyVehicleInputEnvelope.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedCreateNestedManyWithoutVehicleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipCreateWithoutVehicleInputObjectSchema).array(),
        z.lazy(() => OwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OwnershipCreateOrConnectWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipCreateOrConnectWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => OwnershipCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const OwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema = Schema
