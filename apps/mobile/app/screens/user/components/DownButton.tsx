import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "app/theme"
import React from "react"
import { ViewStyle } from "react-native"
import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler"

interface Props extends BorderlessButtonProps {
  color?: string
  size?: number
}

export function DownButton({ color, size = 34, ...rest }: Props) {
  return (
    <BorderlessButton
      {...rest}
      style={[
        $borderButton,
        {
          left: -size / 1.5,
        },
        rest.style,
      ]}
    >
      <MaterialIcons name="keyboard-arrow-down" size={size} color={color || colors.text} />
    </BorderlessButton>
  )
}

const $borderButton = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
} as ViewStyle
