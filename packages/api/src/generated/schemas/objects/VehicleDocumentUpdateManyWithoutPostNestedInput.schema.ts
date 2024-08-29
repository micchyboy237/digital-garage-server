import { z } from "zod"
import { VehicleDocumentCreateWithoutPostInputObjectSchema } from "./VehicleDocumentCreateWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutPostInput.schema"
import { VehicleDocumentCreateOrConnectWithoutPostInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutPostInput.schema"
import { VehicleDocumentUpsertWithWhereUniqueWithoutPostInputObjectSchema } from "./VehicleDocumentUpsertWithWhereUniqueWithoutPostInput.schema"
import { VehicleDocumentCreateManyPostInputEnvelopeObjectSchema } from "./VehicleDocumentCreateManyPostInputEnvelope.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithWhereUniqueWithoutPostInputObjectSchema } from "./VehicleDocumentUpdateWithWhereUniqueWithoutPostInput.schema"
import { VehicleDocumentUpdateManyWithWhereWithoutPostInputObjectSchema } from "./VehicleDocumentUpdateManyWithWhereWithoutPostInput.schema"
import { VehicleDocumentScalarWhereInputObjectSchema } from "./VehicleDocumentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateManyWithoutPostNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => VehicleDocumentUpsertWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentUpsertWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleDocumentCreateManyPostInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleDocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleDocumentUpdateWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentUpdateWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleDocumentUpdateManyWithWhereWithoutPostInputObjectSchema),
        z.lazy(() => VehicleDocumentUpdateManyWithWhereWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema),
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleDocumentUpdateManyWithoutPostNestedInputObjectSchema = Schema
