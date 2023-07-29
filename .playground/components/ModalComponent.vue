<template>
  <NuxtModal @close="$emit('close')" :header="false">
    <template v-slot:content>
      <p>This modal is saved in it's own component, using custom buttons & no header!</p>
    </template>

    <!-- Custom Buttons -->
    <template v-slot:buttons>
      <button class="button button-cancel" @click="$emit('close')">Cancel</button>
      <button class="button button-proceed" @click="$emit('close')">Got it!</button>
    </template>
  </NuxtModal>
</template>

<style scoped>
.button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
}
.button-cancel {
  color: #fff;
  background: #ff4e4e;
}
.button-cancel:hover {
  opacity: 0.7;
}
.button-proceed {
  background: #57c657;
  color: #fff;
}
.button-proceed:hover {
  opacity: 0.7;
}
</style>
