import * as z from "zod"
import { TransferStatus, MediaFileType } from "@prisma/client"
import { CompleteVehicle, RelatedVehicleModel, CompleteUser, RelatedUserModel } from "./index"

export const VehicleTransferModel = z.object({
  id: z.string(),
  vehicleId: z.string(),
  senderId: z.string(),
  recipientId: z.string(),
  status: z.nativeEnum(TransferStatus),
  transferDate: z.date(),
  responseDate: z.date().nullish(),
  reason: z.string().nullish(),
  excludedMediaFileTypes: z.nativeEnum(MediaFileType).array(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehicleTransfer extends z.infer<typeof VehicleTransferModel> {
  vehicle?: CompleteVehicle | null
  sender?: CompleteUser | null
  recipient?: CompleteUser | null
}

/**
 * RelatedVehicleTransferModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehicleTransferModel: z.ZodSchema<CompleteVehicleTransfer> = z.lazy(() => VehicleTransferModel.extend({
  vehicle: RelatedVehicleModel.nullish(),
  sender: RelatedUserModel.nullish(),
  recipient: RelatedUserModel.nullish(),
}))
