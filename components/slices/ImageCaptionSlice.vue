<template>
  <div>
    <template v-if="size === 'image-full-width'">
      <div
        class="blog-header single"
        :style="{ 'background-image': 'url(' + img.url + ')' }"
      >
        <template v-if="$prismic.asText(caption) != ''">
          <div class="wrapper">
            <h1>{{ $prismic.asText(caption) }}</h1>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <p class="block-img" :class="size">
        <prismic-image
          width="1310"
          height="873"
          class="w-full m-0 rounded-lg"
          :field="img"
        />
      </p>
      <template v-if="$prismic.asText(caption) != ''">
        <figcaption class="mt-1 text-base prose prose-lg text-gray-500">
          {{ $prismic.asText(caption) }}
        </figcaption>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImageCaptionSlice',
  props: {
    slice: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      img: '',
      caption: '',
      size: '',
    }
  },
  created() {
    this.img = this.slice.primary.image
    this.caption = this.slice.primary.caption
    this.size = this.slice.slice_label
  },
}
</script>
