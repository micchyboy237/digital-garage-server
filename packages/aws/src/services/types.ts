export interface S3File {
  originalname: string
  buffer: Buffer
}

export interface S3UploadOptions {
  folder?: string
}

export interface UploadResult {
  imageUrl: string
  thumbnailUrl: string
}
