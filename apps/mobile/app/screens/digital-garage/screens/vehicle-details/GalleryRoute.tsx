import { useNavigation } from "@react-navigation/native"
import { Icon } from "app/components"
import { MediaFile } from "app/models/media-file/MediaFile"
import { trpc } from "app/services/api"
import { colors } from "app/theme"
import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface GalleryRouteProps {
  ownershipId: string
}

const GalleryRoute: React.FC<GalleryRouteProps> = ({ ownershipId }) => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const vehicleGalleryPostsQuery = trpc.me.getVehicleGalleryPosts.useQuery({ ownershipId })

  const { vehiclePosts } = vehicleGalleryPostsQuery.data ?? {}

  const renderFiles = (files: MediaFile[]) => {
    return files.map((file) => {
      return (
        <View key={file.id}>
          <Image
            style={{ width: 120, height: 120, backgroundColor: "#cccccc" }}
            source={{ uri: file.url }}
          />
        </View>
      )
    })
  }

  return (
    <>
      <ScrollView>
        <View>
          {vehiclePosts?.map((post) => (
            <View key={post.id} style={styles.postContainer}>
              <Text>{post.createdAt.toDateString()}</Text>
              <Text style={styles.postTitle}>{post.title}</Text>
              {!!post.description && <Text>{post.description}</Text>}
              {!!post.files?.length && renderFiles(post.files)}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating + Button */}
      <TouchableOpacity
        style={[styles.floatingButton, { bottom: insets.bottom + 30, right: 30 }]}
        onPress={() => navigation.navigate("VehicleGalleryForm")}
      >
        {/* Ionicon */}
        <Icon icon="add" size={40} color="white" />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.palette.primary400,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default GalleryRoute
