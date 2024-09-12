import { MediaFileModel } from "app/models/media-file/MediaFile"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"
import { Profile } from "../profile/Profile"

export const UserModel = types
  .model("User")
  .props({
    id: types.identifier,
    email: types.string,
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    displayPictureId: types.maybeNull(types.string),
    displayPicture: types.maybeNull(MediaFileModel),
    location: types.maybeNull(types.string),
    accountStatus: types.enumeration(["ONBOARDING", "SELECT_SUBSCRIPTION", "ACTIVE"]),
    createdAt: types.optional(types.Date, () => new Date()),
    updatedAt: types.optional(types.Date, () => new Date()),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setProfile(profile: Profile) {
      self.profile = profile
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
