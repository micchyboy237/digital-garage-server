import { z } from "zod"
import { VehicleEventUpdateManyMutationInputObjectSchema } from "./objects/VehicleEventUpdateManyMutationInput.schema"
import { VehicleEventWhereInputObjectSchema } from "./objects/VehicleEventWhereInput.schema"

export const VehicleEventUpdateManySchema = z.object({
  data: VehicleEventUpdateManyMutationInputObjectSchema,
  where: VehicleEventWhereInputObjectSchema.optional(),
})
