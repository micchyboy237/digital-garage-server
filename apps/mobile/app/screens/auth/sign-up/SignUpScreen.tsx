import { AspectRatioImage } from "app/components/image/AspectRatioImage"
import { useStores } from "app/models"
import { Session } from "app/models/session/Session"
import { LoginErrorCodes } from "app/screens/auth/errors/errors"
import { SignInButton } from "app/screens/auth/SignInButton"
import { useAppleAuth } from "app/screens/auth/useAppleAuth"
import { useAuthActions } from "app/screens/auth/useAuthActions"
import { useEmailPasswordAuth } from "app/screens/auth/useEmailPasswordAuth"
import { useGoogleAuth } from "app/screens/auth/useGoogleAuth"
import { BackButton } from "app/screens/user/components/BackButton"
import { trpc } from "app/services/api"
import React, { ComponentType, FC, useMemo, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Header,
  Icon,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
  Toggle,
} from "../../../components"
import { AppStackScreenProps } from "../../../navigators"
import { colors, spacing } from "../../../theme"

interface SignUpScreenProps extends AppStackScreenProps<"SignUp"> {}

const logoWithText = require("../../../../assets/app-icons/classic-garage.png")

export const SignUpScreen: FC<SignUpScreenProps> = function SignUpScreen(_props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

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

  // const { data: existingUser, error: userError } = trpc.admin.user.findUniqueUser.useQuery({
  //   where: { email },
  // })
  const { sendVerificationEmail } = useAuthActions()

  const handleRegisterEmailPw = async () => {
    const result = await emailpwAuth.registerAsync(email, password)

    // Check if user exists by firebaseUid
    let userMutationResult
    if (result.user) {
      userMutationResult = await userCreateMutation.mutateAsync({
        data: { ...result.user }, // Update user data as necessary
        include: { profile: true, sessions: true, subscription: true },
      })

      const sessionMutationResult = await sessionCreateMutation.mutateAsync({
        data: {
          ...result.session,
        },
        include: { user: true },
        where: { deviceFingerprint: result.session?.deviceFingerprint },
      })

      if (userMutationResult) {
        const { profile, subscription, sessions, ...authUser } = userMutationResult
        authenticationStore.setAuthUser({
          ...authUser,
          profile: profile?.id,
          subscription: subscription?.id,
          sessions: sessions.map((session: Session) => session?.id),
        })
        authenticationStore.setAuthSubscription(subscription)
      }
      if (sessionMutationResult) {
        authenticationStore.setAuthSession(sessionMutationResult)
      }

      authenticationStore.setLoginFormEmail(email)

      _props.navigation.navigate("LoggedIn")
    } else {
      // const existingUser = await fetchExistingUser(email)
      // if (existingUser) {
      //   authenticationStore.setAuthUser({
      //     ...existingUser,
      //     profile: existingUser.profile?.id,
      //     subscription: existingUser.subscription?.id,
      //     sessions: existingUser.sessions?.map((session: Session) => session?.id),
      //   })
      //   authenticationStore.setAuthSubscription(existingUser.subscription)
      //   const deviceFingerprint = await generateFingerprint(existingUser.id)
      //   authenticationStore.setAuthSession(
      //     existingUser.sessions.find((session) => session?.deviceFingerprint === deviceFingerprint),
      //   )
      //   authenticationStore.setAuthProfile(existingUser.profile)
      //   _props.navigation.navigate("LoggedIn")
      // }
    }
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
    <Screen
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={$screenContentContainer}
    >
      {_props.navigation.canGoBack() && (
        <Header
          safeAreaEdges={[]}
          LeftActionComponent={<BackButton onPress={_props.navigation.goBack} />}
        />
      )}

      <View style={$body}>
        <View>
          <AspectRatioImage source={logoWithText} width={180} style={$logo} />

          <Text preset="subheading" style={$enterDetails}>
            Create your account
          </Text>
        </View>

        <View>
          <TextField
            value={email}
            onChangeText={setEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            value={password}
            onChangeText={setPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={true}
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={isAuthPasswordHidden}
            RightAccessory={PasswordRightAccessory}
          />
        </View>
        <View>
          <Toggle
            containerStyle={$checkboxContainer}
            value={isTermsAccepted}
            onValueChange={setIsTermsAccepted}
            variant="checkbox"
            label={
              <Text>
                By registering for Digital Garage, I agree to the{" "}
                <Text
                  onPress={() => alert("Terms of Service")}
                  style={{
                    color: "#BE0E8DDE",
                  }}
                >
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text
                  onPress={() => alert("Privacy Policy")}
                  style={{
                    color: "#BE0E8DDE",
                  }}
                >
                  Privacy Policy
                </Text>
              </Text>
            }
            labelStyle={$checkboxText}
          />
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
            testID="sign-up-button"
            style={$emailButton}
            preset="reversed"
            onPress={handleRegisterEmailPw}
          >
            Sign Up
          </Button>
        </View>
      </View>

      <View style={$footer}>
        <View style={$socialButtonContainer}>
          <SignInButton
            style={$socialButton}
            textStyle={$socialButtonText}
            type="apple"
            onPress={handleLoginSocial("apple")}
            isCreateAccount
          />
          <SignInButton
            style={$socialButton}
            textStyle={$socialButtonText}
            type="google"
            onPress={handleLoginSocial("google")}
            isCreateAccount
          />
        </View>
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-around",
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

const $body: ViewStyle = {
  flex: 3,
  justifyContent: "center",
}

const $footer: ViewStyle = {
  flex: 1,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $checkboxContainer: ViewStyle = {
  marginBottom: spacing.lg,
}

const $checkboxText: TextStyle = {
  marginLeft: spacing.sm,
  color: colors.palette.neutral800,
}

const $emailButton: ViewStyle = {
  marginTop: spacing.xs,
  marginBottom: spacing.sm,
  backgroundColor: "#BE0E8DDE",
}

const $socialButtonContainer: ViewStyle = {}

const $socialButton: ViewStyle = {
  // flex: 1,
  justifyContent: "center",
}

const $socialButtonText: TextStyle = {
  fontSize: 16,
}
