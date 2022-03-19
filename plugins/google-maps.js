import Vue from 'vue'
import * as GmapVue from '~/node_modules/gmap-vue'

Vue.use(GmapVue, {
  load: {
    key: process.env.GOOGLE_API_KEY,
    libraries: 'places',
  },
})
