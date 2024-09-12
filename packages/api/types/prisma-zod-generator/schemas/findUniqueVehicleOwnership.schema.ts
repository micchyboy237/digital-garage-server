import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"

export const VehicleOwnershipFindUniqueSchema = z.object({ where: VehicleOwnershipWhereUniqueInputObjectSchema })
