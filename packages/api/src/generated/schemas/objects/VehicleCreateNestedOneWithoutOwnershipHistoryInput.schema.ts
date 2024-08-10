import { z } from "zod"
import { VehicleCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateWithoutOwnershipHistoryInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipHistoryInput.schema"
import { VehicleCreateOrConnectWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnershipHistoryInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutOwnershipHistoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutOwnershipHistoryInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutOwnershipHistoryInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutOwnershipHistoryInputObjectSchema = Schema
