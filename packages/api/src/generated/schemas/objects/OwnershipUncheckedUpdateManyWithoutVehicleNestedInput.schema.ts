import { z } from "zod"
import { OwnershipCreateWithoutVehicleInputObjectSchema } from "./OwnershipCreateWithoutVehicleInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleInput.schema"
import { OwnershipCreateOrConnectWithoutVehicleInputObjectSchema } from "./OwnershipCreateOrConnectWithoutVehicleInput.schema"
import { OwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema } from "./OwnershipUpsertWithWhereUniqueWithoutVehicleInput.schema"
import { OwnershipCreateManyVehicleInputEnvelopeObjectSchema } from "./OwnershipCreateManyVehicleInputEnvelope.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema } from "./OwnershipUpdateWithWhereUniqueWithoutVehicleInput.schema"
import { OwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema } from "./OwnershipUpdateManyWithWhereWithoutVehicleInput.schema"
import { OwnershipScalarWhereInputObjectSchema } from "./OwnershipScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedUpdateManyWithoutVehicleNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => OwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => OwnershipCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => OwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema),
        z.lazy(() => OwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => OwnershipScalarWhereInputObjectSchema), z.lazy(() => OwnershipScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const OwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema = Schema
