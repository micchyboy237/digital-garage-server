import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Button, Field, Header, Screen } from "app/components"
import { upsertVehicleGalleryPost } from "app/screens/digital-garage/screens/vehicle-details/vehicle-gallery-form/api"
import { DownButton } from "app/screens/user/components/DownButton"
import { colors, spacing } from "app/theme"
import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { z } from "zod"

// Zod schema for validation
const vehicleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  files: z.array(
    z.object({
      uri: z.string(),
      fileName: z.string(),
      mimeType: z.string(),
    }),
  ),
})

type VehicleData = z.infer<typeof vehicleSchema>

export const VehicleGalleryForm: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  // Get ownershipId from route params
  const ownershipId = route.params?.ownershipId
  const isEdit = !!ownershipId

  // Initialize form methods with zod resolver
  const methods = useForm<VehicleData>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      title: "",
      description: "",
      files: [],
    },
  })

  const {
    getValues,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = methods

  const onSubmit = async (formValues: VehicleData) => {
    console.log("Form submitted with data:", formValues)

    // Prepare data to be sent to the backend
    const formData = new FormData()
    if (formValues.files) {
      formValues.files.forEach((file) => {
        formData.append(`files[]`, {
          uri: file.uri,
          name: file.fileName,
          type: file.mimeType,
        })
      })
      formData.append("title", formValues.title)
      if (formValues.description) {
        formData.append("description", formValues.description)
      }

      // Call the API to upload the vehicle details
      await upsertVehicleGalleryPost(formData)
    }
  }

  console.log("Errors:", errors)
  console.log("Values:", getValues())

  return (
    <FormProvider {...methods}>
      <Screen
        safeAreaEdges={["top", "bottom"]}
        preset="scroll"
        contentContainerStyle={styles.contentContainer}
      >
        {navigation.canGoBack() && (
          <Header
            title={!isEdit ? "Add Vehicle" : "Edit Vehicle"}
            LeftActionComponent={<DownButton onPress={navigation.goBack} />}
            safeAreaEdges={[]}
            containerStyle={[
              {
                backgroundColor: "transparent",
                // position: "absolute",
                paddingHorizontal: spacing.md,
                justifyContent: "flex-start",
              },
            ]}
          />
        )}
        {/* Registration Number Input with Search */}

        {loading && <ActivityIndicator animating color={colors.palette.primary400} />}

        <View style={styles.formContainer}>
          <Field label="Title" name="title" style={styles.input} />
          <Field label="Description" name="description" style={styles.input} />
          <Field label="Add Photos" name="files" type="image" icon="image" fullWidth multiple />

          {/* More Fields as needed */}
          <Button onPress={handleSubmit(onSubmit)} style={styles.button}>
            Submit
          </Button>
        </View>
      </Screen>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: spacing.md,
  },
  formContainer: {
    marginTop: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
})
