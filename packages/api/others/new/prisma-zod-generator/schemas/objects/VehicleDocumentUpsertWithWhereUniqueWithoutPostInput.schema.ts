import { z } from "zod"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithoutPostInputObjectSchema } from "./VehicleDocumentUpdateWithoutPostInput.schema"
import { VehicleDocumentUncheckedUpdateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedUpdateWithoutPostInput.schema"
import { VehicleDocumentCreateWithoutPostInputObjectSchema } from "./VehicleDocumentCreateWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpsertWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleDocumentUpdateWithoutPostInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleDocumentCreateWithoutPostInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpsertWithWhereUniqueWithoutPostInputObjectSchema = Schema
