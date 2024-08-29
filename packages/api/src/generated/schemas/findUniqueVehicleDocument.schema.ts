import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./objects/VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./objects/VehicleDocumentInclude.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"

export const VehicleDocumentFindUniqueSchema = z.object({
  select: VehicleDocumentSelectObjectSchema.optional(),
  include: VehicleDocumentIncludeObjectSchema.optional(),
  where: VehicleDocumentWhereUniqueInputObjectSchema,
})
