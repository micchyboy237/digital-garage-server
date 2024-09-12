import auth from "@react-native-firebase/auth"
import { Account } from "app/models/account/Account"
import { Session } from "app/models/session/Session"
import { User } from "app/models/user/User"
import { AuthError } from "app/screens/auth/errors/authErrors"
import { LoginErrorCodes } from "app/screens/auth/errors/errors"
import { AuthState, UseAuthEmailArgs, UseAuthEmailPwReturn } from "app/screens/auth/types"
import { generateFingerprint } from "app/screens/auth/utils"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"

export const useEmailPasswordAuth = (args?: UseAuthEmailArgs): UseAuthEmailPwReturn => {
  const { onSignIn, onSignOut, onRegister } = args || {}
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [error, setError] = useState<AuthError | null>(null)
  const [data, setData] = useState<AuthState | null>(null)

  const signInAsync = async (email: string, password: string): Promise<AuthState> => {
    let authReturn = {} as AuthState
    setLoading(true)
    setError(null)

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password)

      if (!userCredential.user.emailVerified) {
        throw new AuthError({ code: LoginErrorCodes.EMAIL_NOT_VERIFIED })
      }

      const idTokenResult = await userCredential.user.getIdTokenResult()

      const derivedUser = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
      } as User

      const derivedAccount = {
        firebaseUid: userCredential.user.uid,
        provider: "APPLE",
        isEmailVerified: userCredential.user.emailVerified,
        userId: userCredential.user.uid,
      } as Account

      const deviceFingerprint = await generateFingerprint(derivedUser.id)
      const derivedSession = {
        token: idTokenResult.token,
        expiresAt: new Date(idTokenResult.expirationTime),
        deviceFingerprint,
        userId: userCredential.user.uid,
      } as Session

      authReturn = {
        user: derivedUser,
        account: derivedAccount,
        session: derivedSession,
      }

      setSession(derivedSession)
      setUser(derivedUser)
      setData(authReturn)

      onSignIn?.({
        user: derivedUser,
        account: derivedAccount,
        session: derivedSession,
      })
    } catch (error: any) {
      console.log("signInAsync:error\n", error)
      const authError = new AuthError(error)
      setError(authError)
    } finally {
      setLoading(false)
    }

    return authReturn
  }

  const registerAsync = async (email: string, password: string): Promise<AuthState> => {
    let authReturn = {} as AuthState
    setLoading(true)
    setError(null)

    try {
      console.log("AUTH:registerAsync:email\n", email)
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
      console.log("userCredential:\n", JSON.stringify(userCredential, null, 2))
      const idTokenResult = await userCredential.user.getIdTokenResult()

      console.log("idTokenResult:", JSON.stringify(idTokenResult, null, 2))

      const jwtDecodedResult = jwtDecode(idTokenResult.token)
      console.log("\nAUTH:emailpwAuthResponse:jwtDecodedResult\n", jwtDecodedResult)

      const derivedUser = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
      } as User

      const derivedAccount = {
        firebaseUid: userCredential.user.uid,
        provider: "EMAIL_PASSWORD",
        isEmailVerified: userCredential.user.emailVerified,
        userId: userCredential.user.uid,
      } as Account

      const deviceFingerprint = await generateFingerprint(derivedUser.id)
      const derivedSession = {
        token: idTokenResult.token,
        expiresAt: new Date(idTokenResult.expirationTime),
        deviceFingerprint,
        userId: userCredential.user.uid,
      } as Session

      authReturn = {
        user: derivedUser,
        session: derivedSession,
      }

      setSession(derivedSession)
      setUser(derivedUser)
      setData(authReturn)

      console.log("derivedUser:", JSON.stringify(derivedUser, null, 2))
      console.log("derivedSession:", JSON.stringify(derivedSession, null, 2))

      onRegister?.({
        user: derivedUser,
        account: derivedAccount,
        session: derivedSession,
      })
    } catch (error: any) {
      console.error("\nAUTH:registerAsync:error\n", error)
      const authError = new AuthError(error)
      setError(authError)
    } finally {
      setLoading(false)
    }

    return authReturn
  }

  const signOutAsync = async (): Promise<void> => {
    await auth().signOut()
    setUser(null)
    setSession(null)
    setData(null)
    onSignOut?.(user)
  }

  const resetError = () => {
    setError(null)
  }

  return {
    loading,
    user,
    session,
    error,
    data,
    signInAsync,
    signOutAsync,
    registerAsync,
    resetError,
  }
}
