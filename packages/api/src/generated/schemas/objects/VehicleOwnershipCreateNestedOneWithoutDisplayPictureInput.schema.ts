import { z } from "zod"
import { VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutDisplayPictureInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutDisplayPictureInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutDisplayPictureInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutDisplayPictureInputObjectSchema = Schema
