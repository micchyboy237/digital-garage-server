import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateInputObjectSchema } from "./objects/VehiclePostCreateInput.schema"
import { VehiclePostUncheckedCreateInputObjectSchema } from "./objects/VehiclePostUncheckedCreateInput.schema"
import { VehiclePostUpdateInputObjectSchema } from "./objects/VehiclePostUpdateInput.schema"
import { VehiclePostUncheckedUpdateInputObjectSchema } from "./objects/VehiclePostUncheckedUpdateInput.schema"

export const VehiclePostUpsertSchema = z.object({
  where: VehiclePostWhereUniqueInputObjectSchema,
  create: z.union([VehiclePostCreateInputObjectSchema, VehiclePostUncheckedCreateInputObjectSchema]),
  update: z.union([VehiclePostUpdateInputObjectSchema, VehiclePostUncheckedUpdateInputObjectSchema]),
})
