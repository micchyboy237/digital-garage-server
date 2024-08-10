import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutDocumentsInputObjectSchema } from "./VehicleCreateWithoutDocumentsInput.schema"
import { VehicleUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
