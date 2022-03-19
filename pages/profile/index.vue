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
                  Profiel
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Deze informatie wordt online gedeeld.
                </p>
              </div>

              <div
                class="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
              >
                <div class="flex-grow space-y-6">
                  <div class="space-y-1">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      :value="loggedInUser.user.email"
                      disabled="disabled"
                      class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="space-y-1">
                    <label
                      for="about"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Over jou
                    </label>
                    <div class="rounded-md shadow-sm">
                      <textarea
                        id="about"
                        rows="3"
                        class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                      ></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Een korte beschrijving over jezelf
                    </p>
                  </div>
                </div>

                <div
                  class="flex-grow space-y-1 lg:flex-grow-0 lg:flex-shrink-0"
                >
                  <p
                    class="block text-sm font-medium leading-5 text-gray-700"
                    aria-hidden="true"
                  >
                    Foto
                  </p>
                  <div class="lg:hidden">
                    <div class="flex items-center">
                      <div
                        class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                        aria-hidden="true"
                      >
                        <img
                          class="w-full h-full rounded-full"
                          :src="image"
                          alt=""
                        />
                      </div>
                      <div class="ml-5 rounded-md shadow-sm">
                        <div
                          class="relative flex items-center justify-center px-3 py-2 transition duration-150 ease-in-out border border-gray-300 rounded-md group focus-within:border-blue-300 focus-within:ring-blue focus-within:text-gray-900"
                        >
                          <label
                            for="user_photo"
                            class="relative text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out pointer-events-none group-hover:text-gray-500"
                          >
                            <span>Wijzigen</span>
                            <span class="sr-only"> user photo</span>
                          </label>
                          <input
                            id="user_photo"
                            type="file"
                            class="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="relative hidden overflow-hidden transition duration-150 ease-in-out rounded-full lg:block"
                  >
                    <img
                      class="relative w-40 h-40 rounded-full"
                      :src="image"
                      alt=""
                    />
                    <label
                      class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
                    >
                      <span>Wijzigen</span>
                      <span class="sr-only"> user photo</span>
                      <input
                        type="file"
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="first_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Voornaam</label
                  >
                  <input
                    id="first_name"
                    :placeholder="loggedInUser.user.first_name"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="last_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Achternaam</label
                  >
                  <input
                    id="last_name"
                    :placeholder="loggedInUser.user.last_name"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Woonplaats</label
                  >
                  <input
                    id="city"
                    placeholder="Kerk-Avezaath"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="age"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Leeftijd</label
                  >
                  <input
                    id="age"
                    placeholder="29"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <!-- Privacy section -->
            <div class="pt-6 space-y-4 divide-y divide-gray-200">
              <div class="px-4 space-y-2 sm:px-6">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    Account
                  </h2>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    Algemene instellingen
                  </p>
                </div>
                <ul class="divide-y divide-gray-200">
                  <li class="flex items-center justify-between py-4 space-x-4">
                    <div class="flex flex-col">
                      <p
                        id="privacy-option-label-1"
                        class="text-sm font-medium leading-5 text-gray-900"
                      >
                        Kan online gevonden worden
                      </p>
                      <p
                        id="privacy-option-description-1"
                        class="text-sm leading-5 text-gray-500"
                      >
                        Even niet beschikbaar? Verberg je account.
                      </p>
                    </div>
                    <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                    <span
                      role="checkbox"
                      tabindex="0"
                      aria-checked="true"
                      aria-labelledby="privacy-option-label-1"
                      aria-describedby="privacy-option-description-1"
                      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer bg-sky-blue-700 w-11 focus:outline-none focus:ring"
                      @click="isActive"
                    >
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-5 bg-white rounded-full shadow"
                      ></span>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex justify-end px-4 py-4 space-x-5 sm:px-6">
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-light-blue-300 focus:ring-blue active:bg-gray-50 active:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-light-blue-700 hover:bg-light-blue-600 focus:outline-none focus:border-light-blue-800 focus:ring-blue active:bg-light-blue-800"
                  >
                    Save
                  </button>
                </div>
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
    return {}
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
      console.log("ok")
    }
  },
}
</script>

<style scoped>
.mobile-active-link {
  @apply border-l-4 border-sky-blue-700;
}
</style>
