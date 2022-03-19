<template>
  <div>
    <breadcrumbs-app></breadcrumbs-app>
    <main class="py-10">
      <!-- Page header -->
      <div
        class="max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
      >
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img class="w-16 h-16 rounded-full" :src="image" alt="" />
              <span
                class="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ fullName }}</h1>
            <p class="text-sm font-medium text-gray-500">
              Laatst online gezien op
              <span class="text-gray-900"
                ><time datetime="2020-08-25">{{ lastSeen }}</time></span
              >
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse mt-6 space-y-4 space-y-reverse justify-stretch sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
        >
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-light-blue-500"
            @click="selectTextField"
          >
            Stuur een bericht
          </button>
          <button
            type="button"
            class="inline-flex items-center p-2 text-white border rounded-full shadow-sm bg-transparant hover:bg-red-700 focus:outline-none"
            :class="
              isFavouriteTutor ? 'border-red-700 bg-red-700' : 'border-red-700'
            "
            @click="toggleFav"
          >
            <!-- Heroicon name: heart -->
            <svg
              class="w-6 h-6 text-red-700"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Profiel van {{ fullName }}
                </h2>
                <p class="max-w-2xl mt-1 text-sm text-gray-500">
                  Persoonlijke details en beschikbaarheid
                </p>
              </div>
              <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Geeft les in
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ subject }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Leeftijd</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ age }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Tarief</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ rate }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Rating</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ rating }}</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Over mij</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ description }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <!-- Comments-->
          <section aria-labelledby="messages-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Berichten
                  </h2>
                  <p><i class="fas fa-check check"></i></p>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul v-if="allMessages">
                    <message-item> inbox </message-item>
                    <pre>{{ allMessages }}</pre>
                  </ul>
                  <h3 v-else>Er zij geen nieuwe berichten gevonden.</h3>
                </div>
              </div>
              <div class="px-4 py-6 bg-gray-50 sm:px-6">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      :src="loggedInUserImage"
                      alt=""
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <form action="#">
                      <div>
                        <label for="message" class="sr-only">About</label>
                        <textarea
                          id="messageMe"
                          ref="input"
                          v-model.trim="messageForm.content"
                          name="message"
                          rows="3"
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                          placeholder="Schrijf een bericht"
                        ></textarea>
                        <p v-if="!formIsValid">
                          Oeps, je bericht is leeg. Vul alstublieft wat in
                        </p>
                      </div>
                      <div class="flex items-center justify-end mt-3">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          @click.prevent="submitForm"
                        >
                          Verstuur bericht
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="messages-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    map
                  </h2>
                </div>
                <div class="px-4 py-6 h-96 sm:px-6">
                  <div id="map" class="map h-80">
                    <div id="popup"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section aria-labelledby="calender-title">
          <div class="px-4 pt-5 bg-white shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
              Beschikbaarheid
            </h2>
            <!-- Calender Feed -->
            <div class="mt-6">
              <ul class="-mb-8">
                <table class="min-w-full pb-10 divide-y divide-sky-blue-200">
                  <thead class="bg-sky-blue-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Dag
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Beschikbaar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Maandag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Ja
                      </td>
                    </tr>
                    <tr class="bg-sky-blue-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Dinsdag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Nee
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Woensdag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Nee
                      </td>
                    </tr>
                    <tr class="bg-sky-blue-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Donderdag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Ja
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Vrijdag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Ja
                      </td>
                    </tr>
                    <tr class="bg-sky-blue-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Zaterdag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Nee
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Zondag
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Nee
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import 'ol/ol.css'
import { Circle, Fill, Style } from 'ol/style'
import { Feature, Map, Overlay, View } from 'ol/index'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Point } from 'ol/geom'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { useGeographic } from 'ol/proj'
import MessageItem from '~/components/berichten/MessageItem'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'
useGeographic()

