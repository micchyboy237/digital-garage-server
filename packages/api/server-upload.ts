import { multerUpload, optimizeImage, S3File, uploadS3 } from "@boilerplate/aws"
import express from "express"
import fs from "fs"

const app = express()
const PORT = 4000

// Create the upload endpoint
app.post("/uploadS3", multerUpload.single("displayPhoto"), async (req, res) => {
  try {
    const folder = "test-upload-s3"
    const filePath = req.file.path // File path in temporary storage
    const fileBuffer = fs.readFileSync(filePath)

    // Optimize the image
    const optimizedBuffer = await optimizeImage(fileBuffer, 400)
    const imageFile: S3File = {
      originalname: req.file.originalname,
      buffer: optimizedBuffer,
    }

    // Upload optimized image to S3
    const imageUrl = await uploadS3(imageFile, folder)

    console.log("Upload Result:", imageUrl)

    // Delete the file after processing
    fs.unlinkSync(filePath) // Remove the temporary file

    res.status(200).json({ message: "File uploaded successfully", data: imageUrl })
  } catch (err) {
    console.error("Error uploading to S3:", err)
    res.status(500).json({ error: err.message })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
