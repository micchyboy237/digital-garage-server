import { z } from "zod"
import { VehicleTransferCreateManyInputObjectSchema } from "./objects/VehicleTransferCreateManyInput.schema"

export const VehicleTransferCreateManySchema = z.object({
  data: z.union([VehicleTransferCreateManyInputObjectSchema, z.array(VehicleTransferCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
