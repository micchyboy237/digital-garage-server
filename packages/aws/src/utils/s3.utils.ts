import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import multer from "multer"
import multerS3 from "multer-s3"
import sharp from "sharp"
import { awsConfig, s3Client } from "../config"

/**
 * Validate folder name to ensure it does not contain invalid characters and is a valid nested path.
 * @param folder - The folder name to validate.
 * @returns True if the folder name is valid, otherwise false.
 */
export const isValidFolderName = (folder: string): boolean => {
  // Regular expression to match valid folder names
  const validFolderPattern = /^(?!\/)(?!.*\/\/)[a-zA-Z0-9-_\/]+(?<!\/)$/
  return validFolderPattern.test(folder)
}

// Utility function to configure multer for memory storage
export const getMemoryStorage = () => multer({ storage: multer.memoryStorage() })

// Utility function to configure multer for S3 storage
export const getS3Storage = () =>
  multer({
    storage: multerS3({
      s3: s3Client,
      bucket: awsConfig.s3BucketName,
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname })
      },
      key: (req, file, cb) => {
        cb(null, Date.now().toString())
      },
    }),
  })

// Utility function to process image using Sharp
export const processImage = async (buffer) => {
  return sharp(buffer).resize({ width: 800, height: 800, fit: "inside" }).toFormat("jpeg").jpeg({ quality: 80 }).toBuffer()
}

// Utility function to upload image to S3
export const uploadToS3 = async (buffer, key, contentType = "image/jpeg") => {
  const uploadParams = {
    Bucket: awsConfig.s3BucketName,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    ACL: "public-read",
  }

  return s3.upload(uploadParams).promise()
}

// Function to optimize the image dynamically
export const optimizeImage = async (
  buffer: Buffer,
  originalKey: string,
  maxWidth: number = 1200,
  maxHeight: number = 1200,
): Promise<string> => {
  const s3 = new S3Client({ region: process.env.AWS_REGION })

  // Calculate dimensions dynamically while preserving aspect ratio
  const optimizedImage = await sharp(buffer)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside" }) // Dynamic dimensions
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toBuffer()

  // Upload optimized image to S3
  const imageUploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `optimized/${originalKey}`,
    Body: optimizedImage,
    ContentType: "image/jpeg",
  }
  await s3.send(new PutObjectCommand(imageUploadParams))

  const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/optimized/${originalKey}`

  return imageUrl
}

// Function to generate a thumbnail dynamically
export const generateThumbnail = async (
  buffer: Buffer,
  originalKey: string,
  maxWidth: number = 200,
  maxHeight: number = 200,
): Promise<string> => {
  const s3 = new S3Client({ region: process.env.AWS_REGION })

  // Calculate thumbnail dimensions dynamically while preserving aspect ratio
  const thumbnail = await sharp(buffer)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside" }) // Dynamic dimensions
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toBuffer()

  // Upload thumbnail to S3
  const thumbnailUploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `thumbnails/${originalKey}`,
    Body: thumbnail,
    ContentType: "image/jpeg",
  }
  await s3.send(new PutObjectCommand(thumbnailUploadParams))

  const thumbnailUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/thumbnails/${originalKey}`

  return thumbnailUrl
}
