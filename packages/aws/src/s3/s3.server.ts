import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { awsConfig, s3Client } from "../config"

const client = s3Client

export function createSignedUrl(key: string) {
  const command = new PutObjectCommand({ Bucket: awsConfig.s3BucketName, Key: key, ACL: "public-read" })
  return getSignedUrl(client, command, { expiresIn: 3600 })
}
