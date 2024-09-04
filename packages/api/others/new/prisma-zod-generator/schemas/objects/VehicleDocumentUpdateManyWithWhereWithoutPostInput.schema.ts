import { z } from "zod"
import { VehicleDocumentScalarWhereInputObjectSchema } from "./VehicleDocumentScalarWhereInput.schema"
import { VehicleDocumentUpdateManyMutationInputObjectSchema } from "./VehicleDocumentUpdateManyMutationInput.schema"
import { VehicleDocumentUncheckedUpdateManyWithoutDocumentsInputObjectSchema } from "./VehicleDocumentUncheckedUpdateManyWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateManyWithWhereWithoutPostInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleDocumentUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateManyWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpdateManyWithWhereWithoutPostInputObjectSchema = Schema
