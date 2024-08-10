import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipHistoryInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutOwnershipHistoryInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnershipHistoryInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutOwnershipHistoryInputObjectSchema = Schema
