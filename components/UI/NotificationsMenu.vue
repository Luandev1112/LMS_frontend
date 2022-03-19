<template>
  <div class="relative ml-3">
    <div>
      <button
        v-on-clickaway="close"
        class="flex-shrink-0 p-1 transition duration-150 ease-in-out border-2 border-transparent rounded-full text-sky-blue-200 hover:bg-sky-blue-800 hover:text-white focus:outline-none focus:text-white focus:bg-sky-blue-800"
        aria-label="Notification menu"
        aria-haspopup="true"
        @click="openNotificationMenu"
      >
        <span class="sr-only">View notifications</span>
        <!-- Heroicon name: bell -->
        <svg
          class="w-6 h-6"
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isNotificationMenuOpen"
        class="absolute right-0 z-40 mt-2 origin-top-right rounded-md shadow-lg w-60"
      >
        <div
          class="px-4 py-2 bg-white rounded-md ring-1 ring-black ring-opacity-5"
        >
          <p class="px-4 py-2 text-sm text-gray-700 cursor-pointer">
            Geen nieuwe notificaties
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import { mapGetters } from 'vuex'

export default {
  mixins: [clickaway],
  data() {
    return {
      isNotificationMenuOpen: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    image() {
      return this.loggedInUser.user.profile_image_path
        ? 'http://notawanker.com' + this.loggedInUser.user.profile_image_path
        : 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    openNotificationMenu() {
      this.isNotificationMenuOpen = !this.isNotificationMenuOpen
    },
    close() {
      this.isNotificationMenuOpen = false
    },
  },
}
</script>

<style></style>
