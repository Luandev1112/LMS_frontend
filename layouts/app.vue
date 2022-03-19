<template>
  <div class="antialiased text-gray-900">
    <div class="min-h-screen bg-gray-50">
      <appNavBar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import appNavBar from '~/components/appLayout/appNavBar'

export default {
  components: { appNavBar },
  middleware: 'auth',
  computed: {
    ...mapState(['tutors']),
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  head: {
    title: 'Bijlesnodig.nl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Local Dev Env',
      },
    ],
  },
}
</script>
