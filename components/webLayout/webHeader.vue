<template>
  <section
    class="pt-8 pb-4 m-2 sm:pb-6 sm:m-4 md:pb-8 bg-gradient-to-tr from-sky-blue-700 via-light-blue-300 to-orange-200 lg:pb-20 rounded-2xl"
  >
    <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
      <web-nav></web-nav>
    </div>
    <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
      <div
        class="flex flex-col items-center max-w-6xl pt-8 mx-auto my-0 text-center md:pt-14"
      >
        <h1
          class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-50 sm:text-5xl"
        >
          {{ title }}
        </h1>
        <p
          class="mt-3 mb-8 text-lg font-medium text-cyan-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
        >
          {{ beschrijving }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import webNav from './webNav.vue'
export default {
  components: { webNav },
  props: {
    title: {
      type: String,
      default: null,
    },
    beschrijving: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
