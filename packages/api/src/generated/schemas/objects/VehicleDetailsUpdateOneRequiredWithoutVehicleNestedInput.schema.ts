import { z } from "zod"
import { VehicleDetailsCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutVehicleInput.schema"
import { VehicleDetailsCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateOrConnectWithoutVehicleInput.schema"
import { VehicleDetailsUpsertWithoutVehicleInputObjectSchema } from "./VehicleDetailsUpsertWithoutVehicleInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsUpdateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUpdateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUpdateOneRequiredWithoutVehicleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDetailsCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDetailsCreateOrConnectWithoutVehicleInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleDetailsUpsertWithoutVehicleInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleDetailsUpdateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedUpdateWithoutVehicleInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleDetailsUpdateOneRequiredWithoutVehicleNestedInputObjectSchema = Schema
