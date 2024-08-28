import * as admin from "firebase-admin"

export const getAccountInfo = async (uid: string) => {
  try {
    const userRecord = await admin.auth().getUser(uid)
    console.log("Successfully fetched user data:", userRecord.toJSON())
    return userRecord.toJSON()
  } catch (error) {
    console.error("Error fetching user data:", error)
    throw error
  }
}

// Example usage:
const uid = "some-uid"
getAccountInfo(uid)
  .then((userInfo) => {
    console.log("User Info:", userInfo)
  })
  .catch((error) => {
    console.error("Failed to retrieve user info:", error)
  })
