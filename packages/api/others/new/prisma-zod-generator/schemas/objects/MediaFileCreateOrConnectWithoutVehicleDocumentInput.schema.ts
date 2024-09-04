import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutVehicleDocumentInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutVehicleDocumentInputObjectSchema = Schema
