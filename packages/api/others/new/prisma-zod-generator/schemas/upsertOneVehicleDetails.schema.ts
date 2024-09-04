import { z } from "zod"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsCreateInputObjectSchema } from "./objects/VehicleDetailsCreateInput.schema"
import { VehicleDetailsUncheckedCreateInputObjectSchema } from "./objects/VehicleDetailsUncheckedCreateInput.schema"
import { VehicleDetailsUpdateInputObjectSchema } from "./objects/VehicleDetailsUpdateInput.schema"
import { VehicleDetailsUncheckedUpdateInputObjectSchema } from "./objects/VehicleDetailsUncheckedUpdateInput.schema"

export const VehicleDetailsUpsertSchema = z.object({
  where: VehicleDetailsWhereUniqueInputObjectSchema,
  create: z.union([VehicleDetailsCreateInputObjectSchema, VehicleDetailsUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleDetailsUpdateInputObjectSchema, VehicleDetailsUncheckedUpdateInputObjectSchema]),
})
