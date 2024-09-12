import { z } from "zod"
import { VehiclePostCreateWithoutFilesInputObjectSchema } from "./VehiclePostCreateWithoutFilesInput.schema"
import { VehiclePostUncheckedCreateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutFilesInput.schema"
import { VehiclePostCreateOrConnectWithoutFilesInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutFilesInput.schema"
import { VehiclePostUpsertWithoutFilesInputObjectSchema } from "./VehiclePostUpsertWithoutFilesInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutFilesInputObjectSchema } from "./VehiclePostUpdateWithoutFilesInput.schema"
import { VehiclePostUncheckedUpdateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateOneWithoutFilesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutFilesInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehiclePostCreateOrConnectWithoutFilesInputObjectSchema).optional(),
    upsert: z.lazy(() => VehiclePostUpsertWithoutFilesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehiclePostUpdateWithoutFilesInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedUpdateWithoutFilesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostUpdateOneWithoutFilesNestedInputObjectSchema = Schema
