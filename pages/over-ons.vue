<template>
  <section>
    <web-header :title="title" :beschrijving="beschrijving" />
    <main>
      <div
        class="relative m-4 bg-gray-200 lg:py-16 rounded-2xl lg:overflow-hidden"
      >
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
        >
          <div class="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div
                class="absolute inset-y-0 w-full bg-gray-200 rounded-r-3xl lg:right-72"
              ></div>
              <svg
                class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-sky-blue-800"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div
              class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
            >
              <!-- Testimonial card-->
              <div
                class="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl"
              >
                <img
                  class="absolute inset-0 object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
                <div
                  class="absolute inset-0 bg-light-blue-500"
                  style="mix-blend-mode: multiply"
                ></div>
                <div
                  class="absolute inset-0 bg-gradient-to-t from-light-blue-600 via-light-blue-600 opacity-90"
                ></div>
                <div class="relative px-8">
                  <div>
                    <h2>Logo Bijlesnodig.nl</h2>
                  </div>
                  <blockquote class="mt-8">
                    <div
                      class="relative text-lg font-medium text-white md:flex-grow"
                    >
                      <svg
                        class="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-light-blue-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        />
                      </svg>
                      <p class="relative">
                        Uit eigen ervaring weet ik dat bijles krijgen een wereld
                        van verschil kan maken op je schoolresultaten.
                      </p>
                    </div>

                    <footer class="mt-4">
                      <p class="text-base font-semibold text-light-blue-200">
                        Joep Schaafsma, oprichter van Bijlesnodig.nl
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0"
          >
            <!-- Content area -->
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Over bijlesnodig.nl
              </h2>
              <div class="mt-6 space-y-6 text-gray-500">
                <p class="text-lg">
                  Bijlesnodig.nl is ontstaan door de toenemende behoefte aan
                  studiebegeleiding onder jongeren. Tegenwoordig is er een
                  tekort aan leraren/leraressen in zowel het hoge als lagere
                  onderwijs, dit resulteert in vollere klassen met steeds minder
                  persoonlijke aandacht. Bijlesnodig.nl is er voor de jongeren
                  die behoefte hebben aan meer begeleiding met bepaalde vakken
                  om zo de lesstof optimaal te beheersen.
                </p>
                <p class="text-base leading-7">
                  “Het platform is ontstaan uit eigen ervaring, als student heb
                  ik verschillende middelbare school leerlingen bijles gegeven.
                  Hierbij merkte ik dat voor sommige leerlingen een wekelijks
                  moment van persoonlijke aandacht een wereld van verschil kan
                  maken als er wordt gekeken naar de cijfers voor én na de
                  bijles.” -Joep Schaafsma, oprichter van Bijlesnodig.nl
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import WebHeader from '~/components/webLayout/webHeader'

export default {
  components: { WebHeader },
  data() {
    return {
      title: 'Over Bijlesnodig.nl',
      beschrijving: 'Het idee achter ons platform en het ontstaan hiervan',
    }
  },
  head() {
    return {
      titleTemplate: '%s | Over Bijlesnodig.nl',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Het idee achter ons platform en het ontstaan hiervan',
        },
      ],
    }
  },
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
