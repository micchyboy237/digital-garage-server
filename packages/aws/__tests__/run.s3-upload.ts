import { PutObjectCommand } from "@aws-sdk/client-s3"
import fs from "fs"
import path from "path"
import sharp from "sharp"
import { awsConfig, s3Client } from "../src/config" // Assuming s3Client is exported from your config file

async function uploadImageToS3(imagePath: string) {
  try {
    const filePath = path.join(__dirname, imagePath)
    // Read the local image
    const imageBuffer = fs.readFileSync(filePath)

    // Process the image with Sharp (resize and optimize)
    const optimizedBuffer = await sharp(imageBuffer)
      .resize({ width: 800, height: 800, fit: "inside" })
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toBuffer()

    // Define S3 upload parameters using PutObjectCommand
    const uploadParams = {
      Bucket: awsConfig.s3BucketName,
      Key: `optimized/${Date.now().toString()}.jpg`,
      Body: optimizedBuffer,
      ContentType: "image/jpeg",
      ACL: "public-read",
    }

    console.log("Uploading image to S3:", uploadParams.Key)

    // Upload the image to S3 using the PutObjectCommand
    const command = new PutObjectCommand(uploadParams)
    const uploadResult = await s3Client.send(command)

    console.log("Image uploaded successfully:", uploadResult)
  } catch (error) {
    console.error("Error uploading image:", error)
  }
}

// Test the upload with a local image
uploadImageToS3("assets/sample-vehicle-display.jpeg")
