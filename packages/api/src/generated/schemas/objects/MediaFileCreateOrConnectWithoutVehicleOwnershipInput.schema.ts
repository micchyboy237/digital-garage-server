import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutVehicleOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutVehicleOwnershipInputObjectSchema = Schema
