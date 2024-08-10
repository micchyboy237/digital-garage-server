import { z } from "zod"
import { VehicleEventCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutDocumentsInput.schema"
import { VehicleEventCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutDocumentsInput.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleEventCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
