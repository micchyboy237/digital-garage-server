import { z } from "zod"
import { MediaFileCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDocumentInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleDocumentInput.schema"
import { MediaFileUpsertWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUpsertWithoutVehicleDocumentInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUpdateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneRequiredWithoutVehicleDocumentNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleDocumentInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleDocumentInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutVehicleDocumentInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutVehicleDocumentInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleDocumentInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneRequiredWithoutVehicleDocumentNestedInputObjectSchema = Schema
