import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithoutPostInputObjectSchema } from "./VehicleDocumentUpdateWithoutPostInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleDocumentUpdateWithoutPostInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpdateWithWhereUniqueWithoutPostInputObjectSchema = Schema
