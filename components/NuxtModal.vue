<template>
  <transition name="modal">
    <div v-if="visible">
      <div class="modal-background" @click="handleClose">
        <div class="modal" @click.stop>
          <div class="modal-header left" v-if="header" :class="{ 'modal-no-border': !borders }">
            <slot name="header"></slot>
          </div>

          <div class="modal-body left">
            <slot name="content"></slot>
          </div>

          <!-- Buttons -->
          <div class="modal-buttons" v-if="buttons" :class="{ 'modal-no-border': !borders }">
            <slot name="buttons">
              <button class="button button-cancel" @click="handleClose">Cancel</button>
              <button class="button button-proceed" @click="handleProceed">Yes, Proceed</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string
    modelValue?: boolean
    header?: boolean
    buttons?: boolean
    borders?: boolean
  }>(),
  {
    header: true,
    buttons: true,
    borders: true,
  }
)

const { modelValue } = toRefs(props)

const { open, close, toggle, visible } = useModal(props.name)

const emit = defineEmits<{
  closed: [] // named tuple syntax
  proceed: []
  'update:modelValue': [value: boolean]
}>()

defineExpose({
  open,
  close,
  toggle,
  visible,
})

const handleClose = () => {
  close()
  emit('closed')
}

const handleProceed = () => {
  close()
  emit('proceed')
}

watch(
  modelValue,
  (value, oldValue) => {
    if (value !== oldValue) {
      toggle(value)
    }
  },
  { immediate: true }
)

watch(visible, (value) => {
  emit('update:modelValue', value)
})
</script>

<style scoped>
.modal {
  width: 100%;
  max-height: calc(100dvh);
  overflow-y: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  animation: slideIn 0.2s;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-header {
  padding: 20px 16px;
  font-weight: 600;
  border-bottom: 1px solid lightgrey;
}

.modal-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 16px;
}

.modal-body:deep(p) {
  margin: 0;
  font-size: 15px;
  line-height: 23px;
}

.modal-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  animation: fadeIn 0.2s;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-buttons {
  padding: 16px;
  border-top: 1px solid lightgrey;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

.modal-buttons:deep(button) {
  border-radius: 7px;
}

.modal-no-border {
  border: 0;
}

/** Fallback Buttons */
.button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
}

.button-cancel {
  background: transparent;
}

.button-cancel:hover {
  background: #fafafa;
}

.button-proceed {
  background: #000;
  color: #fff;
}

.button-proceed:hover {
  opacity: 0.7;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0px);
  }
}

@media screen and (min-width: 768px) {
  .modal-background {
    justify-content: flex-start;
  }

  .modal {
    max-width: 400px;
    border-radius: 6px;
    margin: 60px auto 0;
    max-height: calc(100dvh - 120px);
  }
}
</style>
