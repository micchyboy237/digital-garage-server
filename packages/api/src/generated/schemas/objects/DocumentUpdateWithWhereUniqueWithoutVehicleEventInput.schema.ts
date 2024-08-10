import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutVehicleEventInputObjectSchema } from "./DocumentUpdateWithoutVehicleEventInput.schema"
import { DocumentUncheckedUpdateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedUpdateWithoutVehicleEventInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutVehicleEventInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DocumentUpdateWithoutVehicleEventInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutVehicleEventInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpdateWithWhereUniqueWithoutVehicleEventInputObjectSchema = Schema
