import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentCreateWithoutVehicleInputObjectSchema } from "./DocumentCreateWithoutVehicleInput.schema"
import { DocumentUncheckedCreateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutVehicleInputObjectSchema = Schema
