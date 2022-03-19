<template>
  <div>
    <web-header :title="title" :beschrijving="beschrijving"></web-header>
    <section class="home">
      <article>
        <section class="pb-16 m-4 bg-gray-100 rounded-2xl">
          <div class="px-16 mx-auto my-0 max-w-7xl">
            <div class="max-w-6xl px-0 pt-20 pb-6 mx-auto my-0">
              <!-- Check blog posts exist -->
              <div
                v-if="posts.length !== 0"
                class="grid max-w-lg mx-auto mt-12 gap-7 lg:grid-cols-2 lg:max-w-none"
              >
                <!-- Template for blog posts -->
                <section
                  v-for="post in posts"
                  :key="post.id"
                  :post="post"
                  class="flex flex-col overflow-hidden"
                >
                  <!-- Here :post="post" passes the data to the component -->
                  <blog-widget :post="post"></blog-widget>
                </section>
              </div>
              <!-- If no blog posts return message -->
              <div v-else class="blog-main">
                <p>No Posts published at this time.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
    <web-footer></web-footer>
  </div>
</template>

<script>
// Importing blog posts widget
import BlogWidget from '~/components/BlogWidget.vue'
import WebFooter from '~/components/webLayout/webFooter.vue'
import webHeader from '~/components/webLayout/webHeader.vue'

export default {
  name: 'Home',
  components: {
    BlogWidget,
    WebFooter,
    webHeader,
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
        image: homepageContent.image.url,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      title: 'Bijlesnodig.nl Nieuws',
      beschrijving: 'Het laatste nieuws en tips om je te helpen met leren',
    }
  },
  head() {
    return {
      titleTemplate: '%s | Nieuws en artikelen',
    }
  },
}
</script>
