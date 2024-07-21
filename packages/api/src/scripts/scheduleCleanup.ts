import cron from "node-cron"
import { cleanUpExpiredTokens } from "../utils/cleanup"

// Schedule the cleanup to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  console.log("Running daily cleanup task...")
  await cleanUpExpiredTokens()
})
