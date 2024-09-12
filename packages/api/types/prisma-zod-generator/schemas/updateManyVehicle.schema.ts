import { z } from "zod"
import { VehicleUpdateManyMutationInputObjectSchema } from "./objects/VehicleUpdateManyMutationInput.schema"
import { VehicleWhereInputObjectSchema } from "./objects/VehicleWhereInput.schema"

export const VehicleUpdateManySchema = z.object({
  data: VehicleUpdateManyMutationInputObjectSchema,
  where: VehicleWhereInputObjectSchema.optional(),
})
