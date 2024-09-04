import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateWithoutPhotosInputObjectSchema } from "./VehiclePostCreateWithoutPhotosInput.schema"
import { VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateOrConnectWithoutPhotosInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutPhotosInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostCreateOrConnectWithoutPhotosInputObjectSchema = Schema
