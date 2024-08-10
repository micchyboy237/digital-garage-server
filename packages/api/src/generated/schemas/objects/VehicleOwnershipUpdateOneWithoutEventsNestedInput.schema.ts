import { z } from "zod"
import { VehicleOwnershipCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutEventsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutEventsInput.schema"
import { VehicleOwnershipUpsertWithoutEventsInputObjectSchema } from "./VehicleOwnershipUpsertWithoutEventsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutEventsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutEventsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutEventsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutEventsNestedInputObjectSchema = Schema
