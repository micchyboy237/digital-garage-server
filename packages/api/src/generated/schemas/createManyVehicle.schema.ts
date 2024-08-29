import { z } from "zod"
import { VehicleCreateManyInputObjectSchema } from "./objects/VehicleCreateManyInput.schema"

export const VehicleCreateManySchema = z.object({
  data: z.union([VehicleCreateManyInputObjectSchema, z.array(VehicleCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
