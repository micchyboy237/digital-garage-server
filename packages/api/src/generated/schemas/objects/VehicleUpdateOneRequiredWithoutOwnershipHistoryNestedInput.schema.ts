import { z } from "zod"
import { VehicleCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipHistoryInput.schema"
import { VehicleCreateOrConnectWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnershipHistoryInput.schema"
import { VehicleUpsertWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUpsertWithoutOwnershipHistoryInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUpdateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedUpdateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnershipHistoryInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneRequiredWithoutOwnershipHistoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutOwnershipHistoryInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutOwnershipHistoryInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutOwnershipHistoryInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutOwnershipHistoryInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutOwnershipHistoryInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneRequiredWithoutOwnershipHistoryNestedInputObjectSchema = Schema
