export const validatePassword = (password: string): boolean => {
  const minLength = 8
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  return password.length >= minLength && hasSpecialChar
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
