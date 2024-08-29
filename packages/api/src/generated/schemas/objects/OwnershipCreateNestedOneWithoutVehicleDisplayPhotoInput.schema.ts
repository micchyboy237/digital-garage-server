import { z } from "zod"
import { OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema = Schema
