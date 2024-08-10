import { z } from "zod"
import { MediaFileCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateNestedOneWithoutVehicleOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleOwnershipInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUncheckedCreateNestedOneWithoutVehicleOwnershipInputObjectSchema = Schema
