import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutVehicleEventInputObjectSchema } from "./DocumentUpdateWithoutVehicleEventInput.schema"
import { DocumentUncheckedUpdateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedUpdateWithoutVehicleEventInput.schema"
import { DocumentCreateWithoutVehicleEventInputObjectSchema } from "./DocumentCreateWithoutVehicleEventInput.schema"
import { DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleEventInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutVehicleEventInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DocumentUpdateWithoutVehicleEventInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutVehicleEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutVehicleEventInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpsertWithWhereUniqueWithoutVehicleEventInputObjectSchema = Schema
