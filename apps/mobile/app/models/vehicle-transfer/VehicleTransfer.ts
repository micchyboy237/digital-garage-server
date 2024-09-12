import { types } from "mobx-state-tree"
import { VehicleModel } from "app/models/vehicle/Vehicle"
import { UserModel } from "app/models/user/User"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const VehicleTransferModel = types
  .model("VehicleTransfer")
  .props({
    id: types.identifier,
    vehicleId: types.string,
    senderId: types.string,
    recipientId: types.string,
    status: types.enumeration(["PENDING", "COMPLETED", "REJECTED"]), // Replace with actual statuses
    transferDate: types.Date,
    responseDate: types.maybeNull(types.Date),
    reason: types.maybeNull(types.string),
    excludedMediaFileTypes: types.optional(types.array(types.enumeration(["TYPE1", "TYPE2"])), []), // Replace with actual media file types
    createdAt: types.Date,
    updatedAt: types.Date,
    vehicle: types.maybeNull(types.reference(VehicleModel)),
    sender: types.maybeNull(types.reference(UserModel)),
    recipient: types.maybeNull(types.reference(UserModel)),
  })
  .actions(withSetPropAction)

export interface VehicleTransfer extends Instance<typeof VehicleTransferModel> {}
export interface VehicleTransferSnapshotOut extends SnapshotOut<typeof VehicleTransferModel> {}
export interface VehicleTransferSnapshotIn extends SnapshotIn<typeof VehicleTransferModel> {}
