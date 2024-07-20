import { userService } from "../services/user.service"

export const userController = {
  register: async (input: { email: string; password: string }) => {
    const { email, password } = input
    const user = await userService.register(email, password)
    return { message: "User registered successfully", user }
  },

  verifyEmail: async (emailVerificationCode: string) => {
    const result = await userService.verifyEmail(emailVerificationCode)
    return { message: "Email verified successfully", result }
  },
}
