import { z } from "zod"
import { VehiclePostCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutDocumentsInput.schema"
import { VehiclePostCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutDocumentsInput.schema"
import { VehiclePostUpsertWithoutDocumentsInputObjectSchema } from "./VehiclePostUpsertWithoutDocumentsInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutDocumentsInputObjectSchema } from "./VehiclePostUpdateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateOneWithoutDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehiclePostUpsertWithoutDocumentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehiclePostUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostUpdateOneWithoutDocumentsNestedInputObjectSchema = Schema
