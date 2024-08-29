import { z } from "zod"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"

export const VehicleTransferDeleteManySchema = z.object({ where: VehicleTransferWhereInputObjectSchema.optional() })
