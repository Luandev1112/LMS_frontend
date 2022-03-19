<template>
  <div>
    <div class="relative mb-8 overflow-hidden">
      <div class="grid grid-cols-2 gap-0">
        <div class="col-auto discussions">
          <div class="discussion search">
            <div class="searchbar">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input
                v-model="searchString"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div v-if="allUserList.length > 0">
            <div
              v-for="message in allUserList"
              :id="message.id"
              :key="message.id"
              class=""
              @click="
                getUserWiseMessage(message.id, message.attributes.first_name)
              "
            >
              <div
                v-if="message.attributes.first_name"
                class="discussion"
                :class="{ message_active: active_el == message.id }"
              >
                <div
                  class="photo"
                  style="
                    background-image: url(https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg);
                  "
                >
                  <div class="online"></div>
                </div>
                <div class="desc-contact">
                  <p class="name">
                    {{ message.attributes.first_name }}
                    {{ message.attributes.last_name }}
                  </p>
                </div>
                <div class="timer">
                  {{ message.attributes.last_seen | cdate }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="discussion animate-pulse">
              <div class="photo">
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name"></p>
              </div>
              <div class="timer"></div>
            </div>
          </div>
        </div>
        <div class="col-auto overflow-auto chat">
          <div v-if="newMesage.length > 0">
            <div class="header-chat">
              <i class="icon fa fa-user-o" aria-hidden="true"></i>
              <p class="name">{{ user_name }}</p>
            </div>
            <div class="overflow-auto messages-chat">
              <div
                v-for="chat in newMesage"
                :id="chat.id"
                :key="chat.id"
                class="message text-only"
              >
                <div class="response">
                  <p class="text">
                    {{ chat.attributes.content }}
                  </p>
                  <p class="response-time time">
                    {{ chat.attributes.created_at | cdate }}
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-chat">
              <i
                class="icon fa fa-smile-o clickable"
                style="font-size: 25pt"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                class="write-message"
                placeholder="Type your message here"
              />
              <i
                class="icon send fa fa-paper-plane-o clickable"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div v-else class="my-48 text-center">
            <h1>Welcome {{ fullName }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
// import Msg from '~/components/berichten/Messages'
/* import 'moment/locale/pt-br' */
export default {
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
    }
  },
  computed: {
    ...mapGetters(['allMessages', 'allUserList', 'loggedInUser']),
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
    ...mapActions(['getMessageUserList', 'fetchMesages']),
    moment() {
      return moment()
    },
    async getUserWiseMessage(id, name) {
      this.newMesage = []
      await this.fetchMesages(id)
      this.newMesage = this.$store.state.messages
      this.active_el = id
      this.user_name = name
    },
    /* SearchUser(search) {
      console.log(search)
    }, */
  },
}
</script>
