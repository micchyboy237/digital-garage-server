import { Upload } from "@aws-sdk/lib-storage"
import { Readable } from "stream"
import { awsConfig, s3Client } from "../config"
import { isValidFolderName, optimizeImage } from "../utils"
import { generateImageThumbnail } from "../utils/image.utils"
import { S3File, UploadResult } from "./types"

/**
 * Upload a single file to S3.
 * @param file - The file to upload.
 * @param folder - Optional folder name to upload the file into.
 * @returns The URL of the uploaded file.
 */
export const uploadS3 = async (file: S3File, folder?: string): Promise<string> => {
  console.info("Starting the file upload process...")

  if (folder) {
    console.info(`Folder specified: ${folder}`)
    if (!isValidFolderName(folder)) {
      console.error("Invalid folder name provided")
      throw new Error("Invalid folder name")
    }
  }

  const bucketName = awsConfig.s3BucketName
  const key = generateKey(file, folder)
  console.info(`Uploading file to bucket: ${bucketName}, with key: ${key}`)

  const fileStream = Readable.from(file.buffer)

  const upload = new Upload({
    params: {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
      ACL: "public-read",
    },
    client: s3Client,
    queueSize: 3,
  })

  upload.on("httpUploadProgress", (progress) => {
    console.info("Upload progress:", progress)
  })

  try {
    console.info("Sending upload request to S3...")
    await upload.done()
    console.info("Upload request sent successfully")

    const imageUrl = `https://${bucketName}.s3.${awsConfig.region}.amazonaws.com/${key}`
    console.info("Image successfully uploaded to:", imageUrl)
    return imageUrl
  } catch (err) {
    console.error("Error uploading file to S3:", err)
    throw new Error("Failed to upload file to S3")
  }
}

export const uploadImageAndThumbnail = async (file: S3File, folder?: string): Promise<UploadResult> => {
  // Optimize image and generate thumbnail in parallel
  const [optimizedBuffer, thumbnailBuffer] = await Promise.all([optimizeImage(file.buffer), generateImageThumbnail(file.buffer)])

  // Prepare files for upload
  const imageFileName = file.originalname
  const imageFile: S3File = {
    originalname: imageFileName,
    buffer: optimizedBuffer,
  }
  // Append _thumb to the original file name before the extension
  const thumbnailFileName = imageFileName.replace(/(\.[\w\d_-]+)$/, "_thumb$1")
  const thumbnailFile: S3File = {
    originalname: thumbnailFileName,
    buffer: thumbnailBuffer,
  }

  // Upload files to S3 in parallel
  const [imageUrl, thumbnailUrl] = await Promise.all([uploadS3(imageFile, folder), uploadS3(thumbnailFile, folder)])

  return { imageUrl, thumbnailUrl }
}

export const generateKey = (file: S3File, folder?: string): string => {
  const key = folder ? `${folder}/${file.originalname}` : file.originalname
  return key
}
