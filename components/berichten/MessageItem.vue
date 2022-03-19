<template>
  <li class="my-3">
    <div class="border-b">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" :src="loggedInUserImage" alt="" />
        </div>
        <div class="mb-2">
          <div class="text-sm">
            <a href="#" class="font-medium text-gray-900">{{ fullName }}</a>
          </div>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              {{ message }}
            </p>
          </div>
          <div class="mt-2 space-x-2 text-sm">
            <span class="font-medium text-gray-500">Now</span>
            <span class="font-medium text-gray-500">&middot;</span>
            <button
              type="button"
              class="font-medium text-gray-900"
              @click="selectTextField"
            >
              Beantwoorden
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  filters: {
    truncate(string, value) {
      return string.substring(0, value) + '...'
    },
  },
  props: {
    message: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapState(['tutors']),
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
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
  methods: {
    selectTextField() {
      this.$refs.input.select()
    },
  },
}
</script>

<style></style>
