import { multerUpload, S3File, uploadImageAndThumbnail } from "@boilerplate/aws"
import { MediaFile, MediaFileType, prisma } from "@boilerplate/database"
import express from "express"
import fs from "fs" // Node.js File System
import superjson from "superjson"
import { meService } from "../services"

const router = express.Router() // Create a new router for the parent path

// superjson middleware for deserializing request body
const superjsonRequestMiddleware = (req, res, next) => {
  if (req.body && typeof req.body === "string") {
    try {
      req.body = superjson.deserialize(JSON.parse(req.body))
    } catch (error) {
      console.error("Error deserializing request body:", error)
      return res.status(400).json({ error: "Invalid request body format" })
    }
  }
  next()
}

// superjson middleware for serializing response body
const superjsonResponseMiddleware = (req, res, next) => {
  const originalJson = res.json
  res.json = (data) => {
    const serializedData = superjson.serialize(data)
    return originalJson.call(res, serializedData)
  }
  next()
}

// Apply middlewares to the router for a parent path
router.use(superjsonRequestMiddleware)
router.use(superjsonResponseMiddleware)

// Define API routes under the parent path '/api'
router.post("/uploadProfile", multerUpload.single("displayPicture"), async (req, res) => {
  try {
    const folder = "profile"
    const file = req.file
    const fileBuffer = fs.readFileSync(file.path)
    const input = req.body

    console.log("Received file:", file)
    console.log("Received input:", input)

    let displayPicture

    if (file) {
      const s3File: S3File = {
        originalname: file.originalname,
        buffer: fileBuffer,
      }

      console.log("Uploading to S3...", s3File)

      const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

      // Delete the file after processing
      fs.unlinkSync(file.path) // Remove the temporary file

      displayPicture = {
        url: imageUrl,
        thumbnailUrl,
        fileName: file.originalname,
        type: MediaFileType.IMAGE,
        mimeType: file.mimetype,
      } as MediaFile
    }

    const token = req.headers.authorization.slice("Bearer ".length)
    console.log("Bearer token:", token)
    const session = await prisma.session.findUnique({ where: { token } })
    console.log("Input:", session?.userId, { ...input, displayPicture })

    const updatedUser = await meService.updateUser(session?.userId, { ...input, displayPicture })
    console.log("Updated user:", updatedUser)

    res.status(200).json({ message: "Profile updated successfully", data: updatedUser })
  } catch (error) {
    console.error("Error uploading to S3 or saving to database:", error)
    res.status(500).json({ error: error.message })
  }
})

router.post("/uploadVehicleDetails", multerUpload.single("displayPhoto"), async (req, res) => {
  try {
    const folder = "vehicle"
    const file = req.file
    const fileBuffer = fs.readFileSync(file.path)
    const input = req.body

    console.log("Received file:", file)
    console.log("Received input:", input)

    let displayPhoto

    if (file) {
      const s3File: S3File = {
        originalname: file.originalname,
        buffer: fileBuffer,
      }

      console.log("Uploading to S3...", s3File)

      const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

      // Delete the file after processing
      fs.unlinkSync(file.path) // Remove the temporary file

      displayPhoto = {
        url: imageUrl,
        thumbnailUrl,
        fileName: file.originalname,
        type: MediaFileType.IMAGE,
        mimeType: file.mimetype,
      } as MediaFile
    }

    const token = req.headers.authorization.slice("Bearer ".length)
    console.log("Bearer token:", token)
    const session = await prisma.session.findUnique({ where: { token } })
    console.log("Input:", session?.userId, { ...input, displayPhoto })

    // const updatedVehicle = await meService.addVehicle(session?.userId, { ...input, displayPhoto })

    // Create a new vehicle with the provided details
    const newVehicle = await prisma.vehicle.create({
      data: {
        registrationNumber: input.registrationNumber,
        make: input.make,
        model: input.model,
        ownerId: session?.userId,
      },
    })
    // Create an ownership record for the new vehicle
    const newOwnership = await prisma.vehicleOwnership.create({
      data: {
        vehicleId: newVehicle.id,
        userId: session?.userId!,
        vehicleDisplayPhotoId: displayPhoto ? displayPhoto.id : undefined,
      },
    })
    // Create the vehicle details
    const newVehicleDetails = await prisma.vehicleDetails.create({
      data: {
        registrationNumber: input.registrationNumber,
        make: input.make,
        model: input.model,
        yearOfManufacture: input.yearOfManufacture,
        colour: input.colour,
        taxDueDate: input.taxDueDate,
        taxStatus: input.taxStatus,
        motStatus: input.motStatus,
        engineCapacity: input.engineCapacity,
        fuelType: input.fuelType,
        ownership: {
          connect: { id: newOwnership.id },
        },
      },
    })
    console.log("Added vehicle:", newVehicleDetails)

    res.status(200).json({ message: "Added vehicle successfully", data: newVehicleDetails })
  } catch (error) {
    console.error("Error uploading to S3 or saving to database:", error)
    res.status(500).json({ error: error.message })
  }
})

export const uploadRouter = router // Export the router for the parent path
