<template>
  <div>
    <button
      type="button"
      class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 rounded-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      role="switch"
      :aria-checked="value.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        class="absolute w-full h-full bg-white rounded-md pointer-events-none"
      ></span>

      <span
        aria-hidden="true"
        class="absolute h-4 mx-auto transition-colors duration-200 ease-in-out bg-gray-200 rounded-full pointer-events-none w-9"
        :class="backgroundStyles"
      ></span>

      <span
        aria-hidden="true"
        class="absolute left-0 inline-block w-5 h-5 transition-transform duration-200 ease-in-out transform translate-x-0 bg-white border border-gray-200 rounded-full shadow pointer-events-none ring-0"
        :style="indicatorStyles"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    backgroundStyles() {
      return {
        'bg-sky-blue-800': this.value,
        'bg-gray-200': !this.value,
      }
    },
    indicatorStyles() {
      return { transform: this.value ? 'translateX(20px)' : 'translateX(0px)' }
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style></style>
