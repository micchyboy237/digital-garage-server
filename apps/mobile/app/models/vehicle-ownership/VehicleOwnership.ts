import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const VehicleOwnershipModel = types
  .model("VehicleOwnership")
  .props({
    id: types.identifier,
    userId: types.string,
    vehicleId: types.string,
    isCurrentOwner: types.boolean,
    vehicleDisplayPhotoId: types.maybeNull(types.string),
    startDate: types.Date,
    endDate: types.maybeNull(types.Date),
    createdAt: types.Date,
    updatedAt: types.Date,
  })
  .actions(withSetPropAction)

export interface VehicleOwnership extends Instance<typeof VehicleOwnershipModel> {}
export interface VehicleOwnershipSnapshotOut extends SnapshotOut<typeof VehicleOwnershipModel> {}
export interface VehicleOwnershipSnapshotIn extends SnapshotIn<typeof VehicleOwnershipModel> {}
