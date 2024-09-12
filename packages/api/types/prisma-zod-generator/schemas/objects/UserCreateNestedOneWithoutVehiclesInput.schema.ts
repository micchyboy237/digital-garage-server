import { z } from "zod"
import { UserCreateWithoutVehiclesInputObjectSchema } from "./UserCreateWithoutVehiclesInput.schema"
import { UserUncheckedCreateWithoutVehiclesInputObjectSchema } from "./UserUncheckedCreateWithoutVehiclesInput.schema"
import { UserCreateOrConnectWithoutVehiclesInputObjectSchema } from "./UserCreateOrConnectWithoutVehiclesInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutVehiclesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVehiclesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVehiclesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutVehiclesInputObjectSchema = Schema
