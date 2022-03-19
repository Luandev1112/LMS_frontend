<template>
  <div>
    <div class="outer-container">
      <section
        class="pt-8 pb-24 m-4 bg-gradient-to-br from-cyan-600 to-green-400 rounded-2xl"
      >
        <div class="px-16 mx-auto my-0 max-w-7xl">
          <header class="bg-white rounded-lg shadow-lg">
            <nav class="flex flex-row items-center px-5">
              <div class="w-auto h-16 px-0">
                <a
                  href="/"
                  aria-label="Home"
                  class="flex items-center h-full pl-5 -ml-5"
                >
                  <span class="mr-20 text-2xl font-bold">Bijlesnodig.nl</span>
                </a>
              </div>
              <ul
                class="static flex flex-row justify-between flex-grow h-full py-0 text-sm bg-transparant"
              >
                <div class="flex justify-center flex-grow">
                  <li class="flex items-center">
                    <a
                      href="#"
                      class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                    >
                      Prijzen
                    </a>
                  </li>
                  <li class="flex items-center">
                    <a
                      href="/prijzen"
                      class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                    >
                      Hoe werkt Bijlesnodig.nl?
                    </a>
                  </li>
                  <li class="flex items-center">
                    <a
                      href="/prijzen"
                      class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                    >
                      Over ons
                    </a>
                  </li>
                </div>
                <div class="flex">
                  <li class="flex items-center">
                    <a
                      href="/login"
                      class="flex items-center justify-center flex-shrink-0 h-8 px-4 my-0 ml-0 mr-4 font-medium text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
                      >Login</a
                    >
                  </li>
                  <li class="flex items-center">
                    <a
                      href="/login"
                      class="flex items-center justify-center flex-shrink-0 h-8 px-4 m-0 font-medium text-gray-100 transition-colors bg-gray-900 rounded-md hover:bg-gray-800"
                      >Registreren</a
                    >
                  </li>
                </div>
              </ul>
            </nav>
          </header>
        </div>
        <div class="px-16 mx-auto my-0 max-w-7xl">
          <div
            class="flex flex-col items-center max-w-6xl pt-24 mx-auto my-0 text-center"
          >
            <div
              class="blog-avatar"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            ></div>
            <img :src="image" alt="" />
            <h1
              class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-5xl"
            >
              {{ $prismic.asText(document.title) }}
            </h1>
            <p
              class="mt-3 mb-8 text-base font-light text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
            >
              Gepubliceerd op {{ formattedDate }}
            </p>
          </div>
        </div>
      </section>
      <div class="back">
        <breadcrumbs-app></breadcrumbs-app>
      </div>
    </div>
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            class="absolute transform translate-x-32 top-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute transform translate-x-32 bottom-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <div
            class="mx-auto mt-6 prose prose-lg text-gray-500 prose-light-blue"
          >
            <!-- Slice Block Componenet tag -->
            <slices-block :slices="slices" />
          </div>
        </div>
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'
import WebFooter from '~/components/webLayout/webFooter.vue'

export default {
  name: 'Post',
  components: {
    SlicesBlock,
    WebFooter,
    BreadcrumbsApp,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      // Returns data to be used in template
      return {
        document: post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(post.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'Bijlesnodig.nl | Blog',
    }
  },
}
</script>
