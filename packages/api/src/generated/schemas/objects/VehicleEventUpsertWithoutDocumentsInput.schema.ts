import { z } from "zod"
import { VehicleEventUpdateWithoutDocumentsInputObjectSchema } from "./VehicleEventUpdateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutDocumentsInput.schema"
import { VehicleEventCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleEventUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpsertWithoutDocumentsInputObjectSchema = Schema
