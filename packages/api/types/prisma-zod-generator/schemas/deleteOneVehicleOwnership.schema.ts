import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"

export const VehicleOwnershipDeleteOneSchema = z.object({ where: VehicleOwnershipWhereUniqueInputObjectSchema })
