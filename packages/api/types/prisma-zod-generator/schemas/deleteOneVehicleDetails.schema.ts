import { z } from "zod"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"

export const VehicleDetailsDeleteOneSchema = z.object({ where: VehicleDetailsWhereUniqueInputObjectSchema })
