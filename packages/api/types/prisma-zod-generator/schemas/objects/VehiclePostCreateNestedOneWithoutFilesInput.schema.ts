import { z } from "zod"
import { VehiclePostCreateWithoutFilesInputObjectSchema } from "./VehiclePostCreateWithoutFilesInput.schema"
import { VehiclePostUncheckedCreateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutFilesInput.schema"
import { VehiclePostCreateOrConnectWithoutFilesInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutFilesInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateNestedOneWithoutFilesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutFilesInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutFilesInputObjectSchema).optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateNestedOneWithoutFilesInputObjectSchema = Schema
