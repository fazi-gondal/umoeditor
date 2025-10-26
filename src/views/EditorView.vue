<template>
  <div class="editor-view">
    <UmoEditorWrapper 
      :options="editorOptions"
      @save="handleSave"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UmoEditorWrapper from '@/components/Editor/UmoEditorWrapper.vue'
import { getEditorConfig } from '@/config/editorConfig'
import { saveDocument } from '@/services/documentService'

const editorOptions = ref(getEditorConfig())

const handleSave = async (data) => {
  try {
    const result = await saveDocument(data)
    console.log('Document saved:', result)
  } catch (error) {
    console.error('Save error:', error)
  }
}

const handleChange = (content) => {
  console.log('Content changed:', content)
}
</script>

<style scoped>
.editor-view {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>