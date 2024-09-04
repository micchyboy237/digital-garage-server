import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"

export const VehicleDocumentDeleteOneSchema = z.object({ where: VehicleDocumentWhereUniqueInputObjectSchema })
