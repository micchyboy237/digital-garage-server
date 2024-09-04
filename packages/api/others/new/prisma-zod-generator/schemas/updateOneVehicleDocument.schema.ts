import { z } from "zod"
import { VehicleDocumentUpdateInputObjectSchema } from "./objects/VehicleDocumentUpdateInput.schema"
import { VehicleDocumentUncheckedUpdateInputObjectSchema } from "./objects/VehicleDocumentUncheckedUpdateInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"

export const VehicleDocumentUpdateOneSchema = z.object({
  data: z.union([VehicleDocumentUpdateInputObjectSchema, VehicleDocumentUncheckedUpdateInputObjectSchema]),
  where: VehicleDocumentWhereUniqueInputObjectSchema,
})
