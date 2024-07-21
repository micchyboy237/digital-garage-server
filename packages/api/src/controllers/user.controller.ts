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
}
