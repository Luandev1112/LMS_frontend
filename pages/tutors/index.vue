<template>
  <div>
    <div>
      <breadcrumbs-app></breadcrumbs-app>
    </div>
    <div class="relative min-h-calc">
      <div class="relative z-20 w-left">
        <div class="pt-10">
          <!-- search form -->
          <div class="flex items-center mx-12 my-0">
            <div class="flex flex-grow flex-shrink w-full">
              <div class="w-full">
                <form @submit.prevent="fetchTutors">
                  <div class="flex mt-1 rounded-md shadow-sm">
                    <div
                      class="relative flex items-stretch flex-grow focus-within:z-10"
                    >
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <!-- Heroicon name: location-marker -->
                        <svg
                          class="w-5 h-5 text-gray-500"
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

                      <input
                        id="search_field"
                        v-model="postcode"
                        type="search"
                        name="postcode_search"
                        class="block w-full pl-10 border-gray-300 rounded-none focus:ring-light-blue-500 focus:border-light-blue-500 rounded-l-md sm:text-sm"
                        placeholder="Jouw postcode"
                        autocomplete="off"
                      />
                    </div>
                    <button
                      class="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-light-blue-700 rounded-r-md bg-light-blue-700 hover:bg-light-blue-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-light-blue-500"
                    >
                      <!-- Heroicon name: sort-ascending -->
                      <svg
                        class="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="flex items-center mx-12 my-0">
            <div class="flex flex-grow flex-shrink w-full">
              <div
                class="relative z-10 flex items-center w-full h-16 py-0 pr-0 border-b-0"
              >
                <div class="flex justify-between w-full">
                  <div class="flex items-center">
                    <client-only>
                      <div class="pr-4">
                        <button
                          id="sort-menu"
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          aria-haspopup="true"
                          aria-expanded="false"
                          @click="openRangeSlider"
                        >
                          <!-- Heroicon name: location-marker -->
                          <svg
                            class="w-5 h-5 mr-3 text-gray-400"
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
                          Afstand
                          <!-- Heroicon name: chevron-down -->
                          <svg
                            class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>

                        <!-- RANGE SLIDER  -->
                        <!-- <div
                            class="absolute left-0 z-40 p-2 mt-1 rounded-md shadow-lg w-60"
                          >
                            <VueSimpleRangeSlider
                              v-model="number"
                              style="width: 225px"
                              :min="5"
                              :max="50"
                            />
                          </div> -->
                      </div>
                      <div class="pr-4">
                        <button
                          id="sort-menu"
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <!-- Heroicon name: book-open -->
                          <svg
                            class="w-5 h-5 mr-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            ></path>
                          </svg>
                          Vak
                          <!-- Heroicon name: chevron-down -->
                          <svg
                            class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="pr-4">
                        <button
                          id="sort-menu"
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <!-- Heroicon name: currency-euro -->
                          <svg
                            class="w-5 h-5 mr-3 text-gray-400"
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
                          Tarief
                          <!-- Heroicon name: chevron-down -->
                          <svg
                            class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative mx-auto px-14">
          <div class="pt-20">
            <section>
              <h1
                v-if="tutors.length > 0"
                class="text-3xl font-medium leading-5 text-sky-blue-800 whitespace-nowrap overflow-ellipsis"
              >
                <b class="text-black">{{ tutorCount }}</b> Bijlesgevers
                <span class="text-black outline-none">op postcode</span>
                <span v-if="postcode.length > 0">{{ currentZip }}</span>
                <span v-else>****</span>
              </h1>
              <div v-else class="p-4 rounded-md bg-light-blue-50">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: information-circle -->
                    <svg
                      class="w-5 h-5 text-light-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="flex-1 ml-3 md:flex md:justify-between">
                    <p class="text-sm text-light-blue-700">
                      Geen resultaten gevonden. Vul je postcode in.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="min-h-screen overflow-hidden">
          <div class="overflow-anchor-none">
            <div
              v-if="
                typeof tutors.data !== 'undefined' && tutors.data.length > 0
              "
              class="relative px-10 mx-auto bg-transparant"
            >
              <div>
                <div>
                  <ul id="tutors" class="p-0 -mx-3">
                    <div class="mt-4 mb-7">
                      <div class="border-item"></div>
                    </div>
                    <div v-for="tutor in tutors.data" :key="tutor.id">
                      <tutor-item
                        :id="tutor.id"
                        :key="tutor.id"
                        :first-name="tutor.attributes.first_name"
                        :last-name="tutor.attributes.last_name"
                        :rate="tutor.attributes.hourly_rate"
                        subject="subject"
                        :description="tutor.attributes.biography"
                        :profile-image="tutor.attributes.profile_image_path"
                        :age="tutor.attributes.age"
                        star-rating="Rating"
                        total-reviews="ReviewCount"
                        class="inline-block w-full whitespace-normal align-top"
                      >
                      </tutor-item>
                    </div>
                    <!-- <div v-for="(tutor, index) in tutors.data" :key="index">
                    </div> -->
                    <!-- <tutor-item
                      v-for="(tutor, index) in tutors.data"
                      :id="tutor.data[`${index}`].id"
                      :key="tutor.data[`${index}`].id"
                      :first-name="tutor.data[`${index}`].attributes.first_name"
                      :last-name="tutor.data[`${index}`].attributes.last_name"
                      :rate="tutor.data[`${index}`].attributes.hourly_rate"
                      :subject="tutor.data[`${index}`].attributes.subject"
                      :description="tutor.data[`${index}`].attributes.biography"
                      :profile-image="
                        tutor.data[`${index}`].attributes.profile_image_path
                      "
                      :age="tutor.data[`${index}`].attributes.age"
                      :star-rating="tutor.data[`${index}`].attributes.rating"
                      :total-reviews="student.reviewCount"
                      class="inline-block w-full whitespace-normal align-top"
                    >
                    </tutor-item> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-auto block w-right inset-map">
        <aside class="sticky top-0 w-full h-screen pt-32 -mt-32">
          <div class="relative w-full h-full">
            <div class="relative w-full h-full overflow-hidden bg-white">
              <div
                class="top-0 left-0 w-full h-full overflow-hidden bg-gray-900"
              >
                <div class="top-0 z-0 w-full h-full p-0 m-0 border-0 l-0">
                  <section aria-labelledby="messages-title">
                    <div class="bg-white shadow sm:overflow-hidden">
                      <div
                        id="map"
                        ref="map-root"
                        class="w-full map"
                        style="height: 60rem"
                      ></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
