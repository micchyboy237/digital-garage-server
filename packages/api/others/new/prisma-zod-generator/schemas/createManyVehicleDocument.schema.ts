import { z } from "zod"
import { VehicleDocumentCreateManyInputObjectSchema } from "./objects/VehicleDocumentCreateManyInput.schema"

export const VehicleDocumentCreateManySchema = z.object({
  data: z.union([VehicleDocumentCreateManyInputObjectSchema, z.array(VehicleDocumentCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
