import { TRPCError } from "@trpc/server"
import { userController } from "../controllers/user.controller"
import { ValidationException } from "../exceptions"
import { loginOrRegisterSchema } from "../schemas/auth.schema"
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
import { createOrUpdateAccount, createOrUpdateSession, createOrUpdateUser } from "../services/model.service"
import { publicProcedure, t } from "../trpc"

export const authRouter = t.router({
  loginOrRegister: publicProcedure.input(loginOrRegisterSchema).mutation(async ({ ctx, input }) => {
    try {
      const user = await createOrUpdateUser(input)
      const account = await createOrUpdateAccount(input, user.id)
      const session = await createOrUpdateSession({ ...input, accountId: account.id }, user.id)
      return { user, account, session }
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  register: publicProcedure.input(registerSchema).mutation(async ({ input }) => {
    try {
      return await userController.register(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  login: publicProcedure.input(loginSchema).mutation(async ({ input }) => {
    try {
      return await userController.login(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  loginWithGoogle: publicProcedure.input(loginGoogleSchema).mutation(async ({ input }) => {
    try {
      return await userController.loginWithGoogle(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  verifyEmail: publicProcedure.input(verifyEmailSchema).query(async ({ input }) => {
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

  refreshToken: publicProcedure.input(refreshTokenSchema).mutation(async ({ input }) => {
    try {
      return await userController.refreshToken(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resendEmailVerification: publicProcedure.input(resendEmailVerificationSchema).mutation(async ({ input }) => {
    try {
      return await userController.resendEmailVerification(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  requestPasswordReset: publicProcedure.input(requestPasswordResetSchema).mutation(async ({ input }) => {
    try {
      return await userController.requestPasswordReset(input)
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      throw error
    }
  }),

  resetPassword: publicProcedure.input(resetPasswordSchema).mutation(async ({ input }) => {
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
