import { z } from "zod"
import { VehicleCreateWithoutDocumentsInputObjectSchema } from "./VehicleCreateWithoutDocumentsInput.schema"
import { VehicleUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDocumentsInput.schema"
import { VehicleCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehicleCreateOrConnectWithoutDocumentsInput.schema"
import { VehicleUpsertWithoutDocumentsInputObjectSchema } from "./VehicleUpsertWithoutDocumentsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutDocumentsInputObjectSchema } from "./VehicleUpdateWithoutDocumentsInput.schema"
import { VehicleUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneRequiredWithoutDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema = Schema
