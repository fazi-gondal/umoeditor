<template>
  <div class="umo-editor-wrapper">
    <umo-editor ref="editorRef" v-bind="editorConfig" @created="onEditorCreated" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { UmoEditor } from '@umoteam/editor'
import { useEditor } from '../../composables/useEditor'
import { useFileUpload } from '../../composables/useFileUpload'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['save', 'change'])

const editorRef = ref(null)
const { uploadFile, deleteFile } = useFileUpload()

const editorConfig = ref({
  ...props.options,
  onSave: async (content, page, document) => {
    emit('save', { content, page, document })
    return { success: true }
  },
  onFileUpload: async (file) => {
    return await uploadFile(file)
  },
  onFileDelete: (id, url) => {
    deleteFile(id, url)
  }
})

const onEditorCreated = (editor) => {
  console.log('UmoEditor created')
  // Automatically toggle fullscreen when editor is created
  setTimeout(() => {
    if (editorRef.value && editorRef.value.toggleFullscreen) {
      editorRef.value.toggleFullscreen()
      console.log('Editor set to fullscreen mode')
    }
  }, 100)
}

onMounted(() => {
  console.log('UmoEditor mounted')
})
</script>

<style scoped>
.umo-editor-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>