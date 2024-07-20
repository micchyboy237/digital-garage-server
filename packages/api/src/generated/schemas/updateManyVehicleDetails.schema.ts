import { z } from "zod"
import { VehicleDetailsUpdateManyMutationInputObjectSchema } from "./objects/VehicleDetailsUpdateManyMutationInput.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"

export const VehicleDetailsUpdateManySchema = z.object({
  data: VehicleDetailsUpdateManyMutationInputObjectSchema,
  where: VehicleDetailsWhereInputObjectSchema.optional(),
})
