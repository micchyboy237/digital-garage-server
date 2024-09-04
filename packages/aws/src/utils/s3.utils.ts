import sizeOf from "image-size"
import { ISizeCalculationResult } from "image-size/dist/types/interface"
import sharp from "sharp"
import { ImageOptions } from "src/utils/types"
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

// Updated function to get image dimensions and aspect ratio
export const getImageDimensions = (input: string | Buffer): ISizeCalculationResult => {
  const sizeResult: ISizeCalculationResult = sizeOf(input)
  return sizeResult
}

export const calculateNewHeightAspectRatio = ({
  naturalWidth,
  naturalHeight,
  newWidth,
}: {
  naturalWidth: number
  naturalHeight: number
  newWidth: number
}): number => {
  const aspectRatio = naturalWidth / naturalHeight
  return Math.round(newWidth / aspectRatio)
}

export const generateOptimizedDimensions = ({
  naturalWidth,
  naturalHeight,
  maxWidth,
}: {
  naturalWidth: number
  naturalHeight: number
  maxWidth: number
}): { newWidth: number; newHeight: number } => {
  const maxWidthIsGreaterThanNaturalWidth = maxWidth > naturalWidth

  const newWidth = maxWidthIsGreaterThanNaturalWidth ? naturalWidth : maxWidth
  const newHeight = calculateNewHeightAspectRatio({ naturalWidth, naturalHeight, newWidth })

  return { newWidth, newHeight }
}

// Updated optimizeImage function to preserve aspect ratio
export const optimizeImage = async (buffer: Buffer, options?: ImageOptions): Promise<Buffer> => {
  const { width: naturalWidth, height: naturalHeight } = getImageDimensions(buffer)

  if (!naturalWidth || !naturalHeight) {
    throw new Error("Could not read natural dimensions of the image")
  }

  const maxWidth = options?.maxWidth || 800
  const { newWidth, newHeight } = generateOptimizedDimensions({ naturalWidth, naturalHeight, maxWidth })

  console.log(`Natural dimensions: ${naturalWidth}x${naturalHeight}`)
  console.log(`Optimized dimensions: ${newWidth}x${newHeight}`)

  const optimizedImageBuffer = await sharp(buffer)
    .resize({ width: newWidth, height: newHeight, fit: "inside" }) // Preserve aspect ratio
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toBuffer()

  return optimizedImageBuffer
}

// Updated generateThumbnail function to preserve aspect ratio
export const generateThumbnail = async (buffer: Buffer, options?: ImageOptions): Promise<Buffer> => {
  const { width: naturalWidth, height: naturalHeight } = getImageDimensions(buffer)

  if (!naturalWidth || !naturalHeight) {
    throw new Error("Could not read natural dimensions of the image")
  }

  const maxWidth = options?.maxWidth || 400
  const { newWidth, newHeight } = generateOptimizedDimensions({ naturalWidth, naturalHeight, maxWidth })

  console.log(`Thumbnail dimensions: ${newWidth}x${newHeight}`)

  const thumbnailBuffer = await sharp(buffer)
    .resize({ width: newWidth, height: newHeight, fit: "inside" }) // Preserve aspect ratio
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toBuffer()

  return thumbnailBuffer
}
