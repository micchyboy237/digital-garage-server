import { z } from "zod"
import { OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUpsertWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUpdateWithoutVehicleDisplayPhotoInput.schema"
import { OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    upsert: z.lazy(() => OwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => OwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema = Schema
