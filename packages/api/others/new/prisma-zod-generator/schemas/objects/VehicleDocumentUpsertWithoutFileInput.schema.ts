import { z } from "zod"
import { VehicleDocumentUpdateWithoutFileInputObjectSchema } from "./VehicleDocumentUpdateWithoutFileInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutFileInput.schema"
import { VehicleDocumentCreateWithoutFileInputObjectSchema } from "./VehicleDocumentCreateWithoutFileInput.schema"
import { VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutFileInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpsertWithoutFileInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleDocumentUpdateWithoutFileInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutFileInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpsertWithoutFileInputObjectSchema = Schema
