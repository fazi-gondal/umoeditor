import apiClient from './api'

export const saveDocument = async (documentData) => {
  try {
    // Simulate save
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Document saved:', documentData)
        resolve({
          success: true,
          id: Date.now().toString(),
          savedAt: new Date().toISOString(),
        })
      }, 1000)
    })

    // Uncomment for real API
    // const response = await apiClient.post('/documents', documentData)
    // return response.data
  } catch (error) {
    console.error('Save document error:', error)
    throw error
  }
}

export const loadDocument = async (documentId) => {
  try {
    const response = await apiClient.get(`/documents/${documentId}`)
    return response.data
  } catch (error) {
    console.error('Load document error:', error)
    throw error
  }
}

export const deleteDocument = async (documentId) => {
  try {
    const response = await apiClient.delete(`/documents/${documentId}`)
    return response.data
  } catch (error) {
    console.error('Delete document error:', error)
    throw error
  }
}