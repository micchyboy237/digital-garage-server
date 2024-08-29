import { z } from "zod"
import { VehiclePostCreateManyInputObjectSchema } from "./objects/VehiclePostCreateManyInput.schema"

export const VehiclePostCreateManySchema = z.object({
  data: z.union([VehiclePostCreateManyInputObjectSchema, z.array(VehiclePostCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
