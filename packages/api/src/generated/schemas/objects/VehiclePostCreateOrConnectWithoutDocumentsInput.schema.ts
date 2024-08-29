import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateWithoutDocumentsInput.schema"
import { VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
