import { prisma } from "@boilerplate/database"
import bcrypt from "bcryptjs"
import { ErrorMessages, ValidationException } from "../exceptions"

export const userService = {
  register: async (email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new ValidationException(ErrorMessages.USER_ALREADY_EXISTS)
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        auth: {
          create: {
            password: hashedPassword,
          },
        },
      },
    })

    return user
  },
}
