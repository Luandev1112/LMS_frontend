<template>
  <div class="bg-white">
    <web-header :title="title" :beschrijving="beschrijving" />
    <main>
      <section
        class="relative py-16 m-4 bg-gray-200 rounded-2xl lg:overflow-hidden"
      >
        <div
          class="relative px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl"
        >
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
          >
            <div
              class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
            >
              <div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
                    Hoe het werkt voor mensen die bijles nodig hebben
                  </h2>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 1: Zoek een bijlesgever bij jouw in de buurt
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Vul je postcode in en ontdek de bijlesgevers bij jou in de
                    omgeving. Vind door middel van de filters de bijlesgever die
                    perfect past bij jouw eisen.
                  </p>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 2: Benader jouw ideale bijlesgever
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Vind je iemand die de vakken beheerst waar jij of je
                    zoon/dochter hulp bij nodig hebt en aansluit op je verdere
                    eisen? Stuur een berichtje en leer elkaar beter kennen.
                  </p>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 3: Maak een afspraak
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Plan eventueel eerst een kennismakingsgesprek in of begin
                    gelijk met de bijlessen. Spreek op een plek af met een fijne
                    en veilige leeromgeving (thuis of bijvoorbeeld in de
                    bibliotheek).
                  </p>

                  <div class="mt-6">
                    <a
                      href="/register"
                      class="inline-flex px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900"
                    >
                      Schrijf je in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div
                class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
              >
                <img
                  class="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80"
                  alt="Student"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="bijlesgevers"
        class="relative py-16 m-4 bg-gray-50 bg-gradient-to-bl from-orange-100 to-light-blue-200 rounded-2xl lg:overflow-hidden"
      >
        <div
          class="relative px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl"
        >
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
          >
            <div
              class="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
            >
              <div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
                    Hoe het werkt voor bijlesgevers
                  </h2>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 1: Vul je gegevens in
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Vul je postcode in en ontdek de bijlesgevers bij jou in de
                    omgeving. Vind door middel van de filters de bijlesgever die
                    perfect past bij jouw eisen.
                  </p>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 2: Wacht op jouw bijlesadressen
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Vind je iemand die de vakken beheerst waar jij of je
                    zoon/dochter hulp bij nodig hebt en aansluit op je verdere
                    eisen? Stuur een berichtje en leer elkaar beter kennen.
                  </p>
                  <p class="mt-4 text-lg font-semibold text-gray-700">
                    Stap 3: Maak kennis met je nieuwe bijlesadres
                  </p>
                  <p class="mt-2 text-base text-gray-500">
                    Plan eventueel eerst een kennismakingsgesprek in of begin
                    gelijk met de bijlessen. Spreek op een plek af met een fijne
                    en veilige leeromgeving (thuis of bijvoorbeeld in de
                    bibliotheek).
                  </p>

                  <div class="mt-6">
                    <a
                      href="/register"
                      class="inline-flex px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900"
                    >
                      Schrijf je in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div
                class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
              >
                <img
                  class="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="Tutor"
                />
              </div>
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
      title: 'Hoe werkt bijlesnodig.nl',
      beschrijving:
        'Stappenplan hoe het werkt voor zowel de student als de bijlesgever',
    }
  },
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
