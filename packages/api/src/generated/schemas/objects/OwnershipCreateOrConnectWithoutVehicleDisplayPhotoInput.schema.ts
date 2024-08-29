import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema = Schema
