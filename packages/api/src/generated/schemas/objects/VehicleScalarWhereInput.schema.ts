import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehicleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const VehicleScalarWhereInputObjectSchema = Schema
