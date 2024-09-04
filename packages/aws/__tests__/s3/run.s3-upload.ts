import * as fs from "fs"
import path from "path"
import { S3File, S3UploadOptions, uploadImageAndThumbnail } from "src/services"
import { streamToBuffer } from "src/utils"

// Define the path to the original image
const filePath = path.join(__dirname, "../assets/sample-vehicle-display.jpeg")
const fileStream = fs.createReadStream(filePath)

const uploadS3 = async ({ folder }: S3UploadOptions = {}): Promise<{ imageUrl: string; thumbnailUrl: string }> => {
  try {
    console.info("Started uploadS3 function")

    console.info("Converting stream to buffer")
    const buffer = await streamToBuffer(fileStream)

    // Create a file object with buffer, mimetype, original name, and stream
    const file: S3File = {
      originalname: path.basename(filePath),
      buffer,
    }

    // Call uploadImageAndThumbnail with the file and folder options
    console.info(
      "Uploading image and thumbnail to S3:\n",
      JSON.stringify(
        {
          originalname: file.originalname,
          bufferLength: file.buffer.length,
        },
        null,
        2,
      ),
    )
    const result = await uploadImageAndThumbnail(file, folder)
    console.info("File upload completed successfully:\n", JSON.stringify(result, null, 2))

    return result
  } catch (error) {
    console.error("File upload failed:", error)
    throw new Error("File upload failed")
  }
}

// Immediately-invoked async function to run the upload process
;(async () => {
  try {
    const options: S3UploadOptions = {
      folder: "images",
    }
    const fileUrls = await uploadS3(options)
    console.info("File uploaded to:", fileUrls)
  } catch (error) {
    console.error("Error in uploading file:", error)
  }
})()
