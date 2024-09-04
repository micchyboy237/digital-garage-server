import { z } from "zod"
import { VehiclePostUpdateWithoutDocumentsInputObjectSchema } from "./VehiclePostUpdateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutDocumentsInput.schema"
import { VehiclePostCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehiclePostUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpsertWithoutDocumentsInputObjectSchema = Schema
