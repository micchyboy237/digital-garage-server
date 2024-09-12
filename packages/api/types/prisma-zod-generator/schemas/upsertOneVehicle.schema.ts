import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"
import { VehicleCreateInputObjectSchema } from "./objects/VehicleCreateInput.schema"
import { VehicleUncheckedCreateInputObjectSchema } from "./objects/VehicleUncheckedCreateInput.schema"
import { VehicleUpdateInputObjectSchema } from "./objects/VehicleUpdateInput.schema"
import { VehicleUncheckedUpdateInputObjectSchema } from "./objects/VehicleUncheckedUpdateInput.schema"

export const VehicleUpsertSchema = z.object({
  where: VehicleWhereUniqueInputObjectSchema,
  create: z.union([VehicleCreateInputObjectSchema, VehicleUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleUpdateInputObjectSchema, VehicleUncheckedUpdateInputObjectSchema]),
})
