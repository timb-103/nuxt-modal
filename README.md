# Nuxt 3 Modal

Custom modal component for Nuxt 3.

- 🔧 Fully customizable
- 🤳🏻 Slides up on mobile
- ✨ Nice transitions

![Modal Example](https://i.ibb.co/NygxQr5/image-2023-07-29-174436482.png)

[Open the playground on StackBlitz](https://stackblitz.com/github/timb-103/nuxt-modal/tree/master?file=.playground%2Fapp.vue).

## Install

Install the layer:

```sh
npm i -D nuxt-modal
```

Add the layer in the `extends` array in `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  extends: ['nuxt-modal'],
})
```

## Usage

In your script, you should define the useModal() composable

```vue
<script setup lang="ts">
const modal = useModal()
</script>
```

Then, in your template add your modal, here's 2 example:

```vue
<template>
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
```

Then, to open your modal simply use the useModal() composable's open() function:

```vue
<template>
  <div class="buttons">
    <button @click="modal.open('modal-name')">Open Modal</button>
  </div>
</template>

<!-- or, in the script -->
<script>
modal.open('modal-name')
</script>
```

## Composables

**`useModal`**

The useModal composable can be used to open & close the modal, as well as passing data to the modal if you need.

## Slots

**`header`**

Shown at the top of the modal. Best to just display a title.

---

**`content`**

The main content of the modal.

---

**`buttons`**

The buttons to show in the bottom of the modal. If you don't add any, we'll show a cancel & proceed button as the fallback.

## Components

**`NuxtModal`**

The main component used to display modals. Here's the full default configuration:

```js
<template>
  <NuxtModal
    :header="true"
    :buttons="true"
    :borders="true"
    @close="modal.close()"
    @proceed="modal.close()" // or do something else
  />
</template>
```

---

**Props**

`header`

show/hide the modal header

---

`buttons`

show/hide the modal buttons

---

`borders`

show/hide the header & button borders

---

**Events**

`close`

Fired when the users clicks the cancel button, or the modal background. You just want to use the composable function `modal.close()` in here.

`proceed`

Fired when the user accepts the modal. You can put any function in here to do something based on what the modal is for.
