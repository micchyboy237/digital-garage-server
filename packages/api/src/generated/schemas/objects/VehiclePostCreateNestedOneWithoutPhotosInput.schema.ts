import { z } from "zod"
import { VehiclePostCreateWithoutPhotosInputObjectSchema } from "./VehiclePostCreateWithoutPhotosInput.schema"
import { VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutPhotosInput.schema"
import { VehiclePostCreateOrConnectWithoutPhotosInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutPhotosInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateNestedOneWithoutPhotosInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutPhotosInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutPhotosInputObjectSchema).optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema = Schema
