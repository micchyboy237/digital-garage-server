import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"

export const VehiclePostFindUniqueSchema = z.object({ where: VehiclePostWhereUniqueInputObjectSchema })
