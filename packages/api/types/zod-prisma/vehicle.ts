import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteVehicleOwnership, RelatedVehicleOwnershipModel, CompleteVehicleTransfer, RelatedVehicleTransferModel } from "./index"

export const VehicleModel = z.object({
  id: z.string(),
  make: z.string(),
  model: z.string(),
  registrationNumber: z.string(),
  ownerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehicle extends z.infer<typeof VehicleModel> {
  owner?: CompleteUser | null
  ownerships: CompleteVehicleOwnership[]
  transfers: CompleteVehicleTransfer[]
}

/**
 * RelatedVehicleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehicleModel: z.ZodSchema<CompleteVehicle> = z.lazy(() => VehicleModel.extend({
  owner: RelatedUserModel.nullish(),
  ownerships: RelatedVehicleOwnershipModel.array(),
  transfers: RelatedVehicleTransferModel.array(),
}))
