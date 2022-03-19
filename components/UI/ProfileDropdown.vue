<template>
  <div class="relative ml-3">
    <div>
      <button
        id="user-menu"
        v-on-clickaway="close"
        class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
        aria-label="User menu"
        aria-haspopup="true"
        @click="openMenu"
      >
        <img class="w-8 h-8 rounded-full" :src="image" alt="" />
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
        v-show="isProfileOpen"
        class="absolute right-0 z-40 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5">
          <NuxtLink
            to="/profile"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Jouw Profiel</NuxtLink
          >

          <a
            class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
            @click="logout"
            >Uitloggen</a
          >
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
      isProfileOpen: false,
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

      this.$axios.setHeader('Authorization', false)
      this.$toast.success('Succesvol uitgelogd', {
        position: 'top-right',
        duration: 3000,
      })
    },
    openMenu() {
      this.isProfileOpen = !this.isProfileOpen
    },
    close() {
      this.isProfileOpen = false
    },
  },
}
</script>

<style></style>
