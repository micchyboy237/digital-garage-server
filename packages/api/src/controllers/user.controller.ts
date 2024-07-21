import { userService } from "../services/user.service"

export const userController = {
  register: async (input: { email: string; password: string }) => {
    const { email, password } = input
    const user = await userService.register(email, password)
    return { message: "User registered successfully", user }
  },

  login: async (input: { email: string; password: string }) => {
    const { email, password } = input
    const result = await userService.login(email, password)
    return { message: "Login successful", ...result }
  },

  loginWithGoogle: async (input: { idToken: string }) => {
    const { idToken } = input
    const result = await userService.loginWithGoogle(idToken)
    return { message: "Login successful", ...result }
  },

  verifyEmail: async (input: { code: string }) => {
    const { code } = input
    const result = await userService.verifyEmail(code)
    return { message: "Email verified successfully", result }
  },

  refreshToken: async (input: { refreshToken: string }) => {
    const { refreshToken } = input
    const result = await userService.refreshToken(refreshToken)
    return { message: "Token refreshed successfully", ...result }
  },

  resendEmailVerification: async (input: { email: string }) => {
    const { email } = input
    await userService.resendEmailVerification(email)
    return { message: "Verification email resent successfully" }
  },

  requestPasswordReset: async (input: { email: string }) => {
    const { email } = input
    await userService.requestPasswordReset(email)
    return { message: "Password reset email sent successfully" }
  },

  resetPassword: async (input: { token: string; newPassword: string }) => {
    const { token, newPassword } = input
    const result = await userService.resetPassword(token, newPassword)
    return { message: "Password reset successfully", result }
  },
}
