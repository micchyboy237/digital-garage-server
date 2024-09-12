import { Account } from "app/models/account/Account"
import { Session } from "app/models/session/Session"
import { User } from "app/models/user/User"
import { AuthError } from "app/screens/auth/errors/authErrors"

export interface AuthState {
  user: User
  session: Session
  account: Account
}
export interface UseAuthArgs {
  onSignIn?: (state: AuthState) => void
  onSignOut?: (user: User) => void
}

export interface UseAuthEmailArgs {
  onSignIn?: (state: AuthState) => void
  onRegister?: (state: AuthState) => void
  onSignOut?: (user: User) => void
}

export interface UseAuthReturn {
  loading: boolean
  user: User
  session: Session
  error: AuthError
  data: AuthState
  signInAsync: () => Promise<AuthState>
  signOutAsync: () => Promise<void>
  resetError: () => void
}

export interface UseAuthEmailPwReturn {
  loading: boolean
  user: User
  session: Session
  error: AuthError
  data: AuthState
  signInAsync: (email: string, password: string) => Promise<AuthState>
  signOutAsync: () => Promise<void>
  registerAsync: (email: string, password: string) => Promise<AuthState>
  resetError: () => void
}
