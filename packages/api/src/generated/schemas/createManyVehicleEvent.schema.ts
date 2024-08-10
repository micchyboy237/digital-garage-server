import { z } from "zod"
import { VehicleEventCreateManyInputObjectSchema } from "./objects/VehicleEventCreateManyInput.schema"

export const VehicleEventCreateManySchema = z.object({
  data: z.union([VehicleEventCreateManyInputObjectSchema, z.array(VehicleEventCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
