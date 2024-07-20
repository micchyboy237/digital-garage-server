import { TRPCError } from "@trpc/server"
import { userController } from "../controllers/user.controller"
import { ValidationException } from "../exceptions"
import { userRegistrationSchema } from "../schemas/user.schema"
import { loggedProcedure, t } from "../trpc" // Ensure these imports are correct

export const userRouter = t.router({
  register: loggedProcedure.input(userRegistrationSchema).mutation(async ({ input }) => {
    try {
      return await userController.register(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Internal Server Error" })
      }
    }
  }),
})
