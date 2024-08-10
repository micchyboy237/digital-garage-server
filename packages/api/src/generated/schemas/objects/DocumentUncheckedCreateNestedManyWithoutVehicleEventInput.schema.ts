import { z } from "zod"
import { DocumentCreateWithoutVehicleEventInputObjectSchema } from "./DocumentCreateWithoutVehicleEventInput.schema"
import { DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleEventInput.schema"
import { DocumentCreateOrConnectWithoutVehicleEventInputObjectSchema } from "./DocumentCreateOrConnectWithoutVehicleEventInput.schema"
import { DocumentCreateManyVehicleEventInputEnvelopeObjectSchema } from "./DocumentCreateManyVehicleEventInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutVehicleEventInput> = z
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
    createMany: z.lazy(() => DocumentCreateManyVehicleEventInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedCreateNestedManyWithoutVehicleEventInputObjectSchema = Schema
