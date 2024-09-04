import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"

export const VehicleFindUniqueSchema = z.object({ where: VehicleWhereUniqueInputObjectSchema })
