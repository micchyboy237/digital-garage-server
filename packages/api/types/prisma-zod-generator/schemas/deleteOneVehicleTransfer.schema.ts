import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"

export const VehicleTransferDeleteOneSchema = z.object({ where: VehicleTransferWhereUniqueInputObjectSchema })
