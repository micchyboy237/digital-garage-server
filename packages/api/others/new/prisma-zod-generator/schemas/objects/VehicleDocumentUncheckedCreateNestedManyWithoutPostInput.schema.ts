import { z } from "zod"
import { VehicleDocumentCreateWithoutPostInputObjectSchema } from "./VehicleDocumentCreateWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutPostInput.schema"
import { VehicleDocumentCreateOrConnectWithoutPostInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutPostInput.schema"
import { VehicleDocumentCreateManyPostInputEnvelopeObjectSchema } from "./VehicleDocumentCreateManyPostInputEnvelope.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUncheckedCreateNestedManyWithoutPostInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDocumentCreateWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateWithoutPostInputObjectSchema).array(),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleDocumentCreateManyPostInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleDocumentUncheckedCreateNestedManyWithoutPostInputObjectSchema = Schema
