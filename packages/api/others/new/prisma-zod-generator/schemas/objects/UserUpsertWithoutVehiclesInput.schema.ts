import { z } from "zod"
import { UserUpdateWithoutVehiclesInputObjectSchema } from "./UserUpdateWithoutVehiclesInput.schema"
import { UserUncheckedUpdateWithoutVehiclesInputObjectSchema } from "./UserUncheckedUpdateWithoutVehiclesInput.schema"
import { UserCreateWithoutVehiclesInputObjectSchema } from "./UserCreateWithoutVehiclesInput.schema"
import { UserUncheckedCreateWithoutVehiclesInputObjectSchema } from "./UserUncheckedCreateWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutVehiclesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutVehiclesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVehiclesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutVehiclesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVehiclesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutVehiclesInputObjectSchema = Schema
