import { z } from "zod"
import { VehicleDocumentScalarWhereInputObjectSchema } from "./VehicleDocumentScalarWhereInput.schema"
import { VehicleDocumentUpdateManyMutationInputObjectSchema } from "./VehicleDocumentUpdateManyMutationInput.schema"
import { VehicleDocumentUncheckedUpdateManyWithoutVehicleDocumentsInputObjectSchema } from "./VehicleDocumentUncheckedUpdateManyWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateManyWithWhereWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleDocumentUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleDocumentUncheckedUpdateManyWithoutVehicleDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDocumentUpdateManyWithWhereWithoutOwnershipInputObjectSchema = Schema
