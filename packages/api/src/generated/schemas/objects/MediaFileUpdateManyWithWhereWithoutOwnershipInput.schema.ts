import { z } from "zod"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"
import { MediaFileUpdateManyMutationInputObjectSchema } from "./MediaFileUpdateManyMutationInput.schema"
import { MediaFileUncheckedUpdateManyWithoutVehicleFilesInputObjectSchema } from "./MediaFileUncheckedUpdateManyWithoutVehicleFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateManyWithWhereWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateManyMutationInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateManyWithoutVehicleFilesInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateManyWithWhereWithoutOwnershipInputObjectSchema = Schema
