import fs from "fs"
import multer from "multer"
import multerS3 from "multer-s3"
import path from "path"
import { awsConfig, s3Client } from "../config"

// Configure a safer temporary directory for storing files
const tempDir = path.join(__dirname, "../temp") // Customize this path as needed

// Ensure the temp directory exists
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true })
}

// Configure storage for Multer using the safer temporary directory
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Temporary directory:", tempDir)
    cb(null, tempDir) // Use the custom temp directory for file storage
  },
  filename: (req, file, cb) => {
    const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    console.log("File name:", fileName)
    cb(null, fileName) // Append timestamp to the file name
  },
})

export const multerUpload = multer({ storage })

export const multerUploadS3 = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: awsConfig.s3BucketName,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
})
