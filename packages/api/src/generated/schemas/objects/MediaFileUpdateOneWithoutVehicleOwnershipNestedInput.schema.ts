import { z } from "zod"
import { MediaFileCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleOwnershipInput.schema"
import { MediaFileUpsertWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUpsertWithoutVehicleOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneWithoutVehicleOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleOwnershipInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutVehicleOwnershipInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneWithoutVehicleOwnershipNestedInputObjectSchema = Schema
