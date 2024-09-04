import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"

export const VehicleDocumentFindUniqueSchema = z.object({ where: VehicleDocumentWhereUniqueInputObjectSchema })
