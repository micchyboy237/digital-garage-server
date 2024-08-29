import { prisma } from "@boilerplate/database"
import { z } from "zod"

const documentFieldSchema = z.object({
  label: z.string(),
  type: z.enum(["string", "number", "date"]),
})

// Validate the JSON fields
export const validateDocumentFields = (data: any) => {
  try {
    documentFieldSchema.parse(data)
  } catch (error) {
    throw new Error("Invalid JSON format: " + error.errors)
  }
}

export async function setDisplayPhoto(vehicleId: string, newPhotoId: string) {
  // Fetch the current display photo
  const currentDisplayPhoto = await prisma.vehiclePhoto.findFirst({
    where: { vehicleId, isDisplay: true },
  })

  // Unset the current display photo if it exists
  if (currentDisplayPhoto) {
    await prisma.vehiclePhoto.update({
      where: { id: currentDisplayPhoto.id },
      data: { isDisplay: false },
    })
  }

  // Set the new display photo
  await prisma.vehiclePhoto.update({
    where: { id: newPhotoId },
    data: { isDisplay: true },
  })
}
