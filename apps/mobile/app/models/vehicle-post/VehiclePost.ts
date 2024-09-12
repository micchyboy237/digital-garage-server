import { types } from "mobx-state-tree"
import { MediaFileModel } from "app/models/media-file/MediaFile"
import { UserModel } from "app/models/user/User"
import { VehicleOwnershipModel } from "app/models/vehicle-ownership/VehicleOwnership"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const VehiclePostModel = types
  .model("VehiclePost")
  .props({
    id: types.identifier,
    title: types.string,
    category: types.enumeration(["CATEGORY1", "CATEGORY2"]), // Replace with actual categories
    description: types.maybeNull(types.string),
    type: types.maybeNull(types.enumeration(["TYPE1", "TYPE2"])), // Replace with actual types
    createdById: types.string,
    ownershipId: types.string,
    createdAt: types.Date,
    updatedAt: types.Date,
    files: types.optional(types.array(types.reference(MediaFileModel)), []),
    createdBy: types.maybeNull(types.reference(UserModel)),
    ownership: types.maybeNull(types.reference(VehicleOwnershipModel)),
  })
  .actions(withSetPropAction)

export interface VehiclePost extends Instance<typeof VehiclePostModel> {}
export interface VehiclePostSnapshotOut extends SnapshotOut<typeof VehiclePostModel> {}
export interface VehiclePostSnapshotIn extends SnapshotIn<typeof VehiclePostModel> {}
