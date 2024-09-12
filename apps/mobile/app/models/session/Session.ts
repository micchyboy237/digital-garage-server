import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const SessionModel = types.model("Session").props({
  id: types.identifier,
  token: types.string,
  expiresAt: types.Date,
  accountId: types.string,
  deviceFingerprint: types.string,
  userId: types.string,
  createdAt: types.optional(types.Date, () => new Date()),
  updatedAt: types.optional(types.Date, () => new Date()),
})

export interface Session extends Instance<typeof SessionModel> {}
export interface SessionSnapshotOut extends SnapshotOut<typeof SessionModel> {}
export interface SessionSnapshotIn extends SnapshotIn<typeof SessionModel> {}
