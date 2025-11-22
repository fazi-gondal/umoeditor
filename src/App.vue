<template>
  <div id="app">
    <main class="main-content">
      <EditorView />
    </main>
  </div>
</template>

<script setup>
import EditorView from './views/EditorView.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.main-content {
  flex: 1;
  overflow: hidden;
}
</style>