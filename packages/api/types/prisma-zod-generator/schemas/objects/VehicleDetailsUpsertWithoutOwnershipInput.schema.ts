import { z } from "zod"
import { VehicleDetailsUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUpdateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedUpdateWithoutOwnershipInput.schema"
import { VehicleDetailsCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUpsertWithoutOwnershipInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleDetailsUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleDetailsCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDetailsUpsertWithoutOwnershipInputObjectSchema = Schema
