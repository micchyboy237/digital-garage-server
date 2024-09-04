import sharp from "sharp"
import { s3 } from "."

export const uploadImageToS3 = async (imageUri: string) => {
  // Convert image to binary data
  const response = await fetch(imageUri)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // Define S3 upload parameters
  const params = {
    Bucket: "your-s3-bucket-name", // Your S3 bucket name
    Key: `uploads/${Date.now()}.jpg`, // Unique name for the image file
    Body: buffer, // Image file buffer
    ContentType: "image/jpeg", // File type
    ACL: "public-read", // Permissions
  }

  // Upload to S3
  try {
    const data = await s3.upload(params).promise()
    console.log(`Image uploaded successfully: ${data.Location}`)
    return data.Location // Return the uploaded image URL
  } catch (error) {
    console.error("Error uploading image:", error)
  }
}

exports.handler = async (event) => {
  const srcBucket = event.Records[0].s3.bucket.name
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "))
  const dstBucket = `${srcBucket}-thumbnails`
  const dstKey = `thumbnails-${srcKey}`

  try {
    // Retrieve the image from S3
    const { Body } = await s3.getObject({ Bucket: srcBucket, Key: srcKey }).promise()

    // Resize the image using sharp
    const resizedImage = await sharp(Body).resize(200).toBuffer()

    // Upload the thumbnail image back to S3
    await s3
      .putObject({
        Bucket: dstBucket,
        Key: dstKey,
        Body: resizedImage,
        ContentType: "image/jpeg",
        ACL: "public-read",
      })
      .promise()

    console.log(`Successfully generated thumbnail for ${srcKey} and uploaded to ${dstBucket}`)
  } catch (error) {
    console.error(`Error generating thumbnail for ${srcKey}:`, error)
  }
}
