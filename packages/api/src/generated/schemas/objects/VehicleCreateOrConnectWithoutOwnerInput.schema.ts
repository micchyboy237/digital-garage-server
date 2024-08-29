import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutOwnerInputObjectSchema } from "./VehicleCreateWithoutOwnerInput.schema"
import { VehicleUncheckedCreateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnerInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutOwnerInputObjectSchema = Schema
