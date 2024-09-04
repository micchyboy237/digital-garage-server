import { z } from "zod"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"

export const VehicleDetailsFindUniqueSchema = z.object({ where: VehicleDetailsWhereUniqueInputObjectSchema })
