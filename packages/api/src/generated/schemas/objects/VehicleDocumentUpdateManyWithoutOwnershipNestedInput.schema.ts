import { z } from "zod"
import { VehicleDocumentCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedCreateWithoutOwnershipInput.schema"
import { VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateOrConnectWithoutOwnershipInput.schema"
import { VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInput.schema"
import { VehicleDocumentCreateManyOwnershipInputEnvelopeObjectSchema } from "./VehicleDocumentCreateManyOwnershipInputEnvelope.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInput.schema"
import { VehicleDocumentUpdateManyWithWhereWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUpdateManyWithWhereWithoutOwnershipInput.schema"
import { VehicleDocumentScalarWhereInputObjectSchema } from "./VehicleDocumentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateManyWithoutOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleDocumentCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleDocumentUpdateManyWithWhereWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDocumentUpdateManyWithWhereWithoutOwnershipInputObjectSchema).array(),
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

export const VehicleDocumentUpdateManyWithoutOwnershipNestedInputObjectSchema = Schema
