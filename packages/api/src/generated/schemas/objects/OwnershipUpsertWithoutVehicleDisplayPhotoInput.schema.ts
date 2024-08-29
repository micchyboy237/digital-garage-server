import { z } from "zod"
import { OwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUpdateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpsertWithoutVehicleDisplayPhotoInput> = z
  .object({
    update: z.union([
      z.lazy(() => OwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema = Schema
