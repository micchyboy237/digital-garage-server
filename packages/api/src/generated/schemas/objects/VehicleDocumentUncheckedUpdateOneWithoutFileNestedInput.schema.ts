import { z } from "zod"
import { VehicleDocumentCreateWithoutFileInputObjectSchema } from "./VehicleDocumentCreateWithoutFileInput.schema"
import { VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutFileInput.schema"
import { VehicleDocumentCreateOrConnectWithoutFileInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutFileInput.schema"
import { VehicleDocumentUpsertWithoutFileInputObjectSchema } from "./VehicleDocumentUpsertWithoutFileInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithoutFileInputObjectSchema } from "./VehicleDocumentUpdateWithoutFileInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutFileInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUncheckedUpdateOneWithoutFileNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDocumentCreateWithoutFileInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDocumentCreateOrConnectWithoutFileInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleDocumentUpsertWithoutFileInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleDocumentUpdateWithoutFileInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedUpdateWithoutFileInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleDocumentUncheckedUpdateOneWithoutFileNestedInputObjectSchema = Schema
