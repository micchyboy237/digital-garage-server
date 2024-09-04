import express from "express"
import { handleLocalFileUpload } from "src/services/s3/s3.local"
import { getMemoryStorage, getS3Storage, processImage, uploadToS3 } from "src/utils/s3.utils"

const app = express()

// Middleware setup for multer memory storage (in-memory upload)
const upload = getMemoryStorage()

// Middleware setup for multer S3 storage (direct upload to S3)
const uploadS3 = getS3Storage()

// Route for handling file uploads with memory storage (upload)
app.post("/upload-memory", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.")
    }

    // Process the image with Sharp (resize and optimize)
    const optimizedBuffer = await processImage(req.file.buffer)

    // Define S3 upload key
    const key = `optimized/${Date.now().toString()}.jpg`

    // Upload the image to S3
    const uploadResult = await uploadToS3(optimizedBuffer, key)
    console.log("Image uploaded successfully:", uploadResult.Location)

    res.status(200).json({ message: "Image uploaded and optimized successfully.", url: uploadResult.Location })
  } catch (error) {
    console.error("Error uploading image:", error)
    res.status(500).send("Error uploading image.")
  }
})

// Route for handling direct S3 uploads with multerS3 (uploadS3)
app.post("/upload-s3", uploadS3.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.")
    }

    // Image is already uploaded to S3 directly, multerS3 handles it
    console.log("Direct upload to S3 successful:", req.file.location)
    res.status(200).json({ message: "Image uploaded directly to S3 successfully.", url: req.file.location })
  } catch (error) {
    console.error("Error uploading image:", error)
    res.status(500).send("Error uploading image.")
  }
})

// Route for handling file uploads from the local file system
app.post("/upload-local", async (req, res) => {
  try {
    const filePath = req.body.filePath // Assume file path is provided in the request body

    if (!filePath) {
      return res.status(400).send("File path not provided.")
    }

    // Handle the local file upload
    const result = await handleLocalFileUpload(filePath)
    res.status(200).json(result)
  } catch (error) {
    console.error("Error uploading local file:", error)
    res.status(500).send("Error uploading local file.")
  }
})

// Start the Express server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
