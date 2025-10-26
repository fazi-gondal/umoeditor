import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const uploadFileToServer = async (file) => {
  const formData = new FormData()
  formData.append('file', file)

  // Simulate API call for demo
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        name: file.name,
      })
    }, 1500)
  })

  // Uncomment for real API
  // const response = await apiClient.post('/upload', formData, {
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // })
  // return response.data
}

export const deleteFileFromServer = async (fileId) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 500)
  })

  // Uncomment for real API
  // const response = await apiClient.delete(`/files/${fileId}`)
  // return response.data
}

export default apiClient