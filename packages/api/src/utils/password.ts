import bcrypt from "bcryptjs"

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10)
}

export const comparePasswords = (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash)
