import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
// Uncomment the following line to enable scheduled cleanup
// import "./scripts/scheduleCleanup"
import { multerUpload, S3File, uploadImageAndThumbnail } from "@boilerplate/aws"
import { MediaFileType, prisma } from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import jwt from "jsonwebtoken"
import { createContext } from "./src/context"
import { ValidationException } from "./src/exceptions"
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
  try {
    // const uploadSingle = multerUpload.single("displayPhoto")
    // // Handle file upload using Multer
    // await new Promise<void>((resolve, reject) => {
    //   uploadSingle(req, res, (err) => {
    //     if (err) {
    //       return reject(new TRPCError({ code: "BAD_REQUEST", message: "Error uploading file" }))
    //     }
    //     resolve()
    //   })
    // })

    const input = req.body
    const token = req.headers.authorization.slice("Bearer ".length)
    console.log("Bearer token:", token)
    const userId = jwt.verify(token, process.env.JWT_SECRET || "") as string
    console.log("Decoded token:", userId)
    const user = await prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "User not found" })
    }

    const { file, folder } = req as { file: Express.Multer.File | undefined; folder?: string } // Ensure type safety for req file
    const { registrationNumber } = input

    if (!file) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "No file uploaded" })
    }

    const s3File: S3File = {
      originalname: file.originalname,
      buffer: file.buffer,
    }

    const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

    // Perform a transaction to save vehicle details and image URLs using Prisma
    const vehicle = await prisma.$transaction(async (prisma) => {
      const createdVehicle = await prisma.vehicle.create({
        data: {
          make: input.make,
          model: input.model,
          registrationNumber,
          ownerId: userId,
          createdAt: input.createdAt,
          updatedAt: input.updatedAt,
        },
      })

      await prisma.mediaFile.create({
        data: {
          url: imageUrl,
          thumbnailUrl,
          fileName: file.originalname,
          type: MediaFileType.IMAGE,
          mimeType: file.mimetype,
        },
      })

      await prisma.vehicleOwnership.create({
        data: {
          userId,
          vehicleId: createdVehicle.id,
        },
      })

      return createdVehicle
    })

    return { success: true, vehicle }
  } catch (error) {
    if (error instanceof ValidationException) {
      throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
    }
    console.error("Error uploading to S3 or saving to database:", error)
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Error processing request" })
  }
})

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export type AppRouter = typeof appRouter
