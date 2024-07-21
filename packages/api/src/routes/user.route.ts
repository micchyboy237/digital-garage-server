import { TRPCError } from "@trpc/server"
import { userController } from "../controllers/user.controller"
import { ErrorMessages, ValidationException } from "../exceptions"
import { loginSchema, refreshTokenSchema, registerSchema, verifyEmailSchema } from "../schemas/user.schema"
import { loggedProcedure, t } from "../trpc" // Ensure these imports are correct

export const userRouter = t.router({
  register: loggedProcedure.input(registerSchema).mutation(async ({ input }) => {
    try {
      return await userController.register(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: ErrorMessages.INTERNAL_SERVER_ERROR })
      }
    }
  }),

  login: t.procedure.input(loginSchema).mutation(async ({ input }) => {
    try {
      return await userController.login(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: ErrorMessages.INTERNAL_SERVER_ERROR })
      }
    }
  }),

  verifyEmail: t.procedure.input(verifyEmailSchema).query(async ({ input }) => {
    try {
      return await userController.verifyEmail(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: ErrorMessages.INTERNAL_SERVER_ERROR })
      }
    }
  }),

  refreshToken: t.procedure.input(refreshTokenSchema).mutation(async ({ input }) => {
    try {
      return await userController.refreshToken(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: ErrorMessages.INTERNAL_SERVER_ERROR })
      }
    }
  }),
})
