import appleAuth from "@invertase/react-native-apple-authentication"
import auth from "@react-native-firebase/auth"
import { Account } from "app/models/account/Account"
import { Session } from "app/models/session/Session"
import { User } from "app/models/user/User"
import { AuthState, UseAuthArgs, UseAuthReturn } from "app/screens/auth/types"
import { generateFingerprint } from "app/screens/auth/utils"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"

export const useAppleAuth = (args?: UseAuthArgs): UseAuthReturn => {
  const { onSignIn, onSignOut } = args || {}
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  const signInAsync = async (): Promise<{
    user: User | null
    session: Session | null
  }> => {
    let appleAuthReturn = {} as AuthState
    console.log("\nAUTH:signInAsync")
    setLoading(true)

    try {
      const appleAuthResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      })
      console.log("\nAUTH:appleAuthResponse\n", JSON.stringify(appleAuthResponse, null, 2))
      // other fields are available, but full name is not
      const { email, email_verified, is_private_email, sub } = jwtDecode(
        appleAuthResponse.identityToken,
      )
      console.log("\nAUTH:appleAuthResponse:email\n", {
        email,
        email_verified,
        is_private_email,
        sub,
      })

      if (!appleAuthResponse.identityToken) {
        throw new Error("Apple Sign-In failed - no identity token returned")
      }

      const { identityToken, nonce } = appleAuthResponse
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)

      // Sign the user in with the credential
      const userCredential = await auth().signInWithCredential(appleCredential)
      console.log("\nAUTH:signInAsync:userCredential\n", JSON.stringify(userCredential, null, 2))

      const idTokenResult = await userCredential.user.getIdTokenResult()

      const derivedUser = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        firstName: appleAuthResponse.fullName?.givenName || undefined,
        lastName: appleAuthResponse.fullName?.familyName || undefined,
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

      appleAuthReturn = {
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
        account: derivedAccount,
        session: derivedSession,
      })
    } catch (error) {
      console.error("\nAUTH:signInAsync:error\n", error)
    }

    return appleAuthReturn
  }

  const signOutAsync = async (): Promise<void> => {
    console.log("\nAUTH:signOutAsync")

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
