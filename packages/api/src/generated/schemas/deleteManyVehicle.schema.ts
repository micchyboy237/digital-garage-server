import { z } from "zod"
import { VehicleWhereInputObjectSchema } from "./objects/VehicleWhereInput.schema"

export const VehicleDeleteManySchema = z.object({ where: VehicleWhereInputObjectSchema.optional() })
