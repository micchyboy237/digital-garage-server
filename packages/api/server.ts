import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
// Uncomment the following line to enable scheduled cleanup
// import "./scripts/scheduleCleanup"
import { createContext } from "./src/context"
import { appRouter } from "./src/routes"
import { uploadRouter } from "./src/routes/upload.route"
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

app.use("/upload", uploadRouter)

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export type AppRouter = typeof appRouter
