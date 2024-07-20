import { z } from "zod"
import { VehicleUpdateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUpdateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedUpdateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnershipHistoryInput.schema"
import { VehicleCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipHistoryInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutOwnershipHistoryInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutOwnershipHistoryInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutOwnershipHistoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnershipHistoryInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutOwnershipHistoryInputObjectSchema = Schema
