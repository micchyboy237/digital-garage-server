import bcrypt from "bcryptjs"

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10)
}

export const generateCode = (): string => {
  return Math.random().toString(36).substring(2, 15)
}

export const generateExpiry = (hours: number): Date => {
  return new Date(Date.now() + hours * 60 * 60 * 1000)
}
