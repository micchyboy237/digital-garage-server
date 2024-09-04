import { z } from "zod"
import { UserUpdateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUpdateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedUpdateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedUpdateWithoutVehicleOwnershipsInput.schema"
import { UserCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateWithoutVehicleOwnershipsInput.schema"
import { UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutVehicleOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutVehicleOwnershipsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutVehicleOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVehicleOwnershipsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutVehicleOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVehicleOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutVehicleOwnershipsInputObjectSchema = Schema
