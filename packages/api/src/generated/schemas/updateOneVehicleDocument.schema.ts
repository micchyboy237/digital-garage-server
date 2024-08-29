import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./objects/VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./objects/VehicleDocumentInclude.schema"
import { VehicleDocumentUpdateInputObjectSchema } from "./objects/VehicleDocumentUpdateInput.schema"
import { VehicleDocumentUncheckedUpdateInputObjectSchema } from "./objects/VehicleDocumentUncheckedUpdateInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"

export const VehicleDocumentUpdateOneSchema = z.object({
  select: VehicleDocumentSelectObjectSchema.optional(),
  include: VehicleDocumentIncludeObjectSchema.optional(),
  data: z.union([VehicleDocumentUpdateInputObjectSchema, VehicleDocumentUncheckedUpdateInputObjectSchema]),
  where: VehicleDocumentWhereUniqueInputObjectSchema,
})
