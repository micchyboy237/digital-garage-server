import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentCreateWithoutFileInputObjectSchema } from "./VehicleDocumentCreateWithoutFileInput.schema"
import { VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutFileInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateOrConnectWithoutFileInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutFileInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentCreateOrConnectWithoutFileInputObjectSchema = Schema
