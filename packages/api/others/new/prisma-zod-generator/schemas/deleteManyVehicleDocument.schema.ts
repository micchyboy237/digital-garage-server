import { z } from "zod"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"

export const VehicleDocumentDeleteManySchema = z.object({ where: VehicleDocumentWhereInputObjectSchema.optional() })
