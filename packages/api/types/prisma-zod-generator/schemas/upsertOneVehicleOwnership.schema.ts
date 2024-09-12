import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateInputObjectSchema } from "./objects/VehicleOwnershipCreateInput.schema"
import { VehicleOwnershipUncheckedCreateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedCreateInput.schema"
import { VehicleOwnershipUpdateInputObjectSchema } from "./objects/VehicleOwnershipUpdateInput.schema"
import { VehicleOwnershipUncheckedUpdateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedUpdateInput.schema"

export const VehicleOwnershipUpsertSchema = z.object({
  where: VehicleOwnershipWhereUniqueInputObjectSchema,
  create: z.union([VehicleOwnershipCreateInputObjectSchema, VehicleOwnershipUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleOwnershipUpdateInputObjectSchema, VehicleOwnershipUncheckedUpdateInputObjectSchema]),
})
