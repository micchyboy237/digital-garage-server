import fs from "fs"
import { processImage, uploadToS3 } from "../../utils/s3.utils"

// Existing functions remain unchanged...

// Utility function to read a file from the local file system
export const readFileFromLocal = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// Function to handle file upload from local file system
export const handleLocalFileUpload = async (filePath) => {
  try {
    // Step 1: Read the file from the local file system
    const fileBuffer = await readFileFromLocal(filePath)

    // Step 2: Process the image with Sharp (resize and optimize)
    const optimizedBuffer = await processImage(fileBuffer)

    // Step 3: Define S3 upload key
    const key = `optimized/${Date.now().toString()}.jpg`

    // Step 4: Upload the image to S3
    const uploadResult = await uploadToS3(optimizedBuffer, key)

    console.log("Local file uploaded successfully:", uploadResult.Location)
    return { message: "Image uploaded and optimized successfully.", url: uploadResult.Location }
  } catch (error) {
    console.error("Error uploading local file:", error)
    throw new Error("Error uploading local file.")
  }
}
