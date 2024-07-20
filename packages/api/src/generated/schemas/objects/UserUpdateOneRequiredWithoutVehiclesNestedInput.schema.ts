import { z } from "zod"
import { UserCreateWithoutVehiclesInputObjectSchema } from "./UserCreateWithoutVehiclesInput.schema"
import { UserUncheckedCreateWithoutVehiclesInputObjectSchema } from "./UserUncheckedCreateWithoutVehiclesInput.schema"
import { UserCreateOrConnectWithoutVehiclesInputObjectSchema } from "./UserCreateOrConnectWithoutVehiclesInput.schema"
import { UserUpsertWithoutVehiclesInputObjectSchema } from "./UserUpsertWithoutVehiclesInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutVehiclesInputObjectSchema } from "./UserUpdateWithoutVehiclesInput.schema"
import { UserUncheckedUpdateWithoutVehiclesInputObjectSchema } from "./UserUncheckedUpdateWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVehiclesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVehiclesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVehiclesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutVehiclesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutVehiclesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutVehiclesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema = Schema
