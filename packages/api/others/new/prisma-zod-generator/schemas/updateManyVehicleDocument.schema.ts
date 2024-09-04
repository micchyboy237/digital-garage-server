import { z } from "zod"
import { VehicleDocumentUpdateManyMutationInputObjectSchema } from "./objects/VehicleDocumentUpdateManyMutationInput.schema"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"

export const VehicleDocumentUpdateManySchema = z.object({
  data: VehicleDocumentUpdateManyMutationInputObjectSchema,
  where: VehicleDocumentWhereInputObjectSchema.optional(),
})
