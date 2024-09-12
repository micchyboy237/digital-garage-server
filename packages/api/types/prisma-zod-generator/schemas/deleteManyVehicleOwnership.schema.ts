import { z } from "zod"
import { VehicleOwnershipWhereInputObjectSchema } from "./objects/VehicleOwnershipWhereInput.schema"

export const VehicleOwnershipDeleteManySchema = z.object({ where: VehicleOwnershipWhereInputObjectSchema.optional() })
