import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutDisplayPictureInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutDisplayPictureInputObjectSchema = Schema
