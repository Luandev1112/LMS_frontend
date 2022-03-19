<template>
  <main class="relative mt-16">
    <div class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
      <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div
          class="relative z-0 flex flex-1 overflow-hidden bg-white rounded-lg shadow"
        >
          <aside
            class="flex-shrink-0 hidden border-r border-gray-200 xl:order-first xl:flex xl:flex-col w-96"
          >
            <div class="px-6 pt-6 pb-4">
              <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
              <form class="flex mt-6 space-x-4">
                <div class="flex-1 min-w-0">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative rounded-md shadow-sm">
                    <div class="inset-y-0 left-0 flex items-center pl-3">
                      <input
                        v-model="searchString"
                        type="text"
                        name="search"
                        class="block w-full pl-10 border-gray-300 rounded-md focus:ring-sky-blue-800 focus:border-sky-blue-800 sm:text-sm"
                        placeholder="Zoeken.."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <nav class="flex-1 min-h-0 overflow-y-auto">
              <div v-if="allUserList.length > 0">
                <div class="relative">
                  <ul class="relative z-0 divide-y divide-gray-200">
                    <li
                      v-for="message in allUserList"
                      :id="message.id"
                      :key="message.id"
                      class=""
                      @click="
                        getUserWiseMessage(
                          message.id,
                          message.attributes.first_name
                        )
                      "
                    >
                      <div
                        class="relative flex items-center px-6 py-5 space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
                      >
                        <div class="flex-shrink-0">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 min-w-0">
                          <div
                            v-if="message.attributes.first_name"
                            class="discussion"
                            :class="{ message_active: active_el == message.id }"
                          >
                            <div class="focus:outline-none">
                              <span
                                class="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p class="text-sm font-medium text-gray-900">
                                {{ message.attributes.first_name }}
                                {{ message.attributes.last_name }}
                              </p>
                              <!-- <p class="message">9 pm at the bar if possible 😳</p> -->
                            </div>
                            <div class="text-sm text-gray-500 truncate">
                              {{ message.attributes.last_seen | cdate }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </aside>

          <section
            class="flex flex-col flex-1 h-full min-w-0 overflow-hidden xl:order-last"
          >
            <div v-if="newMesage.length > 0">
              <div class="pt-5 pb-6 bg-white shadow">
                <div
                  class="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8"
                >
                  <div class="sm:w-0 sm:flex-1">
                    <i class="icon fa fa-user-o" aria-hidden="true"></i>
                    <h1 class="text-lg font-medium text-gray-900">
                      {{ user_name }}
                    </h1>
                  </div>
                </div>
              </div>
              <ul class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
                <li
                  v-for="chat in newMesage"
                  :id="chat.id"
                  :key="chat.id"
                  class="px-4 py-6 shadow bg-sky-blue-100 sm:rounded-lg sm:px-6"
                >
                  <div class="sm:flex sm:justify-between sm:items-baseline">
                    <h3 class="text-base font-medium">
                      <span class="text-gray-900">{{ user_name }}</span>
                      <span class="text-gray-900">schreef</span>
                    </h3>
                    <p
                      class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3"
                    >
                      {{ chat.attributes.created_at | cdate }}
                    </p>
                  </div>
                  <div class="mt-4 space-y-6 text-sm text-gray-800">
                    <p>
                      {{ chat.attributes.content }}
                    </p>
                  </div>
                </li>

                <div class="footer-chat">
                  <form action="">
                    <div class="mt-1">
                      <textarea
                        id="message"
                        v-model.trim="messageForm.content"
                        name="message"
                        rows="4"
                        class="block w-full px-4 py-3 border rounded-md shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300"
                      />
                    </div>

                    <div class="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-blue-800 hover:bg-sky-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500 sm:w-auto"
                        @click.prevent="
                          submitForm(
                            newMesage[0].relationships.messagee.data.id
                          )
                        "
                      >
                        Verzenden
                      </button>
                    </div>
                  </form>
                </div>
              </ul>
            </div>
            <div v-else class="my-48 text-center">
              <h1>Welcome {{ fullName }}</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
// import Msg from '~/components/berichten/Messages'

export default {
  layout: 'app',
  // components: { Msg },
  filters: {
    cdate(datass) {
      if (!datass) return ''
      return moment(datass).fromNow()
    },
  },
  data() {
    return {
      newMesage: [],
      active_el: 0,
      user_name: '',
      allUserName: this.$store.state.userList,
      search: '',
      searchString: '',
      messageForm: {
        content: '',
        messagee_id: null,
      },
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'loggedInUser',
      'allMessages',
      'allUserList',
    ]),
    allUserList() {
      let searchArray
      searchArray = this.$store.state.userList
      let searchString
      searchString = this.searchString
      if (!searchString) {
        return searchArray
      }

      searchString = searchString.trim().toLowerCase()

      searchArray = searchArray.filter((item) => {
        if (item.attributes.first_name) {
          if (
            item.attributes.first_name.toLowerCase().includes(searchString) ||
            item.attributes.last_name.toLowerCase().includes(searchString)
          ) {
            return item
          }
        }
      })
      return searchArray
    },
    loggedInUserImage() {
      return this.loggedInUser.user.profile_image_path
        ? 'http://notawanker.com' + this.loggedInUser.user.profile_image_path
        : 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
    },
    fullName() {
      return this.loggedInUser.user.first_name &&
        this.loggedInUser.user.last_name
        ? this.loggedInUser.user.first_name +
            ' ' +
            this.loggedInUser.user.last_name
        : 'Foutmelding: Geen naam ingevoerd'
    },
  },
  mounted() {},
  created() {
    this.getMessageUserList(this.loggedInUser.user.id)
  },
  methods: {
    ...mapActions(['getMessageUserList', 'fetchMesages', 'contactTutor']),
    moment() {
      return moment()
    },
    async getUserWiseMessage(id, name) {
      this.newMesage = []
      await this.fetchMesages(id)
      this.newMesage = this.$store.state.messages
      this.active_el = id
      this.user_name = name

      console.log(this.newMesage)
    },
    submitForm(senderId) {
      this.formIsValid = true
      if (this.messageForm.content === '') {
        this.formIsValid = false
        return
      }

      const message = {
        content: this.messageForm.content,
        messagee_id: senderId,
      }
      // this.$store.dispatch('contactTutor', message)
      // const messageResponse = this.contactTutor(message)
      this.$store.dispatch('messageSend', message).then(
        (response) => {
          if (response.status === 200) {
            this.getLatestMessage(senderId)
            this.$toast.success('Bericht verzonden', { duration: 3000 })
          }
        },
        (error) => {
          this.$toast.error('Bericht niet verzonden', { duration: 3000 })
          console.log(error)
        }
      )
      // console.log(messageResponse, 'messageResponse')
      this.messageForm = {
        content: '',
      }
    },
    async getLatestMessage(id) {
      await this.fetchMesages(id)
      this.newMesage = []
      this.newMesage = this.$store.state.messages
    },
    /* SearchUser(search) {
      console.log(search)
    }, */
  },
}
</script>

<style scoped>
.mobile-active-link {
  @apply border-l-4 border-sky-blue-700;
}
</style>
