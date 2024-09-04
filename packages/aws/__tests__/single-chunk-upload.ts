// single-chunk-upload.ts
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { uploadS3 } from ".."

// Define the file path
const filePath = path.join(__dirname, "assets/sample-vehicle-display.jpeg") // Replace with your actual image path

// Read the file
const fileBuffer = fs.readFileSync(filePath)

// Create a mock Express.Multer.File object
const file: Express.Multer.File = {
  fieldname: "file",
  originalname: path.basename(filePath),
  encoding: "7bit",
  mimetype: "image/jpeg",
  buffer: fileBuffer,
  size: fileBuffer.length,
  destination: "",
  filename: "",
  path: "",
  stream: fs.createReadStream(filePath),
}

export const main = async () => {
  try {
    const imageUrl = await uploadS3(file)
    console.log("Image successfully uploaded to:", imageUrl)
  } catch (err) {
    console.error("Error uploading file:", err)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
