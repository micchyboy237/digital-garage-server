import { z } from "zod"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"

export const VehicleDetailsDeleteManySchema = z.object({ where: VehicleDetailsWhereInputObjectSchema.optional() })
