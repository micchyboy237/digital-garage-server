import { z } from "zod"
import { VehicleDetailsCreateManyInputObjectSchema } from "./objects/VehicleDetailsCreateManyInput.schema"

export const VehicleDetailsCreateManySchema = z.object({
  data: z.union([VehicleDetailsCreateManyInputObjectSchema, z.array(VehicleDetailsCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
