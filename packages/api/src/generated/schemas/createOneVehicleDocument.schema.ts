import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./objects/VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./objects/VehicleDocumentInclude.schema"
import { VehicleDocumentCreateInputObjectSchema } from "./objects/VehicleDocumentCreateInput.schema"
import { VehicleDocumentUncheckedCreateInputObjectSchema } from "./objects/VehicleDocumentUncheckedCreateInput.schema"

export const VehicleDocumentCreateOneSchema = z.object({
  select: VehicleDocumentSelectObjectSchema.optional(),
  include: VehicleDocumentIncludeObjectSchema.optional(),
  data: z.union([VehicleDocumentCreateInputObjectSchema, VehicleDocumentUncheckedCreateInputObjectSchema]),
})
