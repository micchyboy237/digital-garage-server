import { z } from "zod"
import { DocumentCreateWithoutVehicleInputObjectSchema } from "./DocumentCreateWithoutVehicleInput.schema"
import { DocumentUncheckedCreateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleInput.schema"
import { DocumentCreateOrConnectWithoutVehicleInputObjectSchema } from "./DocumentCreateOrConnectWithoutVehicleInput.schema"
import { DocumentCreateManyVehicleInputEnvelopeObjectSchema } from "./DocumentCreateManyVehicleInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutVehicleInput> = z
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
    createMany: z.lazy(() => DocumentCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedCreateNestedManyWithoutVehicleInputObjectSchema = Schema
