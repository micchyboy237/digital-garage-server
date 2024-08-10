import { z } from "zod"
import { VehicleEventWhereInputObjectSchema } from "./objects/VehicleEventWhereInput.schema"

export const VehicleEventDeleteManySchema = z.object({ where: VehicleEventWhereInputObjectSchema.optional() })
