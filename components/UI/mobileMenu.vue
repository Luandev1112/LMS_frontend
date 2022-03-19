<template>
  <div class="block lg:hidden">
    <transition
      key="bgSidebar"
      enter-active-class="transition-opacity duration-300 ease-linear"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-linear"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="fixed inset-0 z-40">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
    </transition>
    <transition
      key="sidebar"
      enter-active-class="transition duration-300 ease-in-out transform"
      enter-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-300 ease-in-out transform"
      leave-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white"
      >
        <div class="absolute top-0 right-0 p-1 -mr-14">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
            @click="$emit('close')"
          >
            <svg
              class="w-6 h-6 text-white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>
        <div class="flex items-center flex-shrink-0 px-4">
          <h1 class="text-2xl font-semibold text-sky-blue-800">
            Bijlesnodig.nl
          </h1>
        </div>
        <div class="flex-1 h-0 mt-5 overflow-y-auto">
          <nav class="flex flex-col h-full">
            <div class="space-y-1">
              <NuxtLink
                to="/prijzen"
                class="flex items-center px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border-sky-blue-700 group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
              >
                <svg
                  class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Prijzen
              </NuxtLink>

              <NuxtLink
                to="/hoe-werkt-het"
                class="flex items-center px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
              >
                <!-- Heroicon name: document-search -->
                <svg
                  class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Hoe werkt Bijlesnodig.nl?
              </NuxtLink>

              <NuxtLink
                to="/over-ons"
                class="flex items-center px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
              >
                <svg
                  class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
                Over ons
              </NuxtLink>
              <NuxtLink
                to="/faq"
                class="flex items-center px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
              >
                <!-- Heroicon name: chat -->
                <svg
                  class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                FAQ
              </NuxtLink>
            </div>
            <div class="pt-10 mt-auto space-y-1">
              <NuxtLink
                to="/register"
                class="flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              >
                <svg
                  class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
                Registreren
              </NuxtLink>

              <NuxtLink
                to="/login"
                class="flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              >
                <svg
                  class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                Login
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </transition>
    <div class="flex-shrink-0 w-14">
      <!-- Dummy element to force sidebar to shrink to fit close icon -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.mobile-active-link {
  @apply border-l-4 border-sky-blue-700;
}
</style>
