<template>
  <div class="container post-part single">
    <blockquote class="block-quotation">
      {{ $prismic.asText(slice.primary.quote) }}
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'QuoteSlice',
  props: {
    slice: {
      type: Object,
      default: null,
    },
  },
}
</script>
