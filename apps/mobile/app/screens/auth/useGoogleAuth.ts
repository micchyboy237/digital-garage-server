import auth from "@react-native-firebase/auth"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { Account } from "app/models/account/Account"
import { Session } from "app/models/session/Session"
import { User } from "app/models/user/User"
import { AuthState, UseAuthArgs, UseAuthReturn } from "app/screens/auth/types"
import { generateFingerprint } from "app/screens/auth/utils"
import { useState } from "react"

GoogleSignin.configure({
  scopes: ["profile", "email"],
  webClientId: "499406615424-d4elcpkl46pmlnpbo2r6p4daf2avhkbs.apps.googleusercontent.com",
})

export const useGoogleAuth = (args?: UseAuthArgs): UseAuthReturn => {
  const { onSignIn, onSignOut } = args || {}
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  const signInAsync = async (): Promise<{
    user: User | null
    session: Session | null
  }> => {
    let googleAuthReturn = {} as AuthState
    setLoading(true)

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const userCredential = await auth().signInWithCredential(googleCredential)
      console.log("\nAUTH:signInAsync:userCredential\n", JSON.stringify(userCredential, null, 2))

      const idTokenResult = await userCredential.user.getIdTokenResult()

      const derivedUser = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        firstName: userCredential.additionalUserInfo?.profile?.given_name,
        lastName: userCredential.additionalUserInfo?.profile?.family_name,
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

      googleAuthReturn = {
        user: derivedUser,
        account: derivedAccount,
        session: derivedSession,
      }

      setSession(derivedSession)
      setUser(derivedUser)

      console.log("\nAUTH:signInAsync:derivedSession\n", JSON.stringify(derivedSession, null, 2))
      console.log("\nAUTH:signInAsync:derivedUser\n", JSON.stringify(derivedUser, null, 2))

      onSignIn?.({
        user: derivedUser,
        session: derivedSession,
        account: derivedAccount,
      })
    } catch (error) {
      console.error("\nAUTH:signInAsync:error\n", error)
    }

    setLoading(false)
    return googleAuthReturn
  }

  const signOutAsync = async (): Promise<void> => {
    await GoogleSignin.signOut()
    setUser(null)
    setSession(null)
    onSignOut?.(user)
  }

  return {
    loading,
    user,
    session,
    signInAsync,
    signOutAsync,
  }
}
