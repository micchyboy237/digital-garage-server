import { z } from "zod"
import { VehicleCreateWithoutOwnerInputObjectSchema } from "./VehicleCreateWithoutOwnerInput.schema"
import { VehicleUncheckedCreateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnerInput.schema"
import { VehicleCreateOrConnectWithoutOwnerInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnerInput.schema"
import { VehicleCreateManyOwnerInputEnvelopeObjectSchema } from "./VehicleCreateManyOwnerInputEnvelope.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateNestedManyWithoutOwnerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleCreateOrConnectWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleCreateOrConnectWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleCreateManyOwnerInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const VehicleUncheckedCreateNestedManyWithoutOwnerInputObjectSchema = Schema
