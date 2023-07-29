export default function useModal() {
  const visible = ref("")
  const data = ref<any>()

  function open(type: string, value: any = {}) {
    data.value = value
    visible.value = type
  }

  function close() {
    visible.value = ""
    data.value = false
  }

  return { data, visible, open, close }
}
