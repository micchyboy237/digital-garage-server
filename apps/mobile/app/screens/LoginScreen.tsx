import { useNavigation } from "@react-navigation/native"
import { AspectRatioImage } from "app/components/image/AspectRatioImage"
import { LoginErrorCodes } from "app/screens/auth/errors/errors"
import { SignInButton } from "app/screens/auth/SignInButton"
import { useAppleAuth } from "app/screens/auth/useAppleAuth"
import { useAuthActions } from "app/screens/auth/useAuthActions"
import { useEmailPasswordAuth } from "app/screens/auth/useEmailPasswordAuth"
import { useGoogleAuth } from "app/screens/auth/useGoogleAuth"
import { trpc } from "app/services/api"
import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

const logoWithText = require("../../assets/app-icons/classic-garage.png")

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const navigation = useNavigation()
  const authPasswordInput = useRef<TextInput>(null)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)

  const { authenticationStore } = useStores()

  const emailpwAuth = useEmailPasswordAuth()
  const appleAuth = useAppleAuth()
  const googleAuth = useGoogleAuth()
  const userCreateMutation = trpc.admin.user.createOneUser.useMutation()
  const userUpdateMutation = trpc.admin.user.updateOneUser.useMutation()
  const sessionCreateMutation = trpc.admin.session.createOneSession.useMutation()
  const sessionUpdateMutation = trpc.admin.session.updateOneSession.useMutation()
  const profileCreateMutation = trpc.admin.profile.createOneProfile.useMutation()

  const loginOrRegister = trpc.auth.loginOrRegister.useMutation()

  const { sendVerificationEmail } = useAuthActions()

  // useEffect(() => {
  //   signOutAsync()
  // }, [])

  const [authEmail, setAuthEmail] = useState<string>("")
  const [authPassword, setAuthPassword] = useState<string>("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail(authenticationStore.loginForm.email)
    setAuthPassword("")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      // setAuthEmail("")
    }
  }, [authenticationStore.loginForm.email])

  // const error = isSubmitted ? validationError : ""

  const handleLoginEmailPw = async () => {
    const result = await emailpwAuth.signInAsync(authEmail, authPassword)
    console.log(`handleLoginEmailPw (Email/PW):\n`, JSON.stringify(result, null, 2))
    const { account, user, session } = await loginOrRegister.mutateAsync({
      email: result.user.email,
      provider: result.account.provider,
      deviceFingerprint: result.session.deviceFingerprint,
      token: result.session.token,
      expiresAt: result.session.expiresAt,
      firebaseUid: result.account.firebaseUid,
      isEmailVerified: result.account.isEmailVerified,
    })
    console.log("handleLoginEmailPw result:\n", JSON.stringify({ account, user, session }, null, 2))
    authenticationStore.setAuthAccount(account)
    authenticationStore.setAuthUser({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      displayPictureId: user.displayPictureId,
      location: user.location,
      accountStatus: user.accountStatus,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })
    authenticationStore.setAuthSession(session)
    _props.navigation.reset({
      index: 0,
      routes: [{ name: "LoggedIn" }],
    })
  }

  const handleLoginSocial = (provider: "apple" | "google") => async () => {
    const result =
      provider === "apple" ? await appleAuth.signInAsync() : await googleAuth.signInAsync()
    console.log(
      `handleLoginSocial (${provider}):\n`,
      JSON.stringify(
        {
          email: result.user.email,
          deviceFingerprint: result.session.deviceFingerprint,
          token: result.session.token,
          expiresAt: result.session.expiresAt,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
        },
        null,
        2,
      ),
    )
    const { account, user, session } = await loginOrRegister.mutateAsync({
      email: result.user.email,
      provider: result.account.provider,
      deviceFingerprint: result.session.deviceFingerprint,
      token: result.session.token,
      expiresAt: result.session.expiresAt,
      firebaseUid: result.account.firebaseUid,
      isEmailVerified: result.account.isEmailVerified,
      firstName: result.user.firstName,
      lastName: result.user.lastName,
    })
    console.log("handleLoginSocial result:\n", JSON.stringify({ account, user, session }, null, 2))
    authenticationStore.setAuthAccount(account)
    authenticationStore.setAuthUser({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      displayPictureId: user.displayPictureId,
      location: user.location,
      accountStatus: user.accountStatus,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })
    authenticationStore.setAuthSession(session)
    _props.navigation.reset({
      index: 0,
      routes: [{ name: "LoggedIn" }],
    })
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen preset="scroll" contentContainerStyle={$screenContentContainer}>
      <View>
        <AspectRatioImage source={logoWithText} width={170} style={$logo} />

        <Text preset="subheading" style={$enterDetails}>
          Login to your account
        </Text>
      </View>

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        label="Email"
        placeholder="Email"
        // helper={error}
        // status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        label="Password"
        placeholder="Password"
        onSubmitEditing={handleLoginEmailPw}
        RightAccessory={PasswordRightAccessory}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: spacing.lg,
        }}
      >
        {/* <Toggle
          containerStyle={$checkboxContainer}
          value={isTermsAccepted}
          onValueChange={setIsTermsAccepted}
          variant="checkbox"
          label={<Text style={$checkboxText}>Remember me</Text>}
        /> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword")
          }}
        >
          <Text style={$forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {emailpwAuth.error && (
        <View
          style={{
            marginBottom: spacing.sm,
            flexDirection: "row",
            justifyContent: "center",
            gap: spacing.xxs,
          }}
        >
          <Text
            style={{
              color: colors.error,
            }}
          >
            {emailpwAuth.error.message}
          </Text>
          {emailpwAuth.error.code === LoginErrorCodes.EMAIL_NOT_VERIFIED && (
            <Text
              style={{ color: colors.error, textDecorationLine: "underline" }}
              onPress={async () => {
                await sendVerificationEmail()
                console.log("Sent verification email!!")
                emailpwAuth.resetError()
              }}
            >
              Resend link
            </Text>
          )}
        </View>
      )}

      <Button
        testID="login-button"
        style={$emailButton}
        preset="reversed"
        onPress={handleLoginEmailPw}
      >
        Log In
      </Button>

      <View style={$socialButtonContainer}>
        <SignInButton
          style={$socialButton}
          textStyle={$socialButtonText}
          type="apple"
          onPress={handleLoginSocial("apple")}
        />
        <SignInButton
          style={$socialButton}
          textStyle={$socialButtonText}
          type="google"
          onPress={handleLoginSocial("google")}
        />
      </View>

      <Text style={$userPrompt}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp")
        }}
      >
        <Text style={$userButton}>Sign up</Text>
      </TouchableOpacity>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $logo: ViewStyle = {
  alignSelf: "center",
  marginBottom: spacing.lg,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
  textAlign: "center",
  fontSize: 24,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $checkboxContainer: ViewStyle = {
  flex: 1,
}

const $checkboxText: TextStyle = {
  fontSize: 16,
  color: colors.palette.neutral800,
}

const $forgotPasswordText: TextStyle = {
  fontSize: 16,
  color: "#BE0E8DDE",
  fontWeight: "bold",
}

const $emailButton: ViewStyle = {
  marginTop: spacing.xs,
  marginBottom: spacing.sm,
  backgroundColor: "#BE0E8DDE",
}
const $socialButtonContainer: ViewStyle = {}

const $socialButton: ViewStyle = {
  minHeight: 48,
  // flex: 1,
  justifyContent: "center",
}

const $socialButtonText: TextStyle = {
  fontSize: 16,
}

const $userPrompt: TextStyle = {
  marginTop: spacing.xxl,
  textAlign: "center",
  color: colors.palette.neutral800,
}

const $userButton: TextStyle = {
  textAlign: "center",
  color: "#BE0E8DDE",
  fontWeight: "bold",
}
