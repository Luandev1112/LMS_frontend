<template>
  <div class="bg-white">
    <web-header :title="title" :beschrijving="beschrijving" />
    <main>
      <!-- Split brand panel -->
      <section class="m-4 bg-gray-200 xl:py-4 rounded-2xl lg:overflow-hidden">
        <div class="mx-auto max-w-7xl">
          <div class="relative bg-gray-200 rounded-2xl">
            <div class="absolute inset-0" aria-hidden="true">
              <div
                class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-sky-blue-600 to-light-blue-400 rounded-2xl"
              ></div>
            </div>
            <div class="relative mx-auto lg:grid lg:grid-cols-2 lg:px-8">
              <div
                class="px-4 py-16 bg-gray-200 sm:py-24 sm:px-6 lg:px-0 lg:pr-8 rounded-t-2xl"
              >
                <div class="max-w-lg mx-auto lg:mx-0">
                  <h2
                    class="text-base font-semibold tracking-wide uppercase text-sky-blue-600"
                  >
                    Functies
                  </h2>
                  <p
                    class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl"
                  >
                    Alles wat je nodig hebt om de juiste leraar te vinden
                  </p>
                  <dl class="mt-12 space-y-10">
                    <div class="flex">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-sky-blue-600 to-light-blue-400"
                      >
                        <!-- Heroicon name: view-list -->
                        <svg
                          class="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <dt class="text-lg font-medium leading-6 text-gray-900">
                          Lijstoverzicht
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                          Nunc a, lacinia sed risus neque, arcu, rhoncus. Id
                          mauris justo facilisis aliquam platea vestibulum
                          condimentum morbi.
                        </dd>
                      </div>
                    </div>

                    <div class="flex">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-sky-blue-600 to-light-blue-400"
                      >
                        <!-- Heroicon name: view-boards -->
                        <svg
                          class="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <dt class="text-lg font-medium leading-6 text-gray-900">
                          Priveberichten
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                          Purus lobortis volutpat posuere id integer nunc
                          tellus. Non mauris malesuada feugiat massa mi
                          pellentesque cum est. Pharetra a varius urna rhoncus,
                          tempor rutrum.
                        </dd>
                      </div>
                    </div>

                    <div class="flex">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-sky-blue-600 to-light-blue-400"
                      >
                        <!-- Heroicon name: calendar -->
                        <svg
                          class="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <dt class="text-lg font-medium leading-6 text-gray-900">
                          Zoeken op beschikbaarheid
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                          Purus lobortis volutpat posuere id integer nunc
                          tellus. Non mauris malesuada feugiat massa mi
                          pellentesque cum est. Pharetra a varius urna rhoncus,
                          tempor rutrum.
                        </dd>
                      </div>
                    </div>

                    <div class="flex">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-r from-sky-blue-600 to-light-blue-400"
                      >
                        <!-- Heroicon name: users -->
                        <svg
                          class="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <dt class="text-lg font-medium leading-6 text-gray-900">
                          Favorieten bijlesgevers
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                          Tincidunt sollicitudin interdum nunc sit risus at
                          bibendum vitae. Urna, quam ut sit justo non,
                          consectetur et varius.
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
              <div
                class="px-4 py-16 bg-gradient-to-r from-sky-blue-600 to-light-blue-400 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-8 rounded-b-2xl"
              >
                <div class="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
                  <div>
                    <h2 class="sr-only">Price</h2>
                    <p class="relative grid grid-cols-2">
                      <span class="flex flex-col text-center">
                        <span
                          class="text-5xl font-extrabold tracking-tight text-white"
                          >€12</span
                        >
                        <span
                          class="mt-2 text-base font-medium text-sky-blue-100"
                          >Eenmalig</span
                        >
                        <span class="sr-only">plus</span>
                      </span>
                      <span
                        class="absolute flex items-center justify-center w-full h-12 pointer-events-none"
                        aria-hidden="true"
                      >
                        <!-- Heroicon name: plus -->
                        <svg
                          class="w-6 h-6 text-sky-blue-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </span>
                      <span>
                        <span class="flex flex-col text-center">
                          <span
                            class="text-5xl font-extrabold tracking-tight text-white"
                            >€4</span
                          >
                          <span
                            class="mt-2 text-base font-medium text-sky-blue-100"
                            >Per maand</span
                          >
                        </span>
                      </span>
                    </p>
                  </div>
                  <ul
                    class="bg-opacity-50 rounded bg-sky-blue-700 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col"
                  >
                    <li
                      class="flex items-center px-4 py-4 text-base text-white"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">Ongelimiteerd zoeken</span>
                    </li>
                    <li
                      class="flex items-center px-4 py-4 text-base text-white border-t border-opacity-25 border-sky-blue-300"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">Elk vak beschikbaar</span>
                    </li>
                    <li
                      class="flex items-center px-4 py-4 text-base text-white border-t border-opacity-25 border-sky-blue-300"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">Annuleren wanneer jij dit wil</span>
                    </li>
                    <li
                      class="flex items-center px-4 py-4 text-base text-white border-t border-opacity-25 border-sky-blue-300 sm:border-t-0 sm:border-l"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">Geen verborgen kosten</span>
                    </li>
                    <li
                      class="flex items-center px-4 py-4 text-base text-white border-t border-opacity-25 border-sky-blue-300 sm:border-l"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">24/7 klantenservice</span>
                    </li>
                    <li
                      class="flex items-center px-4 py-4 text-base text-white border-t border-opacity-25 border-sky-blue-300 sm:border-l"
                    >
                      <!-- Heroicon name: check -->
                      <svg
                        class="w-6 h-6 text-sky-blue-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="ml-3">Grootste aanbod leraren</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 bg-white border border-transparent rounded-md text-sky-blue-700 hover:bg-sky-blue-50 md:px-10"
                  >
                    Start vandaag nog
                  </a>
                  <a
                    href="#"
                    class="block text-base font-medium text-center text-sky-blue-100 hover:text-white"
                  >
                    Probeer Bijlesnodig voor 7 dagen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Logo cloud -->
      <div
        class="relative m-4 bg-opacity-25 bg-sky-blue-200 rounded-2xl lg:overflow-hidden"
      >
        <div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2
              class="max-w-md mx-auto text-3xl font-extrabold text-center text-sky-blue-900 lg:max-w-xl lg:text-left"
            >
              Deze scholen hebben zich aangesloten bij Bijlesnodig
            </h2>
            <div class="self-center flow-root mt-8 lg:mt-0">
              <div class="flex flex-wrap justify-between -mt-4 -ml-8 lg:-ml-4">
                <div
                  class="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4"
                >
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg"
                    alt="Workcation"
                  />
                </div>
                <div
                  class="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4"
                >
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg"
                    alt="Tuple"
                  />
                </div>
                <div
                  class="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4"
                >
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/level-logo-cyan-900.svg"
                    alt="Level"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="m-4 bg-gray-100 xl:py-4 rounded-2xl lg:overflow-hidden">
        <!-- FAQs -->
        <div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-center text-gray-900">
            Veelgestelde vragen
          </h2>
          <div class="mt-12">
            <dl
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
            >
              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Wat is het beste aan Zwitserland?
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Ik weet het niet, maar de vlag is een groot pluspunt. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Waarom zie je nooit olifanten verstoppen in bomen?
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Omdat ze er zo goed in zijn. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </dd>
              </div>

              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt class="text-lg font-medium leading-6 text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <!-- CTA section -->
      <section
        class="py-24 mx-2 mb-2 sm:mx-4 sm:mb-4 rounded-2xl bg-gradient-to-bl from-sky-blue-700 via-light-blue-400 to-sky-blue-900"
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="flex flex-col items-center justify-center px-6 pt-10 pb-12 text-center sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-gray-50 sm:text-4xl">
                <span class="block">Klaar om te beginnen?</span>
                <span class="block text-sky-blue-900"
                  >Start een gratis proefperiode</span
                >
              </h2>
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium border border-transparent rounded-md bg-gray-50 text-sky-blue-700 hover:bg-gray-100 sm:w-auto"
                >Schrijf je in</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import WebHeader from '~/components/webLayout/webHeader'

export default {
  name: 'Prijzen',
  components: { WebHeader },
  data() {
    return {
      title: 'Wat kost Bijlesnodig.nl',
      beschrijving:
        'Krijg door een abonnement af te sluiten toegang tot alle functies, vind jouw ideale bijlesgever of meld je aan om bijles te geven',
    }
  },
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