export default {
  name: 'TutorPage',
  components: { BreadcrumbsApp, MessageItem },
  asyncData({ app, params, store }) {
    if (!process.client) return
    const tutors = JSON.parse(localStorage.getItem('vuex') || '{}')
    if (tutors) {
      store.dispatch('nuxtServerInit', tutors)
    }
  },
  data() {
    return {
      id: null,
      isFavouriteTutor: false,
      formIsValid: true,
      messageForm: {
        content: '',
      },
      allMessages: null,
    }
  },
  computed: {
    ...mapState(['tutors']),
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapGetters({
      selectedTutor: 'selectedTutor',
    }),
    receivedRequest() {
      return this.$store.getters.request
    },
    hasRequests() {
      return this.$store.getters.hasRequest
    },

    fullName() {
      console.log(this.selectedTutor, 'this.selectedTutor')
      return this.selectedTutor.attributes.first_name &&
        this.selectedTutor.attributes.last_name
        ? this.selectedTutor.attributes.first_name +
            ' ' +
            this.selectedTutor.attributes.last_name
        : 'Foutmelding: Geen naam ingevoerd'
    },
    lastSeen() {
      const day = ['26']
      const month = ['03']
      const year = ['2021']

      return this.selectedTutor.attributes.last_seen
        ? day + '-' + month + '-' + year
        : 'Geen online status beschikbaar'
    },
    rate() {
      const HourlyRate = this.selectedTutor.attributes.hourly_rate

      return this.selectedTutor.attributes.hourly_rate
        ? '€' + HourlyRate + '0' + ' per uur'
        : 'Foutmelding: Geen tarief beschikbaar'
    },
    description() {
      return 'description'
      /* return this.selectedTutor.data.attributes.biography
        ? this.selectedTutor.data.attributes.biography
        : 'Foutmelding: Geen beschrijving beschrikbaar' */
    },
    subject() {
      return 'subject'
      /* return this.selectedTutor.data.attributes.subject
        ? this.selectedTutor.data.attributes.subject
        : 'Foutmelding: Geen vak beschikbaar' */
    },
    age() {
      return this.selectedTutor.attributes.age
        ? this.selectedTutor.attributes.age
        : 'Foutmelding: Geen leeftijd beschikbaar'
    },
    rating() {
      return 'Rating'
      /* return this.selectedTutor.data.attributes.rating
        ? this.selectedTutor.data.attributes.rating
        : 'Foutmelding: Geen beoordeling beschikbaar' */
    },
    image() {
      return this.selectedTutor.attributes.profile_image_path
        ? 'http://notawanker.com' +
            this.selectedTutor.attributes.profile_image_path
        : 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
    },
    loggedInUserImage() {
      return 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
      /* return this.loggedInUser.user.profile_image_path
        ? 'http://notawanker.com' + this.loggedInUser.user.profile_image_path
        : 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif' */
    },
  },
  /* async mounted() {
    await this.initiateMap()
  }, */
  /* eslint-disable vue/require-prop-types */
  layout: 'app',
  middleware: 'auth',
  async mounted() {
    this.$axios
      .get('/messages')
      .then((response) => (this.allMessages = response))
    await this.initiateMap()
  },
  created() {
    this.setSelectedId()
  },
  methods: {
    setSelectedId() {
      // Getting the tutor id and converting it to a number
      const idString = this.$route.params.id
      const idNum = parseInt(idString)
      this.id = idNum
      // Look trough the state for the id and set the correct tutor
      this.$store.dispatch('setSelectedTutor', idNum)
    },
    submitForm() {
      this.formIsValid = true
      if (this.messageForm.content === '') {
        this.formIsValid = false
        return
      }

      const message = {
        content: this.messageForm.content,
        messagee_id: 77,
      }
      this.$store.dispatch('contactTutor', message)
      this.messageForm = {
        content: '',
      }
    },
    selectTextField() {
      const element = document.getElementById('messageMe')
      element.scrollIntoView({ behavior: 'smooth' })
      this.$refs.input.select()
    },
    toggleFav() {
      this.isFavouriteTutor = !this.isFavouriteTutor

      if (this.isFavouriteTutor === true) {
        this.$toast.success('Toegevoegd aan favorieten', {
          iconPack: 'fontawesome',
          icon: 'check',
          position: 'top-right',
          duration: 3000,
        })
      } else {
        this.$toast.success('Verwijderd uit jouw favorieten', {
          iconPack: 'fontawesome',
          icon: 'check',
          position: 'top-right',
          duration: 3000,
        })
      }
    },
    initiateMap() {
      const place = [5.222124, 52.371353]
      const point = new Point(place)

      const map = new Map({
        target: 'map',
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
              features: [new Feature(point)],
            }),
            style: new Style({
              image: new Circle({
                radius: 9,
                fill: new Fill({ color: 'green' }),
              }),
            }),
          }),
        ],
      })
      console.log(map, 'map')
      const element = document.getElementById('popup')
      const popup = new Overlay({
        element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, 0],
      })
      map.addOverlay(popup)
    },
  },
}
</script>

<style scoped>
/* #map {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 500px;
  width: 99%;
} */
</style>
