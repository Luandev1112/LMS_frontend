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
              <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <section aria-labelledby="payment_details_heading">
                  <form action="#" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-6 bg-white sm:p-6">
                        <div>
                          <h2
                            id="payment_details_heading"
                            class="text-lg font-medium leading-6 text-gray-900"
                          >
                            Betalingsdetails
                          </h2>
                          <p class="mt-1 text-sm text-gray-500">
                            Werk uw factuurgegevens bij. Houd er rekening mee
                            dat het bijwerken van uw locatie kan van invloed
                            zijn op uw belastingtarieven.
                          </p>
                        </div>

                        <div class="grid grid-cols-4 gap-6 mt-6">
                          <div class="col-span-4 sm:col-span-2">
                            <label
                              for="first_name"
                              class="block text-sm font-medium text-gray-700"
                              >Voornaam</label
                            >
                            <input
                              id="first_name"
                              type="text"
                              name="first_name"
                              autocomplete="cc-given-name"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-4 sm:col-span-2">
                            <label
                              for="last_name"
                              class="block text-sm font-medium text-gray-700"
                              >Achternaam</label
                            >
                            <input
                              id="last_name"
                              type="text"
                              name="last_name"
                              autocomplete="cc-family-name"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-4 sm:col-span-2">
                            <label
                              for="email_address"
                              class="block text-sm font-medium text-gray-700"
                              >E-mail</label
                            >
                            <input
                              id="email_address"
                              type="text"
                              name="email_address"
                              autocomplete="email"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-4 sm:col-span-1">
                            <label
                              for="expiration_date"
                              class="block text-sm font-medium text-gray-700"
                              >Exp. date</label
                            >
                            <input
                              id="expiration_date"
                              type="text"
                              name="expiration_date"
                              autocomplete="cc-exp"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                              placeholder="MM / JJ"
                            />
                          </div>

                          <div class="col-span-4 sm:col-span-1">
                            <label
                              for="security_code"
                              class="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>Beveiligingscode</span>
                              <!-- Heroicon name: solid/question-mark-circle -->
                              <svg
                                class="flex-shrink-0 w-5 h-5 ml-1 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </label>
                            <input
                              id="security_code"
                              type="text"
                              name="security_code"
                              autocomplete="cc-csc"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-4 sm:col-span-2">
                            <label
                              for="country"
                              class="block text-sm font-medium text-gray-700"
                              >Land</label
                            >
                            <select
                              id="country"
                              name="country"
                              autocomplete="country"
                              class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            >
                              <option>Nederland</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div class="col-span-4 sm:col-span-2">
                            <label
                              for="postal_code"
                              class="block text-sm font-medium text-gray-700"
                              >Postcode</label
                            >
                            <input
                              id="postal_code"
                              type="text"
                              name="postal_code"
                              autocomplete="postal-code"
                              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button
                          type="submit"
                          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-blue-800 hover:bg-sky-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                          Opslaan
                        </button>
                      </div>
                    </div>
                  </form>
                </section>

                <!-- Plan -->
                <section aria-labelledby="plan_heading">
                  <form action="#" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-6 space-y-6 bg-white sm:p-6">
                        <div>
                          <h2
                            id="plan_heading"
                            class="text-lg font-medium leading-6 text-gray-900"
                          >
                            Abonnement
                          </h2>
                        </div>

                        <fieldset>
                          <legend class="sr-only">Tarieven</legend>
                          <div class="relative -space-y-px bg-white rounded-md">
                            <!-- Checked: "bg-orange-50 border-orange-200 z-10", Not Checked: "border-gray-200" -->
                            <label
                              class="relative flex flex-col p-4 border border-gray-200 cursor-pointer rounded-tl-md rounded-tr-md md:pl-4 md:pr-6 md:grid md:grid-cols-3"
                            >
                              <div class="flex items-center text-sm">
                                <input
                                  type="radio"
                                  name="pricing_plan"
                                  value="Startup"
                                  class="w-4 h-4 border-gray-300 text-sky-blue-700 focus:ring-gray-900"
                                  aria-labelledby="pricing-plans-0-label"
                                  aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"
                                  checked
                                />
                                <span
                                  id="pricing-plans-0-label"
                                  class="ml-3 font-medium text-gray-900"
                                  >Gratis</span
                                >
                              </div>
                              <p
                                id="pricing-plans-0-description-0"
                                class="pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-center"
                              >
                                <!-- Checked: "text-orange-900", Not Checked: "text-gray-900" -->
                                <span class="font-medium text-gray-900"
                                  >€0 / maand</span
                                >
                              </p>
                              <!-- Checked: "text-orange-700", Not Checked: "text-gray-500" -->
                              <p
                                id="pricing-plans-0-description-1"
                                class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"
                              >
                                Voorbeeld1
                              </p>
                            </label>

                            <!-- Checked: "bg-orange-50 border-orange-200 z-10", Not Checked: "border-gray-200" -->
                            <label
                              class="relative flex flex-col p-4 border border-gray-200 cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3"
                            >
                              <div class="flex items-center text-sm">
                                <input
                                  type="radio"
                                  name="pricing_plan"
                                  value="Business"
                                  class="w-4 h-4 border-gray-300 text-sky-blue-700 focus:ring-gray-900"
                                  aria-labelledby="pricing-plans-1-label"
                                  aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"
                                />
                                <span
                                  id="pricing-plans-1-label"
                                  class="ml-3 font-medium text-gray-900"
                                  >Standaard</span
                                >
                              </div>
                              <p
                                id="pricing-plans-1-description-0"
                                class="pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-center"
                              >
                                <!-- Checked: "text-orange-900", Not Checked: "text-gray-900" -->
                                <span class="font-medium text-gray-900"
                                  >€7 / maand</span
                                >
                                <!-- Checked: "text-orange-700", Not Checked: "text-gray-500" -->
                                <span class="text-gray-500">(€80 / jaar)</span>
                              </p>
                              <!-- Checked: "text-orange-700", Not Checked: "text-gray-500" -->
                              <p
                                id="pricing-plans-1-description-1"
                                class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"
                              >
                                Voorbeeld2
                              </p>
                            </label>
                          </div>
                        </fieldset>

                        <div class="flex items-center">
                          <!-- Enabled: "bg-orange-500", Not Enabled: "bg-gray-200" -->
                          <button
                            type="button"
                            class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            aria-pressed="true"
                            aria-labelledby="annual-billing-label"
                          >
                            <span class="sr-only">Use setting</span>
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span
                              aria-hidden="true"
                              class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
                            ></span>
                          </button>
                          <span id="annual-billing-label" class="ml-3">
                            <span class="text-sm font-medium text-gray-900"
                              >Jaarlijks factureren
                            </span>
                            <span class="text-sm text-gray-500"
                              >(Bespaar 10%)</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button
                          type="submit"
                          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-blue-800 hover:bg-sky-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </section>

                <!-- Billing history -->
                <section aria-labelledby="billing_history_heading">
                  <div
                    class="pt-6 bg-white shadow sm:rounded-md sm:overflow-hidden"
                  >
                    <div class="px-4 sm:px-6">
                      <h2
                        id="billing_history_heading"
                        class="text-lg font-medium leading-6 text-gray-900"
                      >
                        Factureringsgeschiedenis
                      </h2>
                    </div>
                    <div class="flex flex-col mt-6">
                      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div
                          class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                        >
                          <div class="overflow-hidden border-t border-gray-200">
                            <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                <tr>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  >
                                    Datum
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  >
                                    Omschrijving
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  >
                                    Bedrag
                                  </th>
                                  <!--
                          `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                        -->
                                  <th
                                    scope="col"
                                    class="relative px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  >
                                    <span class="sr-only">Bekijk factuur</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                  <td
                                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    <time datetime="2020-01-01">1/1/2021</time>
                                  </td>
                                  <td
                                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                                  >
                                    Standaard Plan - Jaarlijks
                                  </td>
                                  <td
                                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                                  >
                                    €0
                                  </td>
                                  <td
                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                  ></td>
                                </tr>

                                <!-- More items... -->
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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
