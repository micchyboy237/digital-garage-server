import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentCreateWithoutPostInputObjectSchema } from "./VehicleDocumentCreateWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutPostInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentCreateOrConnectWithoutPostInputObjectSchema = Schema
