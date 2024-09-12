import { clientUtils } from "app/services/api"
import { apiClient } from "app/services/api/apiClient"

// Specific function for uploading vehicle details using the generic API client
export const upsertVehicleGalleryPost = async (formData: FormData) => {
  await apiClient("/trpc/me.upsertVehicleGalleryPost", "POST", formData)
  await clientUtils.me.getVehicleGalleryPosts.invalidate()
}
