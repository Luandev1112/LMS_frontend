<template>
  <main class="relative mt-16">
    <div class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <div
          class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
        >
          <aside class="py-6 lg:col-span-3">
            <nav>
              <NuxtLink
                to="/profile"
                class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
                aria-current="page"
              >
                <!-- Heroicon name: user-circle -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-teal-500 transition duration-150 ease-in-out group-hover:text-teal-500 group-focus:text-teal-600"
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
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="truncate"> Profile </span>
              </NuxtLink>

              <NuxtLink
                to="/profile/password"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: key -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span class="truncate"> Wachtwoord </span>
              </NuxtLink>

              <NuxtLink
                to="/profile/notifications"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: bell -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                <span class="truncate"> Notificaties </span>
              </NuxtLink>

              <NuxtLink
                to="/profile/billing"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: credit-card -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span class="truncate"> Facturering </span>
              </NuxtLink>
            </nav>
          </aside>

          <form
            class="divide-y divide-gray-200 lg:col-span-9"
            action="#"
            method="POST"
          >
            <!-- Profile section -->
            <div class="px-4 py-6 space-y-6 sm:p-6 lg:pb-8">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Notificaties
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Bepaal wanneer jij een email krijgt.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  layout: 'app',
  date() {
    return {
      currentState: false,
      switch1: true,
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
    isActive() {
      this.currentState = !this.currentState
    },
  },
}
</script>

<style scoped>
.mobile-active-link {
  @apply border-l-4 border-sky-blue-700;
}
</style>
