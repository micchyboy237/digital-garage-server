import { z } from "zod"
import { VehicleEventCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutDocumentsInput.schema"
import { VehicleEventCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutDocumentsInput.schema"
import { VehicleEventUpsertWithoutDocumentsInputObjectSchema } from "./VehicleEventUpsertWithoutDocumentsInput.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutDocumentsInputObjectSchema } from "./VehicleEventUpdateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateOneWithoutDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleEventCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleEventUpsertWithoutDocumentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleEventUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleEventUpdateOneWithoutDocumentsNestedInputObjectSchema = Schema
