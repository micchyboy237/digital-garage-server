import multer from "multer"
import multerS3 from "multer-s3"
import { awsConfig, s3Client } from "src/config"

export const multerUpload = multer()

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
