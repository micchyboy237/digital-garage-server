import { z } from "zod"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"

export const VehiclePostDeleteManySchema = z.object({ where: VehiclePostWhereInputObjectSchema.optional() })
