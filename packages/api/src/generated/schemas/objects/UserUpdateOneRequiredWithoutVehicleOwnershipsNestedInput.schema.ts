import { z } from "zod"
import { UserCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutVehicleOwnershipsInput.schema"
import { UserCreateOrConnectWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateOrConnectWithoutVehicleOwnershipsInput.schema"
import { UserUpsertWithoutVehicleOwnershipsInputObjectSchema } from "./UserUpsertWithoutVehicleOwnershipsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUpdateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedUpdateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedUpdateWithoutVehicleOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVehicleOwnershipsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVehicleOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVehicleOwnershipsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutVehicleOwnershipsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutVehicleOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutVehicleOwnershipsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutVehicleOwnershipsNestedInputObjectSchema = Schema
