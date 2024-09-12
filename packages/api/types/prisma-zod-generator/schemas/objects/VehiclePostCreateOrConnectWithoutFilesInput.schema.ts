import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateWithoutFilesInputObjectSchema } from "./VehiclePostCreateWithoutFilesInput.schema"
import { VehiclePostUncheckedCreateWithoutFilesInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateOrConnectWithoutFilesInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutFilesInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutFilesInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostCreateOrConnectWithoutFilesInputObjectSchema = Schema
