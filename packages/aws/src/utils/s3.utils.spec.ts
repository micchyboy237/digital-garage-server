// s3.utils.spec.ts
import { isValidFolderName } from "src/utils/s3.utils"

describe("isValidFolderName", () => {
  it("should return true for valid folder names", () => {
    const validFolders: string[] = [
      "folder",
      "folder/subfolder",
      "folder-subfolder",
      "folder_subfolder",
      "folder123",
      "123folder",
      "folder/sub-folder_123",
    ]

    validFolders.forEach((folder) => {
      expect(isValidFolderName(folder)).toBe(true)
    })
  })

  it("should return false for invalid folder names", () => {
    const invalidFolders: string[] = [
      "/folder",
      "folder/",
      "folder//subfolder",
      "folder/subfolder/",
      "folder\\subfolder",
      "folder?name",
      "folder*name",
      "folder:name",
      "folder<name",
      "folder>name",
      "folder|name",
      'folder"name',
      "folder'name",
      "folder name",
      "folder/sub folder",
    ]

    invalidFolders.forEach((folder) => {
      expect(isValidFolderName(folder)).toBe(false)
    })
  })
})
