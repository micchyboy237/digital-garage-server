import { colors, spacing } from "app/theme"
import { ImagePickerAsset } from "expo-image-picker"
import React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { ImagePicker, ImagePickerProps } from "../ImagePicker"
import { Text, TextProps } from "../Text"

export interface FieldImageProps extends ImagePickerProps {
  status?: "error" | "disabled"
  label?: TextProps["text"]
  LabelTextProps?: TextProps
  helper?: TextProps["text"]
  HelperTextProps?: TextProps
  onChange: (image: ImagePickerAsset) => void
  style?: StyleProp<ViewStyle>
}

export const FieldImage: React.FC<FieldImageProps> = ({
  status,
  label,
  LabelTextProps,
  helper,
  HelperTextProps,
  onChange,
  style,
  ...imagePickerProps
}) => {
  const $containerStyles = [style]
  const $labelStyles = [$labelStyle, LabelTextProps?.style]
  const $helperStyles = [
    $helperStyle,
    status === "error" && { color: colors.error },
    HelperTextProps?.style,
  ]

  return (
    <View style={$containerStyles}>
      {!!label && <Text preset="formLabel" text={label} {...LabelTextProps} style={$labelStyles} />}

      <ImagePicker {...imagePickerProps} onImageSelected={onChange} />

      {!!helper && (
        <Text preset="formHelper" text={helper} {...HelperTextProps} style={$helperStyles} />
      )}
    </View>
  )
}

const $labelStyle: TextStyle = {
  marginBottom: spacing.xs,
}

const $helperStyle: TextStyle = {
  marginTop: spacing.xs,
}
