import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"

export const VehicleTransferFindUniqueSchema = z.object({ where: VehicleTransferWhereUniqueInputObjectSchema })
