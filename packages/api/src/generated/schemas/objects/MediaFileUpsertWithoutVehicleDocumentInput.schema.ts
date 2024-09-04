import { z } from "zod"
import { MediaFileUpdateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUpdateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleDocumentInput.schema"
import { MediaFileCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutVehicleDocumentInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutVehicleDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleDocumentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutVehicleDocumentInputObjectSchema = Schema
