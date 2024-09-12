import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"

export const VehiclePostDeleteOneSchema = z.object({ where: VehiclePostWhereUniqueInputObjectSchema })
