import { z } from "zod"
import { MediaFileCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateWithoutVehicleDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDocumentInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleDocumentInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedOneWithoutVehicleDocumentInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleDocumentInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDocumentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleDocumentInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema = Schema
