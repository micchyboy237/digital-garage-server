import { z } from "zod"
import { VehicleCreateWithoutOwnerInputObjectSchema } from "./VehicleCreateWithoutOwnerInput.schema"
import { VehicleUncheckedCreateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnerInput.schema"
import { VehicleCreateOrConnectWithoutOwnerInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnerInput.schema"
import { VehicleUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from "./VehicleUpsertWithWhereUniqueWithoutOwnerInput.schema"
import { VehicleCreateManyOwnerInputEnvelopeObjectSchema } from "./VehicleCreateManyOwnerInputEnvelope.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from "./VehicleUpdateWithWhereUniqueWithoutOwnerInput.schema"
import { VehicleUpdateManyWithWhereWithoutOwnerInputObjectSchema } from "./VehicleUpdateManyWithWhereWithoutOwnerInput.schema"
import { VehicleScalarWhereInputObjectSchema } from "./VehicleScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateManyWithoutOwnerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => VehicleUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleCreateManyOwnerInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z.lazy(() => VehicleUpdateManyWithWhereWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const VehicleUpdateManyWithoutOwnerNestedInputObjectSchema = Schema
