import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateWithoutDocumentsInput.schema"
import { VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
