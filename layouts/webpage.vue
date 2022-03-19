<template>
  <div class="antialiased text-gray-900">
    <nuxt />
    <web-footer />
  </div>
</template>

<script>
import WebFooter from '~/components/webLayout/webFooter.vue'

export default {
  components: { WebFooter },
}
</script>
