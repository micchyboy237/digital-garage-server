import { Profile } from "app/models/profile/Profile"
import { Session } from "app/models/session/Session"
import { User } from "app/models/user/User"
import { AuthError } from "app/screens/auth/errors/authErrors"

export interface UseAuthArgs {
  onSignIn?: (state: { user: User; session: Session; profile: Profile }) => void
  onSignOut?: (user: User | null) => void
}

export interface UseAuthEmailArgs {
  onSignIn?: (state: { user: User; session: Session }) => void
  onRegister?: (state: { user: User; session: Session }) => void
  onSignOut?: (user: User | null) => void
}

export interface UseAuthReturn {
  loading: boolean
  user: User | null
  session: Session | null
  error: AuthError | null
  data: {
    user: User | null
    session: Session | null
  } | null
  signInAsync: () => Promise<{
    user: User | null
    session: Session | null
    profile: Profile | null
  }>
  signOutAsync: () => Promise<void>
  resetError: () => void
}

export interface UseAuthEmailPwReturn {
  loading: boolean
  user: User | null
  session: Session | null
  error: AuthError | null
  data: {
    user: User | null
    session: Session | null
  } | null
  signInAsync: (
    email: string,
    password: string,
  ) => Promise<{
    user: User | null
    session: Session | null
  }>
  signOutAsync: () => Promise<void>
  registerAsync: (
    email: string,
    password: string,
  ) => Promise<{
    user: User | null
    session: Session | null
  }>
  resetError: () => void
}
