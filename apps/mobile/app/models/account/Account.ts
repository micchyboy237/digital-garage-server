import { AuthProvider } from "app/models/account/AuthProvider"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const AccountModel = types.model("Account", {
  id: types.string,
  provider: types.enumeration<keyof typeof AuthProvider>(
    "AuthProvider",
    Object.keys(AuthProvider) as (keyof typeof AuthProvider)[],
  ),
  userId: types.string,
  firebaseUid: types.string,
  isEmailVerified: types.boolean,
  lastLogin: types.maybeNull(types.Date),
  createdAt: types.optional(types.Date, () => new Date()),
  updatedAt: types.optional(types.Date, () => new Date()),
})

export interface Account extends Instance<typeof AccountModel> {}
export interface AccountSnapshotOut extends SnapshotOut<typeof AccountModel> {}
export interface AccountSnapshotIn extends SnapshotIn<typeof AccountModel> {}
