import { Upload } from "@aws-sdk/lib-storage"
import * as fs from "fs"
import path from "path"
import { awsConfig, s3Client } from "../../src/config"

const filePath = path.join(__dirname, "../assets/sample-vehicle-display.jpeg")
const fileStream = fs.createReadStream(filePath)
// const fileBuffer = fs.readFileSync(filePath)
const file = {
  originalname: "sample-vehicle-display.jpeg",
  // buffer: fileBuffer,
}
const folder = "test"

;(async () => {
  const key = folder ? `${folder}/${file.originalname}` : file.originalname
  const upload = new Upload({
    params: {
      Bucket: awsConfig.s3BucketName,
      Key: key,
      Body: fileStream,
    },
    client: s3Client,
    queueSize: 3,
  })

  upload.on("httpUploadProgress", (progress) => {
    console.info(progress)
  })

  await upload.done()
})()
