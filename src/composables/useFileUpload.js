import { ref } from 'vue'
import { uploadFileToServer, deleteFileFromServer } from '@/services/api'

export const useFileUpload = () => {
  const isUploading = ref(false)
  const uploadProgress = ref(0)

  const uploadFile = async (file) => {
    isUploading.value = true
    uploadProgress.value = 0

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        if (uploadProgress.value < 90) {
          uploadProgress.value += 10
        }
      }, 200)

      const result = await uploadFileToServer(file)
      
      clearInterval(progressInterval)
      uploadProgress.value = 100

      return {
        id: result.id || Date.now().toString(),
        url: result.url || URL.createObjectURL(file),
        name: file.name,
      }
    } catch (error) {
      console.error('Upload failed:', error)
      throw error
    } finally {
      isUploading.value = false
      uploadProgress.value = 0
    }
  }

  const deleteFile = async (id, url) => {
    try {
      await deleteFileFromServer(id)
      console.log('File deleted:', id)
    } catch (error) {
      console.error('Delete failed:', error)
    }
  }

  return {
    isUploading,
    uploadProgress,
    uploadFile,
    deleteFile,
  }
}