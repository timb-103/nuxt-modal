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

/**
 * Simple function to generate a random id for the modal.
 * @param length - length of the id string
 */
function uuid(length: number = 30) {
  let string = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    string += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return string
}
