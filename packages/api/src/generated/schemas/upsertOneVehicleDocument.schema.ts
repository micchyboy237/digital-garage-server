import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./objects/VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./objects/VehicleDocumentInclude.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentCreateInputObjectSchema } from "./objects/VehicleDocumentCreateInput.schema"
import { VehicleDocumentUncheckedCreateInputObjectSchema } from "./objects/VehicleDocumentUncheckedCreateInput.schema"
import { VehicleDocumentUpdateInputObjectSchema } from "./objects/VehicleDocumentUpdateInput.schema"
import { VehicleDocumentUncheckedUpdateInputObjectSchema } from "./objects/VehicleDocumentUncheckedUpdateInput.schema"

export const VehicleDocumentUpsertSchema = z.object({
  select: VehicleDocumentSelectObjectSchema.optional(),
  include: VehicleDocumentIncludeObjectSchema.optional(),
  where: VehicleDocumentWhereUniqueInputObjectSchema,
  create: z.union([VehicleDocumentCreateInputObjectSchema, VehicleDocumentUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleDocumentUpdateInputObjectSchema, VehicleDocumentUncheckedUpdateInputObjectSchema]),
})
