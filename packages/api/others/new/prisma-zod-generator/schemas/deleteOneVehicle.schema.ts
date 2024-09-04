import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"

export const VehicleDeleteOneSchema = z.object({ where: VehicleWhereUniqueInputObjectSchema })
