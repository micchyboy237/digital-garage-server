import { S3Client } from "@aws-sdk/client-s3"
import { fromIni } from "@aws-sdk/credential-providers"
import * as dotenv from "dotenv"
import { existsSync } from "fs"
import { resolve } from "path"

// Load environment variables from a specific .env file
const loadEnvFile = (envFileName: string) => {
  const envPath = resolve(process.cwd(), envFileName)
  if (existsSync(envPath)) {
    dotenv.config({ path: envPath })
    console.log(`Environment variables loaded from ${envFileName}`)
  } else {
    console.warn(`Environment file ${envFileName} not found, skipping...`)
  }
}

// Determine the environment and load the corresponding .env file
const env = process.env.NODE_ENV || "local" // Default to 'local' if NODE_ENV is not set
switch (env) {
  case "local":
    loadEnvFile(".env.local")
    break
  case "development":
    loadEnvFile(".env.development")
    break
  case "test":
    loadEnvFile(".env.test")
    break
  case "production":
    loadEnvFile(".env.production")
    break
  default:
    console.warn(`Unknown environment: ${env}, loading default .env`)
    dotenv.config()
}

export const awsConfig = {
  region: process.env.AWS_REGION || "eu-west-2",
  s3BucketName: process.env.AWS_S3_BUCKET_NAME || "local-classic-garage-bucket",
}

// Configure AWS SDK JavaScript v3 credentials
const credentials = fromIni({
  profile: process.env.AWS_PROFILE,
  filepath: "~/.aws/credentials",
  configFilepath: "~/.aws/config",
})

const endpoint = `https://s3.${awsConfig.region}.amazonaws.com`

export const s3Client = new S3Client({
  region: awsConfig.region,
  endpoint,
  credentials,
})

// print all env variables that start with AWS_
const awsVariables = Object.keys(process.env)
  .filter((key) => key.startsWith("AWS_"))
  .reduce((obj, key) => {
    obj[key] = process.env[key]
    return obj
  }, {})
console.info("AWS environment variables:\n", JSON.stringify(awsVariables, null, 2))
console.info("AWS S3 bucket:\n", JSON.stringify(awsConfig, null, 2))
console.info("AWS S3 client configured successfully")
console.info("\n")
