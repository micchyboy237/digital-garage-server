import { z } from "zod"
import { VehiclePostUpdateWithoutFilesInputObjectSchema } from "./VehiclePostUpdateWithoutFilesInput.schema"
import { VehiclePostUncheckedUpdateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutFilesInput.schema"
import { VehiclePostCreateWithoutFilesInputObjectSchema } from "./VehiclePostCreateWithoutFilesInput.schema"
import { VehiclePostUncheckedCreateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpsertWithoutFilesInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehiclePostUpdateWithoutFilesInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutFilesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutFilesInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutFilesInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpsertWithoutFilesInputObjectSchema = Schema
