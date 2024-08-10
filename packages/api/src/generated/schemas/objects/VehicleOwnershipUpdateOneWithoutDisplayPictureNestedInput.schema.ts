import { z } from "zod"
import { VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUpsertWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUpsertWithoutDisplayPictureInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUpdateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutDisplayPictureNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutDisplayPictureInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutDisplayPictureInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutDisplayPictureNestedInputObjectSchema = Schema
