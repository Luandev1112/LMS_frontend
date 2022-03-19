<template>
  <div class="antialiased text-gray-900">
    <nuxt />
    <web-footer />
  </div>
</template>

<script>
import WebFooter from '~/components/webLayout/webFooter'

export default {
  components: { WebFooter },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Local Dev Env',
      },
    ],
  },
  auth: 'guest',
}
</script>
