import { z } from "zod"
import { UserCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutVehicleOwnershipsInput.schema"
import { UserCreateOrConnectWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateOrConnectWithoutVehicleOwnershipsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutVehicleOwnershipsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVehicleOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVehicleOwnershipsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutVehicleOwnershipsInputObjectSchema = Schema
