import { z } from "zod"
import { VehicleDetailsCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutOwnershipInput.schema"
import { VehicleDetailsCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateOrConnectWithoutOwnershipInput.schema"
import { VehicleDetailsUpsertWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUpsertWithoutOwnershipInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUpdateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedUpdateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDetailsCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDetailsCreateOrConnectWithoutOwnershipInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleDetailsUpsertWithoutOwnershipInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleDetailsUpdateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedUpdateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema = Schema
