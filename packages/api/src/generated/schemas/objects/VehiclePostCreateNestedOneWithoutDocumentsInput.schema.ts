import { z } from "zod"
import { VehiclePostCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutDocumentsInput.schema"
import { VehiclePostCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutDocumentsInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
