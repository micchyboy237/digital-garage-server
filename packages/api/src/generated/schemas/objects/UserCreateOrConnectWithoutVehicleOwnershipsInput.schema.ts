import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutVehicleOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVehicleOwnershipsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutVehicleOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutVehicleOwnershipsInputObjectSchema = Schema
