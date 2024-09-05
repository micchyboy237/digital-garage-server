import ffmpeg from "fluent-ffmpeg"
import fs from "fs"
import sizeOf from "image-size"
import path from "path"
import { PDFDocument } from "pdf-lib"
import sharp from "sharp"
import { PassThrough } from "stream"

import { ISizeCalculationResult } from "image-size/dist/types/interface"

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

export const optimizeImage = async (buffer: Buffer, maxWidth: number = 800): Promise<Buffer> => {
  const { width: naturalWidth, height: naturalHeight } = getImageDimensions(buffer)

  if (!naturalWidth || !naturalHeight) {
    throw new Error("Could not read natural dimensions of the image")
  }

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

/**
 * Generates a thumbnail from a given image buffer.
 * @param {Buffer} buffer - The image file buffer.
 * @param {number} maxWidth - The maximum width of the thumbnail.
 * @returns {Promise<Buffer>} - A promise that resolves to the thumbnail buffer.
 */
export const generateImageThumbnail = async (buffer: Buffer, maxWidth: number = 400): Promise<Buffer> => {
  const { width: naturalWidth, height: naturalHeight } = getImageDimensions(buffer)

  if (!naturalWidth || !naturalHeight) {
    throw new Error("Could not read natural dimensions of the image")
  }

  const { newWidth, newHeight } = generateOptimizedDimensions({ naturalWidth, naturalHeight, maxWidth })

  console.log(`Thumbnail dimensions: ${newWidth}x${newHeight}`)

  const thumbnailBuffer = await sharp(buffer)
    .resize({ width: newWidth, height: newHeight, fit: "inside" }) // Preserve aspect ratio
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toBuffer()

  return thumbnailBuffer
}

/**
 * Generates a thumbnail from a video buffer.
 * @param {Buffer} buffer - The video file buffer.
 * @returns {Promise<Buffer>} - A promise that resolves to the thumbnail buffer.
 */
export const generateVideoThumbnail = async (buffer: Buffer): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    // Create a PassThrough stream for input
    const inputStream = new PassThrough()
    inputStream.end(buffer)

    // Create a PassThrough stream for output
    const outputStream = new PassThrough()
    const chunks: Buffer[] = []

    // Collect data chunks from the output stream
    outputStream.on("data", (chunk) => chunks.push(chunk))
    outputStream.on("end", () => resolve(Buffer.concat(chunks)))
    outputStream.on("error", (err) => reject(err))

    // Set up ffmpeg to process the input buffer
    ffmpeg(inputStream)
      .format("image2") // Specify output format
      .screenshots({
        count: 1, // Generate a single thumbnail
        timemarks: ["00:00:02.000"], // Time mark to take the screenshot
        size: "320x240", // Specify thumbnail size
      })
      .on("end", () => {
        console.log("Thumbnail generation completed")
      })
      .on("error", (err) => {
        console.error("Error generating thumbnail:", err)
        reject(err)
      })
      .pipe(outputStream, { end: true }) // Pipe the output to the output stream
  })
}

/**
 * Generates a thumbnail for a specific page of a PDF document.
 * @param {Buffer} buffer - The PDF file buffer.
 * @param {number} pageIndex - The index of the page to generate a thumbnail for.
 * @returns {Promise<Buffer>} - A promise that resolves to the thumbnail buffer.
 */
const generatePDFThumbnail = async (buffer: Buffer, pageIndex = 0) => {
  const pdfDoc = await PDFDocument.load(buffer)
  const pages = pdfDoc.getPages()
  if (pageIndex >= pages.length) {
    throw new Error("Invalid page index")
  }
  const page = pages[pageIndex]
  const { width, height } = page.getSize()

  // Render the page to an image buffer
  const imageBuffer = await sharp(Buffer.from(page.toString()))
    .resize({ width: 320, height: Math.round((height / width) * 320) })
    .toFormat("jpeg")
    .jpeg({ quality: 60 })
    .toBuffer()

  return imageBuffer
}

/**
 * Generates thumbnails for all pages in a PDF.
 * @param {Buffer} buffer - The PDF file buffer.
 * @param {string} outputDir - The directory to save the thumbnails.
 * @returns {Promise<void>} - A promise that resolves when all thumbnails are generated.
 */
const generatePDFThumbnails = async (buffer: Buffer, outputDir: string) => {
  const pdfDoc = await PDFDocument.load(buffer)
  const pages = pdfDoc.getPages()

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  for (let i = 0; i < pages.length; i++) {
    const thumbnailBuffer = await generatePDFThumbnail(buffer, i)
    const outputThumbnailPath = path.join(outputDir, `thumbnail_${i}.jpeg`)
    fs.writeFileSync(outputThumbnailPath, thumbnailBuffer)
  }
}

export { generatePDFThumbnail, generatePDFThumbnails }
