import * as admin from "firebase-admin"
import * as path from "path"

export const setup = () => {
  // Path to your service account key file
  const serviceAccountPath = path.resolve(__dirname, "path/to/serviceAccountKey.json")

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: "https://<your-database-name>.firebaseio.com",
  })

  console.log("Firebase Admin initialized successfully")
}
