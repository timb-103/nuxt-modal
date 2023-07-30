<template>
  <h1>Nuxt Modal Demo</h1>
  <div class="buttons">
    <button @click="openInlineModal">Open Inline Demo Modal</button>
    <button @click="modalComponent.open">Open Component Demo Modal</button>
  </div>

  <!-- Inline Demo -->
  <NuxtModal v-model="isInlineModalOpened">
    <template v-slot:header>Inline Modal</template>
    <template v-slot:content>
      <p>This modal an inline modal, that doesn't need it's own component.</p>
    </template>
  </NuxtModal>

  <!-- Component Demo -->
  <ModalComponent :name="componentModalName" />
</template>

<script setup lang="ts">
// using useModal with same key
const componentModalName = ref('componentModal')
const modalComponent = useModal(componentModalName.value)

// using v-model
const isInlineModalOpened = ref(false)
const openInlineModal = () => (isInlineModalOpened.value = true)
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
