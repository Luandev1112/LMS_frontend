<template>
  <div class="antialiased">
    <web-header :title="title" :beschrijving="beschrijving"></web-header>
    <div class="relative py-16 m-4 bg-gray-100 rounded-2xl lg:overflow-hidden">
      <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
        <div
          class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div class="w-full mx-auto">
            <div v-if="steps == 2">
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Vul je persoonlijke informatie in
              </h2>
            </div>

            <section v-if="steps == 1">
              <div class="grid grid-cols-2 gap-3 mt-1 text-center">
                <button
                  type="submit "
                  class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-blue-700 hover:bg-sky-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500"
                  @click.prevent="
                    nextStep()
                    form.type = 'Tutor'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-3 -ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Bijlesgever
                </button>
                <button
                  type="submit"
                  class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-blue-700 hover:bg-sky-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500"
                  @click.prevent="
                    nextStep()
                    form.type = 'Student'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-3 -ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  Bijleszoeker
                </button>
                <input
                  v-model="form.type"
                  class="hidden"
                  type="text"
                  required
                />
              </div>
            </section>
            <section v-if="form.type == 'Tutor'">
              <TutorReg :type="form.type" />
            </section>
            <section v-if="form.type == 'Student'"><StudentReg /></section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webHeader from '~/components/webLayout/webHeader'
import TutorReg from '~/components/loginregistration/TutorReg'
import StudentReg from '~/components/loginregistration/StudentReg'
export default {
  name: 'RegistrationPage',
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
  components: {
    webHeader,
    TutorReg,
    StudentReg,
  },
  data() {
    return {
      title: 'Schrijf je in',
      beschrijving: 'Maak een account aan als bijleszoeker of bijlesgever',
      steps: 1,
      totalSteps: 4,
      maxCharacter: 350,
      dataToggle: true,
      form: {
        type: 'Tutor',
        email: 'test@test.com',
        password: '12345678',
        password_confirmation: '12345678',
        first_name: 'Dennis',
        last_name: 'Kraaijeveld',
        sex: 'Man',
        age: 29,
        postcode: '7425NR',
        city: 'Deventer',
        subject: null,
        hourly_rate: null,
        biography: '',
        profile_image: null,
      },
      week: [
        { name: 'Maandag', number: 1 },
        { name: 'Dinsdag', number: 2 },
        { name: 'Woensdag', number: 3 },
        { name: 'Donderdag', number: 4 },
        { name: 'Vrijdag', number: 5 },
        { name: 'Zaterdag', number: 6 },
        { name: 'Zondag', number: 7 },
      ],
    }
  },
  mounted() {},
  methods: {
    registerUser() {
      const user = this.form
      this.$axios
        .post('https://notawanker.com/signup', {
          user,
        })
        .then(() => {
          this.isNotification = true
        })
    },
    nextStep() {
      this.steps++
    },
    previousStep() {
      this.steps--
    },
    submitReg() {
      alert('SEND REG')
    },
  },
}
</script>

<style>
button.highlight {
  background: yellow;
}
.block-enter {
  opacity: 0;
}
.block-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
