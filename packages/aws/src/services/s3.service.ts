// s3.service.ts
import { PutObjectCommand, PutObjectRequest } from "@aws-sdk/client-s3"
import { isValidFolderName } from "src/utils/s3.utils"
import { Readable } from "stream"
import { awsConfig, s3Client } from "../config"

/**
 * Upload a single file to S3.
 * @param file - The file to upload.
 * @param folder - Optional folder name to upload the file into.
 * @returns The URL of the uploaded file.
 */
export const uploadS3 = async (file: Express.Multer.File, folder?: string): Promise<string> => {
  if (folder && !isValidFolderName(folder)) {
    throw new Error("Invalid folder name")
  }

  const bucketName = awsConfig.s3BucketName
  const key = folder ? `${folder}/${file.originalname}` : file.originalname
  const uploadParams: PutObjectRequest = {
    Bucket: bucketName,
    Key: key, // Use the folder and file name as the key
    Body: Readable.from(file.buffer),
    // ACL: "public-read",
  }

  try {
    // Upload the file to S3
    await s3Client.send(new PutObjectCommand(uploadParams))

    // Construct the image URL
    const imageUrl = `https://${bucketName}.s3.${s3Client.config.region}.amazonaws.com/${key}`
    console.log("Image successfully uploaded to:", imageUrl)
    return imageUrl
  } catch (err) {
    console.error("Error uploading file to S3:", err)
    throw new Error("Failed to upload file to S3")
  }
}
