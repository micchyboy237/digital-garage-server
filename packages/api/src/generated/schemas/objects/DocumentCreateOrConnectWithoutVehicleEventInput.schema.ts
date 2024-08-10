import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentCreateWithoutVehicleEventInputObjectSchema } from "./DocumentCreateWithoutVehicleEventInput.schema"
import { DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedCreateWithoutVehicleEventInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutVehicleEventInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutVehicleEventInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutVehicleEventInputObjectSchema = Schema
