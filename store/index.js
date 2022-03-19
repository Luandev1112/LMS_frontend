export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  selectedTutor(state) {
    return state.selectedTutor
  },
  allMessages(state) {
    return state.messages
  },
  allUserList(state) {
    return state.userList
  },
}

export const state = () => ({
  tutors: [],
  requests: [],
  selectedTutor: {},
  messages: [],
  userList: [],
})

export const mutations = {
  SET_TUTORS(state, tutors) {
    if (tutors == null || tutors.update === undefined) {
      state.tutors = tutors
    } else {
      const update = tutors.update
      state.tutors = { ...state.tutors, ...update }
    }
  },
  setSelectedTutor(state, selectedTutorId) {
    let selectedTutor
    if (typeof state.tutors.data !== 'undefined') {
      if (selectedTutorId) {
        selectedTutor = state.tutors.data.find(
          (x) => parseInt(x.id) === parseInt(selectedTutorId)
        )
        if (selectedTutor) {
          state.selectedTutor = selectedTutor
          this.$cookies.set('selectedTutor', state.selectedTutor)
        }
      }
    }
  },
  initSelectedTutor(state, initSelectedTutor) {
    state.selectedTutor = initSelectedTutor
  },

  setUser(state, user) {
    state.auth.user = user
  },

  setUserList(state, userList) {
    state.userList = userList
  },
  setMessages(state, messages) {
    state.messages = messages
  },
}

export const actions = {
  loadAllTutors({ commit }, postcode) {
    this.$axios
      .post('https://notawanker.com/tutors/search', {
        postcode,
      })

      .then(({ data }) => {
        console.log(data, 'tutor')
        commit('SET_TUTORS', data)
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  async getMessageUserList({ commit }, messageeid) {
    const data = JSON.stringify({
      messagee_id: messageeid,
      page_size: 1,
      page_number: 0,
    })
    /* const formData = new FormData()
    formData.append('messagee_id', messageeid) */
    await this.$axios
      .post('https://notawanker.com/messages/search', data)

      .then(({ data }) => {
        if (typeof data.included !== 'undefined') {
          commit('setUserList', data.included)
        } else {
          commit('setUserList', [])
        }
      })
      .catch((error) => {
        this.$toast.error('Messages not found', { duration: 3000 })
        commit('setMessages', '')
        console.log(error)
      })
  },
  async fetchMesages({ commit }, messageeid) {
    commit('setMessages', [])
    const data = JSON.stringify({
      messagee_id: parseInt(messageeid),
      page_size: 5,
    })
    const config = {
      method: 'post',
      url: 'https://notawanker.com/messages/search',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    await this.$axios(config)
      .then(function (response) {
        commit('setMessages', response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // eslint-disable-next-line camelcase
  async contactTutor({ commit }, message) {
    await this.$axios
      .post('https://notawanker.com/messages', {
        message,
      })
      .then(function (response) {
        return response
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  messageSend({ commit }, message) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('https://notawanker.com/messages', {
          message,
        })
        .then(
          (response) => {
            resolve(response)
          },
          (error) => {
            reject(error)
          }
        )
    })
  },
  setSelectedTutor({ commit }, tutorId) {
    commit('setSelectedTutor', tutorId)
  },
  nuxtServerInit({ commit, dispatch }, { req }) {
    // Parse cookies with cookie-universal-nuxt
    const SelectedTutor = this.$cookies.get('selectedTutor')
    const Requests = this.$cookies.get('requests')
    // Check if Cookie selectedTutor exists to set them in 'cookies'
    if (SelectedTutor) {
      commit('initSelectedTutor', SelectedTutor)
    }
    // Check if Cookie requests exists to set them in 'cookies'
    if (Requests) {
      commit('initRequests', Requests)
    }
  },
}