// import VueSimpleRangeSlider from 'vue-simple-range-slider'
// import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

import 'ol/ol.css'
import { Circle, Fill, Style } from 'ol/style'
import { Feature, Map, View } from 'ol/index'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Point } from 'ol/geom'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { useGeographic } from 'ol/proj'

import tutorItem from '~/components/tutors/tutorItem.vue'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'
useGeographic()

export default {
  name: 'Zoeken',
  components: { tutorItem, BreadcrumbsApp },
  mixins: [clickaway],
  middleware: 'auth',
  data: () => ({
    range: [20, 1000],
    number: 10,
    center: { lat: 52.379189, lng: 4.899431 },
    searchLoading: false,
    afterLoading: false,
    circle_markers: [],
    current_position: { lat: null, lng: null },
    current_zoom: null,
    radius: null,
    markers: [
      {
        position: new Point([5.222124, 52.171353]),

        clicked: false,
      },
      {
        position: new Point([5.122124, 50.371353]),

        clicked: false,
      },
      {
        position: new Point([5.92124, 51.371353]),

        clicked: false,
      },
      {
        position: new Point([4.592124, 52.371353]),

        clicked: false,
      },
      {
        position: new Point([5.292124, 52.371353]),

        clicked: false,
      },
      {
        position: new Point([5.522124, 52.371353]),

        clicked: false,
      },
    ],

    infoWindowPos: null,
    infoWinOpen: false,
    isRangeOpen: false,
    currentMidx: null,

    infoOptions: {
      content: '',
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },

    postcode: '',
    attributes: [],
    users: [],
    student: {
      imageUrl:
        'https://r9b7u4m2.stackpathcdn.com/prod/sites/eXfkOOiYH-uoddxClSi52viuasTF1mJ8olZ0u-tOtfFqK66gZCc90Ly_Uoc0VmR1eULwQ0uGf2JhPt4yPTts8A/themes/base/assets/images/avatar-1.png',
      imageAlt: 'Profielfoto Bijlesnodig',
      availability: {
        Monday: true,
        Dinsdag: true,
        Woensdag: false,
        Donderdag: false,
        Vrijdag: false,
        Zaterdag: true,
        Zondag: true,
      },
      subject: 'Wiskunde',
      firstName: 'Dennis',
      lastName: 'Kraaijeveld',
      age: '19',
      sex: 'Vrouw',
      biography:
        'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they are actually proud of that shit. ',
      email: 'elise91xx@gmail.com',
      lastSeen: '14-11-2020',
      hourlyRate: '11',
      rating: '4.5',
      reviewCount: '67',
    },
  }),

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapState(['tutors']),
    tutorCount() {
      return this.tutors.length
    },
    currentZip() {
      return this.postcode
    },
  },
  async mounted() {
    this.$axios
      .get('/messages')
      .then((response) => (this.allMessages = response))
    await this.initiateMap()
  },
  updated() {},
  methods: {
    async fetchTutors() {
      const postcode = this.postcode
      await this.$store.dispatch('loadAllTutors', postcode)
    },

    initiateMap() {
      const place = [5.222124, 52.371353]
      const point = new Point(place)
      const placeTwo = [0.322124, 52.371353]
      const pointTwo = new Point(placeTwo)

      const map = new Map({
        target: this.$refs['map-root'],
        view: new View({
          center: place,
          zoom: 8,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [new Feature(point), new Feature(pointTwo)],
            }),
            style: new Style({
              image: new Circle({
                radius: 9,
                fill: new Fill({ color: '#005AA3' }),
              }),
            }),
          }),
        ],
      })

      console.log(map, 'map')

      // map over markers to set marker in openlayer
      this.markers.forEach((marker) => {
        const markerLayer = new VectorLayer({
          source: new VectorSource({
            features: [new Feature(marker.position)],
          }),
          style: new Style({
            image: new Circle({
              radius: 9,
              fill: new Fill({ color: '#005AA3' }),
            }),
          }),
        })
        map.addLayer(markerLayer)
        console.log(markerLayer, 'markerLayer')
      })
    },

    toggleInfoWindow(marker, idx) {
      const content = `
      <h6 class="font-weight-bold" style="padding:15px;padding-bottom:7px;">
        ${marker.price}
      </h6>`

      this.infoWindowPos = marker.position
      this.infoOptions.content = content

      this.infoWinOpen = true
      this.currentMidx = idx
    },

    openRangeSlider() {
      this.isRangeOpen = !this.isRangeOpen
    },
    close() {
      this.isRangeOpen = false
    },
  },
  layout: 'app',
}
</script>
