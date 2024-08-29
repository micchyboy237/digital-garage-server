import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutVehiclesInputObjectSchema } from "./UserCreateWithoutVehiclesInput.schema"
import { UserUncheckedCreateWithoutVehiclesInputObjectSchema } from "./UserUncheckedCreateWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVehiclesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutVehiclesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVehiclesInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutVehiclesInputObjectSchema = Schema
