import { v4 as uuid } from '@lukeed/uuid'

export default function useModal(key?: string, initialStatus: boolean = false) {
  key ??= uuid()

  const visible = useState(`NUXT_MODAL_${key}`, () => initialStatus)
  const toggle = (value?: boolean) => {
    if (typeof value === 'undefined') {
      visible.value = !visible.value
    } else {
      visible.value = value
    }
  }
  const open = () => toggle(true)
  const close = () => toggle(false)

  return { visible, open, close, toggle }
}
