<template>
  <main>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="sm:px-0">
        <main class="relative z-0 flex-1 pb-8 overflow-y-auto">
          <!-- Page header -->
          <div class="relative mt-16">
            <div
              class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8"
            >
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="flex-1 min-w-0 p-6">
                  <!-- Profile -->
                  <div class="flex items-center">
                    <img
                      class="hidden w-12 h-12 rounded-full sm:block"
                      src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                      alt=""
                    />
                    <div>
                      <div class="flex items-center">
                        <img
                          class="w-12 h-12 rounded-full sm:hidden"
                          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                          alt=""
                        />
                        <h1
                          class="ml-3 text-2xl font-bold leading-7 text-cool-gray-900 sm:leading-9 sm:truncate"
                        >
                          Goedemorgen, {{ loggedInUser.user.first_name }}
                        </h1>
                      </div>
                      <dl
                        class="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap"
                      >
                        <dt class="sr-only">Company</dt>
                        <dd
                          class="flex items-center text-sm font-medium leading-5 capitalize text-cool-gray-500 sm:mr-6"
                        >
                          <svg
                            class="flex-shrink-0 w-5 h-5 mr-3 -ml-1 text-teal-500 transition duration-150 ease-in-out group-hover:text-teal-500 group-focus:text-teal-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          {{ city }}
                        </dd>
                        <dt class="sr-only">Account status</dt>
                        <dd
                          class="flex items-center mt-3 text-sm font-medium leading-5 capitalize text-cool-gray-500 sm:mr-6 sm:mt-0"
                        >
                          <!-- Heroicon name: check-circle -->
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Geverifieerd account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
              class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8"
            >
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="flex-1 min-w-0 p-6">
                  <h2 class="text-lg font-medium leading-6 text-cool-gray-900">
                    Overzicht
                  </h2>
                  <div>
                    <h2
                      class="text-xs font-medium tracking-wide text-gray-500 uppercase"
                    >
                      Laatste zoekopdrachten
                    </h2>
                    <ul
                      class="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    ></ul>
                    <h3>Je hebt geen recente zoekopdrachten</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
              class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8"
            >
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="flex-1 min-w-0 p-6">
                  <h2 class="text-lg font-medium leading-6 text-cool-gray-900">
                    Laatste berichten
                  </h2>
                  <div>
                    <h2
                      class="text-xs font-medium tracking-wide text-gray-500 uppercase"
                    >
                      Onbeantwoorde berichten
                    </h2>
                    <div
                      class="flex flex-col mt-3 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
                    >
                      <div class="flex-grow space-y-6">
                        <ul v-if="hasRequests">
                          <message-item
                            v-for="req in receivedRequest"
                            :key="req.id"
                            :email="req.userEmail"
                            :message="req.message"
                          ></message-item>
                        </ul>
                        <h3 v-else>Je hebt geen ongelezen berichten</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageItem from '~/components/berichten/MessageItem'

export default {
  name: 'App',
  middleware: 'auth',
  layout: 'app',
  components: { MessageItem },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    receivedRequest() {
      return this.$store.getters.request
    },
    hasRequests() {
      return this.$store.getters.hasRequest
    },
    city() {
      return this.loggedInUser.user.city
        ? this.loggedInUser.user.city
        : 'Foutmelding: Geen woonplaats beschikbaar'
    },
  },
}
</script>
