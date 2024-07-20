import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutVehicleInputObjectSchema } from "./DocumentUpdateWithoutVehicleInput.schema"
import { DocumentUncheckedUpdateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedUpdateWithoutVehicleInput.schema"
import { DocumentCreateWithoutVehicleInputObjectSchema } from "./DocumentCreateWithoutVehicleInput.schema"
import { DocumentUncheckedCreateWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DocumentUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpsertWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
