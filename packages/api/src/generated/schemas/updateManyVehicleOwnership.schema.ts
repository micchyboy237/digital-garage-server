import { z } from "zod"
import { VehicleOwnershipUpdateManyMutationInputObjectSchema } from "./objects/VehicleOwnershipUpdateManyMutationInput.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./objects/VehicleOwnershipWhereInput.schema"

export const VehicleOwnershipUpdateManySchema = z.object({
  data: VehicleOwnershipUpdateManyMutationInputObjectSchema,
  where: VehicleOwnershipWhereInputObjectSchema.optional(),
})
