import * as admin from "firebase-admin"
import * as functions from "firebase-functions"

admin.initializeApp()

export const deleteAllUsers = functions.https.onRequest(async (req, res) => {
  const deleteUsersBatch = async (batchSize: number): Promise<void> => {
    const listUsersResult = await admin.auth().listUsers(batchSize)

    const deletionPromises = listUsersResult.users.map((user) => admin.auth().deleteUser(user.uid))

    await Promise.all(deletionPromises)

    if (listUsersResult.pageToken) {
      await deleteUsersBatch(batchSize)
    }
  }

  await deleteUsersBatch(1000)
  res.send("All users deleted")
})
