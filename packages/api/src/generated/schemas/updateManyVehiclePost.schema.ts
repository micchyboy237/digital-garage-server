import { z } from "zod"
import { VehiclePostUpdateManyMutationInputObjectSchema } from "./objects/VehiclePostUpdateManyMutationInput.schema"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"

export const VehiclePostUpdateManySchema = z.object({
  data: VehiclePostUpdateManyMutationInputObjectSchema,
  where: VehiclePostWhereInputObjectSchema.optional(),
})
