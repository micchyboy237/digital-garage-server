import { Ionicons } from "@expo/vector-icons"
import { pickImage } from "app/utils/filePicker"
import * as ImageManipulator from "expo-image-manipulator" // Import ImageManipulator
import * as ExpoImagePicker from "expo-image-picker"
import React, { useEffect, useState } from "react"
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { colors } from "../theme"

export interface ImagePickerProps {
  onImageSelected?: (
    file: ExpoImagePicker.ImagePickerAsset | ExpoImagePicker.ImagePickerAsset[],
  ) => void
  containerStyle?: ViewStyle
  children?: React.ReactNode
  size?: number
  value?: string | string[] | null // Adjusted to accept single or multiple values
  icon?: keyof typeof Ionicons.glyphMap
  fullWidth?: boolean // New prop for full width variant
  multiple?: boolean // New prop to enable multiple selection
  allowsEditing?: boolean // New prop to enable image editing
}

export const ImagePicker: React.FC<ImagePickerProps> = ({
  onImageSelected,
  containerStyle,
  children,
  size = 100,
  value = null,
  icon = "person",
  fullWidth = false, // Default value for full width variant
  multiple = false, // Default value for multiple selection
  allowsEditing = false, // Default value for image editing
}) => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(
    Array.isArray(value) ? value : value ? [value] : null,
  )

  useEffect(() => {
    setSelectedImages(Array.isArray(value) ? value : value ? [value] : null)
  }, [value])

  const handlePickImage = async () => {
    const fileAssets = await pickImage({
      allowsEditing,
      allowsMultipleSelection: multiple, // Enables multiple selection if `multiple` is true
    })

    if (fileAssets && fileAssets.length > 0) {
      console.log("Selected images:", fileAssets)

      // Process each image
      const processedImages = await Promise.all(
        fileAssets.map(async (fileAsset) => {
          const compressedImage = await compressImage(fileAsset.uri, fileAsset.fileSize)
          const fileName = fileAsset.fileName || compressedImage.uri.split("/").pop()

          return {
            ...fileAsset,
            fileName,
            uri: compressedImage.uri,
          }
        }),
      )

      setSelectedImages(processedImages.map((img) => img.uri))

      if (onImageSelected) {
        onImageSelected(multiple ? processedImages : processedImages[0])
      }
    }
  }

  const compressImage = async (uri: string, fileSize?: number) => {
    try {
      let compressValue = 1.0
      let compressedImage = await ImageManipulator.manipulateAsync(uri, [], {
        compress: compressValue,
        format: ImageManipulator.SaveFormat.JPEG,
      })

      while (
        compressedImage &&
        compressedImage.uri &&
        compressedImage.width &&
        compressedImage.height
      ) {
        if (fileSize && fileSize <= 100 * 1024) {
          break
        }
        compressValue -= 0.1
        if (compressValue < 0.1) break // Prevent infinite loop and maintain minimum quality
        compressedImage = await ImageManipulator.manipulateAsync(uri, [], {
          compress: compressValue,
          format: ImageManipulator.SaveFormat.JPEG,
        })
      }

      return compressedImage
    } catch (error) {
      console.error("Error compressing image:", error)
      return { uri } // Return original if compression fails
    }
  }

  const removeImage = (index: number) => {
    if (selectedImages) {
      const newImages = selectedImages.filter((_, i) => i !== index)
      setSelectedImages(newImages)
      if (onImageSelected) {
        onImageSelected(newImages)
      }
    }
  }

  const renderImagesGrid = () => {
    const { width: containerWidth } = Dimensions.get("window")
    const minItemSize = 40
    const maxItemSize = 80

    // Calculate the number of columns that fit within the container width
    const numColumns = Math.floor(containerWidth / maxItemSize)
    const itemSize = Math.max(minItemSize, Math.min(containerWidth / numColumns, maxItemSize))

    return (
      <View style={styles.gridContainer}>
        {selectedImages &&
          selectedImages.map((imageUri, index) => (
            <View key={index} style={{ position: "relative", margin: 4 }}>
              <Image
                source={{ uri: imageUri }}
                style={[
                  styles.image,
                  {
                    width: itemSize,
                    height: itemSize,
                    borderRadius: itemSize / 2,
                    resizeMode: "cover",
                  },
                ]}
              />
              {/* Remove Button */}
              <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(index)}>
                <Ionicons name="close-circle" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    )
  }

  return (
    <TouchableOpacity
      onPress={handlePickImage}
      style={[styles.container, containerStyle, fullWidth && styles.fullWidthContainer]}
    >
      <View style={[fullWidth && { width: "100%" }]}>
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius: size / 2 },
            fullWidth && { width: "100%", height: size, borderRadius: 0 },
          ]}
        >
          {selectedImages && selectedImages.length > 0 ? (
            !multiple ? (
              <Image
                source={{ uri: selectedImages[0] }}
                style={[
                  styles.image,
                  { width: size, height: size, borderRadius: size / 2 },
                  fullWidth && {
                    width: "100%",
                    height: size,
                    borderRadius: 0,
                    resizeMode: "cover",
                  },
                ]}
              />
            ) : (
              renderImagesGrid()
            )
          ) : (
            <Ionicons name={icon} size={size / 2} color="white" />
          )}
        </View>
      </View>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  } as ViewStyle,
  fullWidthContainer: {
    width: "100%",
  } as ViewStyle,
  touchable: {
    position: "relative",
  } as ViewStyle,
  image: {} as ImageStyle,
  fullWidthImage: {
    width: "100%",
    height: "auto",
    borderRadius: 0,
  } as ImageStyle,
  placeholder: {
    backgroundColor: colors.palette.neutral500,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  fullWidthPlaceholder: {
    width: "100%",
    height: "auto",
    borderRadius: 0,
  } as ViewStyle,
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.palette.neutral100,
    borderRadius: 12,
    padding: 4,
  } as ViewStyle,
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  } as ViewStyle,
  removeButton: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "white",
    borderRadius: 12,
  } as ViewStyle,
})
