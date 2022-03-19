<template>
  <div class="bg-white">
    <main>
      <section
        class="pt-8 pb-2 m-2 sm:pb-6 sm:m-4 md:pb-8 bg-gradient-to-tr from-sky-blue-700 via-light-blue-300 to-orange-200 lg:pb-80 rounded-2xl"
      >
        <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
          <web-nav></web-nav>
        </div>
        <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
          <div
            class="flex flex-col items-center max-w-6xl pt-16 pb-16 mx-auto my-0 text-center text-white"
          >
            <p
              class="mt-3 text-sm font-bold text-white uppercase sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0"
            >
              Start met bijles
            </p>
            <h1
              class="text-4xl font-extrabold leading-10 tracking-tight text-sky-blue-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Bijlesnodig.nl
            </h1>
            <p
              class="mt-3 mb-8 text-base font-light leading-6 text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
            >
              Vind een bijlesgever bij jou in de buurt, neem contact met ze op &
              maak een afspraak.
            </p>
            <div class="flex">
              <NuxtLink
                to="/register"
                class="inline-flex items-center justify-center h-10 px-5 text-base font-medium transition-colors rounded-lg text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900"
                >Registreren</NuxtLink
              ><NuxtLink
                to="/hoe-werkt-het"
                class="inline-flex items-center justify-center h-10 px-5 ml-6 text-sm font-medium text-gray-800 transition-colors bg-gray-200 rounded-lg lg:text-base hover:bg-gray-300"
                >Hoe werkt Bijlesnodig.nl</NuxtLink
              >
            </div>
          </div>
          <div class="relative">
            <div
              class="relative w-full mx-auto overflow-hidden border-8 border-gray-300 rounded-lg shadow-lg lg:absolute border-opacity-30 sm:border-none"
            >
              <div class="w-full pb-perc">
                <img
                  src="~/assets/Screenshot 2021-01-08 at 13.54.03.png"
                  alt="App screenshot"
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 1;
                    transition: opacity 500ms ease 0s;
                    max-width: 1151px 100vw;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="pb-2 m-2 bg-gray-200 sm:pb-4 sm:m-4 lg:pb-16 lg:pt-64 rounded-2xl"
      >
        <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
          <div
            class="flex flex-wrap items-center justify-start max-w-6xl px-4 pt-6 pb-6 mx-auto my-0 lg:px-0 lg:justify-around md:pt-24 lg:pt-20 md:pb-6"
          >
            <h2
              class="w-full px-8 mb-4 font-semibold text-center text-gray-900 lg:w-1/4"
            >
              At vero eos et accusamus et iusto odio dignissimos
            </h2>
            <a
              href=""
              class="flex items-center justify-center w-1/3 my-5 lg:w-1/6"
              ><img
                class="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-500.svg"
                alt="Workcation"
            /></a>
            <a
              href=""
              class="flex items-center justify-center w-1/3 my-5 lg:w-1/6"
              ><img
                class="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-500.svg"
                alt="Workcation"
            /></a>
            <a
              href=""
              class="flex items-center justify-center w-1/3 my-5 lg:w-1/6"
              ><img
                class="h-12"
                src="https://tailwindui.com/img/logos/level-logo-gray-500.svg"
                alt="Workcation"
            /></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </section>
      <section
        class="py-12 mx-2 mb-2 border-t-8 sm:py-24 sm:mx-4 sm:mb-4 border-sky-blue-700 rounded-2xl bg-sky-blue-200"
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mb-10">
            <h2
              class="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
            >
              Bijlesnodig.nl in het kort
            </h2>
            <p class="max-w-2xl mt-4 text-xl text-gray-700">
              Bijlesnodig.nl is er voor de jongeren die behoefte hebben aan meer
              begeleiding met bepaalde vakken om zo de lesstof optimaal te
              beheersen.
            </p>
          </div>

          <div class="mt-10">
            <dl
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
            >
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-white rounded-md bg-sky-blue-700"
                  >
                    <!-- Heroicon name: globe-alt -->
                    <svg
                      class="w-6 h-6"
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg font-semibold leading-6 text-gray-900">
                    Platform voor scholier en bijlesgever
                  </dt>
                  <dd class="mt-2 text-base text-gray-800">
                    Maak eenvoudig een account aan op de website en vind de
                    geschikte persoon bij jou in de buurt.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-white rounded-md bg-sky-blue-700"
                  >
                    <svg
                      class="w-6 h-6"
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
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg font-semibold leading-6 text-gray-900">
                    Geen verborgen kosten
                  </dt>
                  <dd class="mt-2 text-base text-gray-800">
                    Een vast maandelijks bedrag voor het vinden en in contact
                    komen met bijlesgevers en bijles zoekende scholieren.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-white rounded-md bg-sky-blue-700"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg font-semibold leading-6 text-gray-900">
                    Vind gemakkelijk iemand bij je in de buurt
                  </dt>
                  <dd class="mt-2 text-base text-gray-800">
                    Doordat je je gevonden bijlesgevers kunt filteren op
                    postcode en beschikbaarheid vind je snel en gemakkelijk
                    iemand bij jou in de buurt.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 text-white rounded-md bg-sky-blue-700"
                  >
                    <!-- Heroicon name: annotation -->
                    <svg
                      class="w-6 h-6"
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg font-semibold leading-6 text-gray-900">
                    Stuur berichten via de app
                  </dt>
                  <dd class="mt-2 text-base text-gray-800">
                    Iemand gevonden?! Geen gedoe met Whatsapp of email maar maak
                    stuur direct een bericht via Bijlesnodig.nl
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section class="mx-2 mb-2 bg-gray-200 sm:mx-4 sm:mb-4 rounded-2xl">
        <div class="mx-auto my-0">
          <div class="relative bg-gray-200 rounded-2xl">
            <div
              class="h-56 bg-light-blue-300 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
            >
              <img
                class="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-r-none"
                src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80&blend=efefef&sat=-100&blend-mode=multiply"
                alt=""
              />
            </div>
            <div
              class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16"
            >
              <div class="md:ml-auto md:w-1/2 md:pl-10">
                <h2
                  class="text-base font-semibold tracking-wider text-gray-800 uppercase"
                >
                  Noodzaak bijles in de pandemie
                </h2>

                <p class="mt-3 text-lg text-gray-700">
                  Door het uitbreken van het coronavirus zijn veel leerlingen
                  genoodzaakt om volledig of gedeeltelijk online les te krijgen.
                  Dit zorgt er voor dat de kwaliteit van het onderwijs enorm
                  achteruit is gegaan en veel leerlingen krijgen hierdoor te
                  maken met achterstanden voor verschillende vakken. Bijles kan
                  de ideale oplossing zijn om eventuele achterstanden in te
                  halen en er voor te zorgen dat leerlingen geen onnodige
                  studievertraging oplopen.
                </p>

                <div class="mt-8">
                  <div class="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
                    >
                      Tips voor veilige bijles
                      <!-- Heroicon name: external-link -->
                      <svg
                        class="w-5 h-5 ml-3 -mr-1 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                          d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
import WebNav from '~/components/webLayout/webNav.vue'

export default {
  name: 'Home',
  components: {
    WebNav,
  },
  layout: 'homepage',
  middleware: 'auth',
  auth: 'guest',
  head() {
    return {
      titleTemplate: '%s | Vind iemand bij jou in de buurt',
    }
  },
}
</script>
