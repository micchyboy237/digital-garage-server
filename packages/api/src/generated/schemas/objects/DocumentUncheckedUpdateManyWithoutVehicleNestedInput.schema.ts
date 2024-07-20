import { z } from "zod"
import { DocumentCreateWithoutVehicleInputObjectSchema } from "./DocumentCreateWithoutVehicleInput.schema"
import { DocumentUncheckedCreateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleInput.schema"
import { DocumentCreateOrConnectWithoutVehicleInputObjectSchema } from "./DocumentCreateOrConnectWithoutVehicleInput.schema"
import { DocumentUpsertWithWhereUniqueWithoutVehicleInputObjectSchema } from "./DocumentUpsertWithWhereUniqueWithoutVehicleInput.schema"
import { DocumentCreateManyVehicleInputEnvelopeObjectSchema } from "./DocumentCreateManyVehicleInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithWhereUniqueWithoutVehicleInputObjectSchema } from "./DocumentUpdateWithWhereUniqueWithoutVehicleInput.schema"
import { DocumentUpdateManyWithWhereWithoutVehicleInputObjectSchema } from "./DocumentUpdateManyWithWhereWithoutVehicleInput.schema"
import { DocumentScalarWhereInputObjectSchema } from "./DocumentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutVehicleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DocumentCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentCreateWithoutVehicleInputObjectSchema).array(),
        z.lazy(() => DocumentUncheckedCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DocumentCreateOrConnectWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentCreateOrConnectWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => DocumentCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DocumentUpdateManyWithWhereWithoutVehicleInputObjectSchema),
        z.lazy(() => DocumentUpdateManyWithWhereWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema = Schema
