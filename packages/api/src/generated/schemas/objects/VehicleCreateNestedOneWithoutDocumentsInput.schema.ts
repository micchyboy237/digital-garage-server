import { z } from "zod"
import { VehicleCreateWithoutDocumentsInputObjectSchema } from "./VehicleCreateWithoutDocumentsInput.schema"
import { VehicleUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDocumentsInput.schema"
import { VehicleCreateOrConnectWithoutDocumentsInputObjectSchema } from "./VehicleCreateOrConnectWithoutDocumentsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
