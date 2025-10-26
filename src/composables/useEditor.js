import { ref } from 'vue'

export const useEditor = () => {
  const editorInstance = ref(null)
  const content = ref('')
  const isLoading = ref(false)

  const setEditorInstance = (instance) => {
    editorInstance.value = instance
  }

  const getContent = () => {
    return content.value
  }

  const setContent = (newContent) => {
    content.value = newContent
  }

  const clearContent = () => {
    content.value = ''
  }

  return {
    editorInstance,
    content,
    isLoading,
    setEditorInstance,
    getContent,
    setContent,
    clearContent,
  }
}