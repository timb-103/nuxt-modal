<template>
  <h1>Nuxt Modal Demo</h1>
  <div class="buttons">
    <button @click="modal.open('inline')">Open Inline Demo Modal</button>
    <button @click="modal.open('component')">Open Component Demo Modal</button>
  </div>

  <!-- Inline Demo -->
  <NuxtModal
    v-if="modal.visible.value === 'inline'"
    @close="modal.close()"
    @proceed="modal.close()"
  >
    <template v-slot:header>Inline Modal</template>
    <template v-slot:content>
      <p>This modal an inline modal, that doesn't need it's own component.</p>
    </template>
  </NuxtModal>

  <!-- Component Demo -->
  <ModalComponent
    v-if="modal.visible.value === 'component'"
    @close="modal.close()"
    @proceed="modal.close()"
  />
</template>

<script setup lang="ts">
const modal = useModal()
</script>

<style>
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
}
</style>

<style scoped>
button {
  background: lightgrey;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  display: block;
  margin-bottom: 10px;
}
button:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
