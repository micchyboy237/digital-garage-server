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
import { protectedProcedure, t } from "../trpc"

export const authRouter = t.router({
  register: protectedProcedure.input(registerSchema).mutation(async ({ input }) => {
    try {
      return await userController.register(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  login: protectedProcedure.input(loginSchema).mutation(async ({ input }) => {
    try {
      return await userController.login(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  loginWithGoogle: protectedProcedure.input(loginGoogleSchema).mutation(async ({ input }) => {
    try {
      return await userController.loginWithGoogle(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  verifyEmail: protectedProcedure.input(verifyEmailSchema).query(async ({ input }) => {
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

  refreshToken: protectedProcedure.input(refreshTokenSchema).mutation(async ({ input }) => {
    try {
      return await userController.refreshToken(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resendEmailVerification: protectedProcedure.input(resendEmailVerificationSchema).mutation(async ({ input }) => {
    try {
      return await userController.resendEmailVerification(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  requestPasswordReset: protectedProcedure.input(requestPasswordResetSchema).mutation(async ({ input }) => {
    try {
      return await userController.requestPasswordReset(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resetPassword: protectedProcedure.input(resetPasswordSchema).mutation(async ({ input }) => {
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
