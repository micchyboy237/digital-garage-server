import { z } from "zod"
import { VehicleDocumentCreateInputObjectSchema } from "./objects/VehicleDocumentCreateInput.schema"
import { VehicleDocumentUncheckedCreateInputObjectSchema } from "./objects/VehicleDocumentUncheckedCreateInput.schema"

export const VehicleDocumentCreateOneSchema = z.object({
  data: z.union([VehicleDocumentCreateInputObjectSchema, VehicleDocumentUncheckedCreateInputObjectSchema]),
})
