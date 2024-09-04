import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
// Uncomment the following line to enable scheduled cleanup
// import "./scripts/scheduleCleanup"
import { multerUpload, uploadS3 } from "@boilerplate/aws"
import { prisma } from "@boilerplate/database"
import { createContext } from "./src/context"
import { appRouter } from "./src/routes"
import { WebhookRequestBody } from "./types.revenuecat"

export const app = express()
app.use(cors())
app.use(express.json())

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

app.post("/webhook", (req, res) => {
  const { event, data } = req.body

  // Call the tRPC mutation directly
  appRouter
    .createCaller({})
    .handleWebhook({ event, data })
    .then(() => res.status(200).send("Webhook processed successfully"))
    .catch((err) => res.status(500).send(`Failed to process webhook: ${err.message}`))
})

// Set up a webhook endpoint on your backend
app.post("/webhook/revenuecat", async (req: WebhookRequestBody, res) => {
  console.log("Called RevenueCat webhook")
  // get bearer token from request headers
  const token = req.headers.authorization
  console.log("RevenueCat webhook authorization token:", token)
  const { event, user } = req.body
  console.log("Received RevenueCat webhook:\n", JSON.stringify(req.body, null, 2))

  if (event.type === "INITIAL_PURCHASE") {
    console.log("Initial purchase:", event)
    // Send email receipt
    // await sendEmailReceipt(user.email, receipt);
  }

  // Respond to RevenueCat
  res.status(200).send("Webhook received")
})

// Route for handling file uploads and processing them
app.post("/trpc/uploadVehicleDetails", multerUpload.single("displayPhoto"), async (req, res) => {
  const { registrationNumber } = req.body // Other form fields
  const file = req.file // Image file

  try {
    if (file) {
      const imageUrl = await uploadS3(file)

      // Save vehicle details and image URL using Prisma
      const vehicle = await prisma.vehicle.create({
        data: {
          registrationNumber,
          imageUrl,
          // Add other fields here...
        },
      })

      res.status(200).json({ success: true, vehicle })
    } else {
      res.status(400).json({ error: "No file uploaded" })
    }
  } catch (error) {
    console.error("Error uploading to S3 or saving to database:", error)
    res.status(500).json({ error: "Error processing request" })
  }
})

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000")
})

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export type AppRouter = typeof appRouter
