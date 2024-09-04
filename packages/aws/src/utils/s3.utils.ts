import sharp from "sharp"
import { Readable } from "stream"

/**
 * Converts a readable stream to a buffer.
 * @param stream - The readable stream to convert.
 * @returns A promise that resolves to a buffer.
 */
export const streamToBuffer = async (stream: Readable): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    stream.on("data", (chunk) => chunks.push(chunk))
    stream.on("end", () => resolve(Buffer.concat(chunks)))
    stream.on("error", reject)
  })
}

/**
 * Converts a buffer to a readable stream.
 * @param buffer - The buffer to convert.
 * @returns A readable stream.
 */
export const bufferToStream = (buffer: Buffer): Readable => {
  const stream = Readable.from(buffer)
  return stream
}

/**
 * Validate folder name to ensure it does not contain invalid characters and is a valid nested path.
 * @param folder - The folder name to validate.
 * @returns True if the folder name is valid, otherwise false.
 */
export const isValidFolderName = (folder: string): boolean => {
  const validFolderPattern = /^(?!\/)(?!.*\/\/)[a-zA-Z0-9-_\/]+(?<!\/)$/
  return validFolderPattern.test(folder)
}

// Function to optimize the image dynamically
export const optimizeImage = async (buffer: Buffer, maxWidth: number = 1200, maxHeight: number = 1200): Promise<Buffer> => {
  const optimizedImageBuffer = await sharp(buffer)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside" }) // Dynamic dimensions
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toBuffer()

  return optimizedImageBuffer
}

// Function to generate a thumbnail dynamically
export const generateThumbnail = async (buffer: Buffer, maxWidth: number = 200, maxHeight: number = 200): Promise<Buffer> => {
  const thumbnailBuffer = await sharp(buffer)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside" }) // Dynamic dimensions
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toBuffer()

  return thumbnailBuffer
}
