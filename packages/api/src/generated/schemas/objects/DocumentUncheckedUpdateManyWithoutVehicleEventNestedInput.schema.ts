import { z } from "zod"
import { DocumentCreateWithoutVehicleEventInputObjectSchema } from "./DocumentCreateWithoutVehicleEventInput.schema"
import { DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleEventInput.schema"
import { DocumentCreateOrConnectWithoutVehicleEventInputObjectSchema } from "./DocumentCreateOrConnectWithoutVehicleEventInput.schema"
import { DocumentUpsertWithWhereUniqueWithoutVehicleEventInputObjectSchema } from "./DocumentUpsertWithWhereUniqueWithoutVehicleEventInput.schema"
import { DocumentCreateManyVehicleEventInputEnvelopeObjectSchema } from "./DocumentCreateManyVehicleEventInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithWhereUniqueWithoutVehicleEventInputObjectSchema } from "./DocumentUpdateWithWhereUniqueWithoutVehicleEventInput.schema"
import { DocumentUpdateManyWithWhereWithoutVehicleEventInputObjectSchema } from "./DocumentUpdateManyWithWhereWithoutVehicleEventInput.schema"
import { DocumentScalarWhereInputObjectSchema } from "./DocumentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutVehicleEventNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DocumentCreateWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentCreateWithoutVehicleEventInputObjectSchema).array(),
        z.lazy(() => DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DocumentCreateOrConnectWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentCreateOrConnectWithoutVehicleEventInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutVehicleEventInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => DocumentCreateManyVehicleEventInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutVehicleEventInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DocumentUpdateManyWithWhereWithoutVehicleEventInputObjectSchema),
        z.lazy(() => DocumentUpdateManyWithWhereWithoutVehicleEventInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedUpdateManyWithoutVehicleEventNestedInputObjectSchema = Schema
