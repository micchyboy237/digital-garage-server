import { z } from "zod"
import { VehicleDocumentCreateWithoutFileInputObjectSchema } from "./VehicleDocumentCreateWithoutFileInput.schema"
import { VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutFileInput.schema"
import { VehicleDocumentCreateOrConnectWithoutFileInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutFileInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateNestedOneWithoutFileInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDocumentCreateWithoutFileInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDocumentCreateOrConnectWithoutFileInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateNestedOneWithoutFileInputObjectSchema = Schema
