![Nuxt Modal](./.github/og.png)

# Nuxt 3 Modal

[![npm version][npm-version-src]][npm-version-href]
[![Nuxt][nuxt-src]][nuxt-href]

> Custom modal component for Nuxt 3.

- [Open the playground on StackBlitz](https://stackblitz.com/github/timb-103/nuxt-modal/tree/master?file=.playground%2Fapp.vue).

## Features

- 🔧 Fully customizable (colors, functions, slots)
- 🤳🏻 Slides up on mobile
- ✨ Nice fade in/out
- ⚡ Setup in seconds
- ✅ Works for all use cases

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

## Usage (inline modal)

```vue
<template>
  <!-- Inline Modal -->
  <NuxtModal v-model="isModalOpen">
    <template v-slot:header>Inline Modal</template>
    <template v-slot:content>
      <p>This modal an inline modal, that doesn't need it's own component.</p>
    </template>
  </NuxtModal>

  <!-- Open Modal Button-->
  <button @click="openModal">Open Inline Modal</button>
</template>

<script>
const isModalOpen = ref(false)
const openModal = () => (isModalOpen.value = true)
</script>
```

## Usage (component modal)

```vue
<template>
  <!-- Component Modal (components/ModalComponent) -->
  <ModalComponent :name="name" />

  <!-- Open Modal Button-->
  <button @click="modalComponent.open">Open Component Modal</button>
</template>

<script>
const name = ref('myModal')
const modal = useModal(name.value)
</script>
```

That's it, you've got a fully functional modal component in your project. Keep reading to customize the modal to suit your needs.

## Components

### `<NuxtModal />`

The main component used to display modals is `NuxtModal`. Here's the full default configuration:

```js
<template>
  <NuxtModal
    v-model // boolean with visible value
    :name="'modalName'"
    :header="true"
    :buttons="true"
    :borders="true"
    @close="modal.close()"
    @proceed="modal.close()"
  />
</template>
```

## Composables

### `useModal()`

You can access your modals anywhere in your app as we store the data with useState().

**Example**

```js
const { open, close, toggle, visible } = useModal('modalName')
```

## Slots

- `header`: shown at the top of the modal
- `content`: main content of the modal
- `buttons`: close/proceed buttons, if you don't add any we'll show a cancel & proceed button fallback

**Example**

```vue
<NuxtModal>
  <template v-slot:header></template>
  <template v-slot:content></template>
  <template v-slot:buttons></template>
</NuxtModal>
```

## Props

| Prop      | Type      | Default | Description                                 |
| --------- | --------- | ------- | ------------------------------------------- |
| `v-model` | `boolean` | `false` | the visibility of the modal                 |
| `name`    | `string`  | ``      | (optional) the unique name of the modal     |
| `header`  | `boolean` | `true`  | show/hide the modal header                  |
| `buttons` | `boolean` | `true`  | show/hide the modal buttons                 |
| `borders` | `boolean` | `true`  | show/hide the modal header & button borders |

## Events

### `closed`

Fired when the users clicks the cancel button, or the modal background.

**Example**

```vue
<NuxtModal @close="doSomething()" />
```

### `proceed`

Fired when the user accepts the modal. You can put any function in here to do something based on what the modal is for.

**Example**

```vue
<NuxtModal @proceed="doSomething()" />
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-modal/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-modal
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-modal.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-modal
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
