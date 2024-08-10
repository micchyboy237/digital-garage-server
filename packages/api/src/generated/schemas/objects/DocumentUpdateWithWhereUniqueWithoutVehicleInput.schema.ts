import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutVehicleInputObjectSchema } from "./DocumentUpdateWithoutVehicleInput.schema"
import { DocumentUncheckedUpdateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DocumentUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpdateWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
