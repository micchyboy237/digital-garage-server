import { z } from "zod"
import { VehiclePostCreateWithoutPhotosInputObjectSchema } from "./VehiclePostCreateWithoutPhotosInput.schema"
import { VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutPhotosInput.schema"
import { VehiclePostCreateOrConnectWithoutPhotosInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutPhotosInput.schema"
import { VehiclePostUpsertWithoutPhotosInputObjectSchema } from "./VehiclePostUpsertWithoutPhotosInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutPhotosInputObjectSchema } from "./VehiclePostUpdateWithoutPhotosInput.schema"
import { VehiclePostUncheckedUpdateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateOneWithoutPhotosNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutPhotosInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutPhotosInputObjectSchema).optional(),
    upsert: z.lazy(() => VehiclePostUpsertWithoutPhotosInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehiclePostUpdateWithoutPhotosInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedUpdateWithoutPhotosInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostUpdateOneWithoutPhotosNestedInputObjectSchema = Schema
