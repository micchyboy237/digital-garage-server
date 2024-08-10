import { z } from "zod"
import { VehicleUpdateWithoutDocumentsInputObjectSchema } from "./VehicleUpdateWithoutDocumentsInput.schema"
import { VehicleUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutDocumentsInput.schema"
import { VehicleCreateWithoutDocumentsInputObjectSchema } from "./VehicleCreateWithoutDocumentsInput.schema"
import { VehicleUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutDocumentsInputObjectSchema = Schema
