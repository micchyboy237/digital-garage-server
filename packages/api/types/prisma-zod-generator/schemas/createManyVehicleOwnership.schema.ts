import { z } from "zod"
import { VehicleOwnershipCreateManyInputObjectSchema } from "./objects/VehicleOwnershipCreateManyInput.schema"

export const VehicleOwnershipCreateManySchema = z.object({
  data: z.union([VehicleOwnershipCreateManyInputObjectSchema, z.array(VehicleOwnershipCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
