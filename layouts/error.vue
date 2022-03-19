<template>
  <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" style="text-decoration: underline"
      >Return to home</nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: 'app',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: '404',
    }
  },
}
</script>
