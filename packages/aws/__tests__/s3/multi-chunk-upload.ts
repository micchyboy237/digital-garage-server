import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  UploadPartCommand,
} from "@aws-sdk/client-s3"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { awsConfig, s3Client } from "../.."

const filePath = path.join(__dirname, "assets/sample-vehicle-display.jpeg") // Replace with your actual image path
const imageBuffer = fs.readFileSync(filePath)

export const main = async () => {
  const bucketName = awsConfig.s3BucketName
  const key = "multipart-image2.jpg"
  let uploadId

  try {
    const multipartUpload = await s3Client.send(
      new CreateMultipartUploadCommand({
        Bucket: bucketName,
        Key: key,
        // ACL: "public-read",
      }),
    )

    uploadId = multipartUpload.UploadId

    const uploadPromises = []
    const partSize = 5 * 1024 * 1024 // 5 MB

    for (let i = 0; i * partSize < imageBuffer.length; i++) {
      const start = i * partSize
      const end = Math.min(start + partSize, imageBuffer.length)

      uploadPromises.push(
        s3Client
          .send(
            new UploadPartCommand({
              Bucket: bucketName,
              Key: key,
              UploadId: uploadId,
              Body: imageBuffer.slice(start, end),
              PartNumber: i + 1,
            }),
          )
          .then((d) => {
            console.log("Part", i + 1, "uploaded")
            return d
          })
          .catch((err) => {
            console.error(`Error uploading part ${i + 1}:`, err)
            throw err // Stop if any part fails
          }),
      )
    }

    const uploadResults = await Promise.all(uploadPromises)

    if (uploadResults.length !== Math.ceil(imageBuffer.length / partSize)) {
      throw new Error("Not all parts have been uploaded")
    }

    await s3Client.send(
      new CompleteMultipartUploadCommand({
        Bucket: bucketName,
        Key: key,
        UploadId: uploadId,
        MultipartUpload: {
          Parts: uploadResults.map(({ ETag }, i) => ({
            ETag,
            PartNumber: i + 1,
          })),
        },
      }),
    )

    // Construct the image URL
    // https://local-classic-garage-bucket.s3.eu-west-2.amazonaws.com/multipart-image.jpg
    const imageUrl = `https://${bucketName}.s3.${s3Client.config.region}.amazonaws.com/${key}`

    console.log("Image successfully uploaded to:", imageUrl)

    return imageUrl
  } catch (err) {
    console.error("Error during multipart upload:", err)

    if (uploadId) {
      const abortCommand = new AbortMultipartUploadCommand({
        Bucket: bucketName,
        Key: key,
        UploadId: uploadId,
      })

      await s3Client.send(abortCommand)
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
