import { TRPCError } from "@trpc/server"
import { userController } from "../controllers/user.controller"
import { ValidationException } from "../exceptions"
import {
  loginGoogleSchema,
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  requestPasswordResetSchema,
  resendEmailVerificationSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../schemas/user.schema"
import { loggedProcedure, t } from "../trpc"

export const userRouter = t.router({
  register: loggedProcedure.input(registerSchema).mutation(async ({ input }) => {
    try {
      return await userController.register(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  login: t.procedure.input(loginSchema).mutation(async ({ input }) => {
    try {
      return await userController.login(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  loginWithGoogle: t.procedure.input(loginGoogleSchema).mutation(async ({ input }) => {
    try {
      return await userController.loginWithGoogle(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  verifyEmail: t.procedure.input(verifyEmailSchema).query(async ({ input }) => {
    try {
      return await userController.verifyEmail(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      } else {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Internal Server Error" })
      }
    }
  }),

  refreshToken: t.procedure.input(refreshTokenSchema).mutation(async ({ input }) => {
    try {
      return await userController.refreshToken(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resendEmailVerification: t.procedure.input(resendEmailVerificationSchema).mutation(async ({ input }) => {
    try {
      return await userController.resendEmailVerification(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  requestPasswordReset: t.procedure.input(requestPasswordResetSchema).mutation(async ({ input }) => {
    try {
      return await userController.requestPasswordReset(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resetPassword: t.procedure.input(resetPasswordSchema).mutation(async ({ input }) => {
    try {
      return await userController.resetPassword(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),
})
