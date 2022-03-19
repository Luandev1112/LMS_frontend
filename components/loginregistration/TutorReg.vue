<template>
  <form autocomplete="off">
    <div class="mt-8">
      <ValidationObserver ref="obs2" v-slot="{ invalid }">
        <section>
          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Account
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Kies een veilig wachtwoord voor je account.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6">
                          <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                          >
                            E-mailadres
                          </label>
                          <div class="mt-1">
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="email"
                              rules="required|email"
                              ><div class="relative">
                                <input
                                  id="email"
                                  v-model.trim="form.email"
                                  type="email"
                                  :class="classes"
                                  class="text-gray-800"
                                />
                              </div>
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
                          </div>
                        </div>

                        <ValidationObserver class="col-span-6 sm:col-span-3">
                          <div class="">
                            <label
                              for="password"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Wachtwoord
                            </label>
                            <div class="mt-1">
                              <ValidationProvider
                                v-slot="{ classes, errors }"
                                name="Password"
                                :rules="{
                                  required: true,
                                  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                }"
                                vid="password"
                              >
                                <input
                                  id="password"
                                  ref="password"
                                  v-model.trim="form.password"
                                  type="password"
                                  required
                                  :class="classes"
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                                />
                                <p
                                  v-show="errors"
                                  id="email-error"
                                  class="mt-2 text-sm text-red-600"
                                >
                                  {{ errors[0] }}
                                </p>
                              </ValidationProvider>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <label
                              for="password"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Bevestig wachtwoord
                            </label>
                            <div class="mt-1">
                              <ValidationProvider
                                v-slot="{ classes, errors }"
                                name="confirm Password"
                                rules="required|confirmed:password"
                              >
                                <input
                                  id="confirmpassword"
                                  v-model.trim="form.password_confirmation"
                                  type="password"
                                  required
                                  :class="classes"
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                                />
                                <p
                                  v-show="errors"
                                  id="email-error"
                                  class="mt-2 text-sm text-red-600"
                                >
                                  {{ errors[0] }}
                                </p>
                              </ValidationProvider>
                            </div>
                          </div>
                        </ValidationObserver>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200" />
            </div>
          </div>

          <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Profiel
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Deze informatie staat openbaar op je profiel.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                      <div>
                        <label
                          for="about"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Biografie
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            name="biography"
                            rules="required|max:350"
                            mode="aggressive"
                          >
                            <textarea
                              id="about"
                              v-model="form.biography"
                              name="about"
                              rows="3"
                              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                              placeholder="Iets over jezelf"
                            />
                            <p class="mt-1 text-xs font-medium text-gray-500">
                              Je kunt nog
                              {{ charactersRemaining }} tekens typen.
                            </p>
                          </ValidationProvider>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                          Een korte beschrijving over jezelf. Contactinformatie
                          niet toegestaan.
                        </p>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email_address"
                          class="block text-sm font-medium text-gray-700"
                          >Uurtarief</label
                        >
                        <div class="relative mt-1 rounded-md shadow-sm">
                          <div
                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                          >
                            <span class="text-gray-500 sm:text-sm"> € </span>
                          </div>
                          <ValidationProvider rules="required">
                            <input
                              id="price"
                              v-model="form.hourly_rate"
                              type="number"
                              class="block w-full pr-12 mt-1 text-gray-800 border-gray-300 rounded-md focus:ring-light-blue-500 focus:border-light-blue-500 pl-7 sm:text-sm"
                              placeholder="0.00"
                              aria-describedby="price-currency"
                              min="0"
                              oninput="validity.valid||(value='');"
                            />
                          </ValidationProvider>
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <span
                              id="price-currency"
                              class="text-gray-500 sm:text-sm"
                            >
                              EUR
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-1">
                        <label
                          for="location"
                          class="block text-sm font-medium text-gray-700"
                          >Vak</label
                        >
                        <ValidationProvider rules="required">
                          <select
                            id="subject"
                            v-model="form.subject"
                            name="subject"
                            autocomplete="subject"
                            class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                          >
                            <option>Wiskunde</option>
                            <option>Geschiedenis</option>
                            <option>Natuurkunde</option>
                          </select>
                        </ValidationProvider>
                      </div>

                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Profielfoto
                        </label>
                        <div class="flex items-center mt-1">
                          <span
                            class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full"
                          >
                            <img style="" :src="form.profile_image" alt="" />
                            <svg
                              v-if="form.profile_image == null"
                              class="w-full h-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </span>
                          <input
                            ref="file"
                            type="file"
                            accept="image/*"
                            style="display: none"
                            required
                            data-vv-as="image"
                            @change="selectImage"
                          />
                          <button
                            type="button"
                            class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click="launchFilePicker()"
                          >
                            Uploaden
                          </button>
                        </div>
                      </div>

                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Beschikbaarheid
                        </label>
                        <div class="flex flex-col mt-1">
                          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div
                              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                            >
                              <div
                                class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
                              >
                                <table
                                  class="min-w-full divide-y divide-gray-200"
                                >
                                  <thead class="bg-gray-50">
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
                                  <tbody
                                    class="bg-white divide-y divide-gray-200"
                                  >
                                    <tr v-for="day in week" :key="day.number">
                                      <td
                                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                      >
                                        {{ day.name }}
                                      </td>
                                      <td
                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                                      >
                                        <SwitchToggle v-model="dataToggle" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200" />
            </div>
          </div>

          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Persoonlijke informatie
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Je persoonlijke informatie is zichtbaar voor andere.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-700"
                            >Voornaam</label
                          >
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            name="First Name"
                            rules="required|alpha_spaces"
                          >
                            <input
                              id="first_name"
                              v-model="form.first_name"
                              type="text"
                              :class="classes"
                              name="first_name"
                              autocomplete="given-name"
                              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                            />
                            <p
                              v-show="errors"
                              id="email-error"
                              class="mt-2 text-sm text-red-600"
                            >
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last_name"
                            class="block text-sm font-medium text-gray-700"
                            >Achternaam</label
                          >
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            name="Last Name"
                            rules="required|alpha_spaces"
                          >
                            <input
                              id="last_name"
                              v-model="form.last_name"
                              type="text"
                              name="last_name"
                              autocomplete="family-name"
                              :class="classes"
                              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                            />
                            <p
                              v-show="errors"
                              id="email-error"
                              class="mt-2 text-sm text-red-600"
                            >
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>

                        <div class="col-span-6">
                          <label
                            for="sex"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Geslacht
                          </label>
                          <ValidationProvider name="Sex" rules="required">
                            <div class="grid grid-cols-3 gap-1">
                              <span>
                                <input
                                  id="sex"
                                  v-model="form.sex"
                                  type="radio"
                                  value="Vrouw"
                                  class="w-4 h-4 border-gray-500 text-light-blue-600 focus:ring-light-blue-500"
                                /><label class="ml-1 text-gray-800" for="one"
                                  >Vrouw</label
                                >
                              </span>
                              <span>
                                <input
                                  id="sex"
                                  v-model="form.sex"
                                  selected
                                  type="radio"
                                  value="Man"
                                  class="w-4 h-4 border-gray-500 text-light-blue-600 focus:ring-light-blue-500"
                                /><label class="ml-1 text-gray-800" for="one"
                                  >Man</label
                                >
                              </span>
                            </div>
                          </ValidationProvider>
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                          <label
                            for="zip"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Leeftijd
                          </label>
                          <div class="mt-1">
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="Age"
                              rules="required"
                            >
                              <input
                                id="age"
                                v-model.trim="form.age"
                                type="number"
                                :class="classes"
                                class="text-gray-800"
                                oninput="validity.valid||(value='');"
                                maxlength="2"
                                aria-describedby="age"
                                min="0"
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
                          </div>
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="city"
                            class="block text-sm font-medium text-gray-700"
                            >Woonplaats</label
                          >
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            name="City"
                            rules="required|alpha_spaces"
                          >
                            <input
                              id="city"
                              v-model="form.city"
                              type="text"
                              name="city"
                              :class="classes"
                              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                            />
                            <p
                              v-show="errors"
                              id="email-error"
                              class="mt-2 text-sm text-red-600"
                            >
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="postal_code"
                            class="block text-sm font-medium text-gray-700"
                            >Postcode</label
                          >
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            name="Zipcode"
                            rules="required|customRegex"
                          >
                            <input
                              id="postal_code"
                              v-model.trim="form.postcode"
                              type="text"
                              name="postal_code"
                              :class="classes"
                              autocomplete="postal-code"
                              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                              maxlength="6"
                              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-blue-500 focus:border-sky-blue-500 sm:text-sm"
                              @input="
                                form.postcode = $event.target.value.toUpperCase()
                              "
                            />
                            <p
                              v-show="errors"
                              id="email-error"
                              class="mt-2 text-sm text-red-600"
                            >
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200" />
            </div>
          </div>

          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0"></div>
              </div>
              <div>
                <button
                  v-if="type == 'Tutor'"
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium border border-transparent rounded-md shadow-sm text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  @click.prevent="type = 'Student'"
                >
                  Vorige stap
                </button>
                <button
                  v-if="steps == 1"
                  :disabled="invalid"
                  type="submit"
                  :class="[
                    invalid
                      ? 'flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium border border-gray-300 rounded-md shadow-sm text-gray-600 bg-gray-200'
                      : 'flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium border border-transparent rounded-md shadow-sm text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500',
                  ]"
                  @click.prevent="registerUser"
                >
                  Registreren
                </button>
              </div>
            </div>
          </div>
        </section>
      </ValidationObserver>
    </div>
  </form>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import SwitchToggle from '~/components/UI/SwitchToggle.vue'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    SwitchToggle,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
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
        type: '',
        email: 'ty@12.com',
        password: 'qwQW12!!',
        password_confirmation: 'qwQW12!!',
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
  computed: {
    charactersRemaining() {
      return this.maxCharacter - this.form.biography.length
    },
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click()
    },
    selectImage(e) {
      const selectedImage = e.target.files[0] // get image
      if (selectedImage instanceof Blob) {
        this.createBase64Image(selectedImage)
      } else {
        console.log('Choose a image')
      }
    },

    createBase64Image(fileObject) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.form.profile_image = e.target.result
      }
      reader.onerror = (err) => {
        alert(err)
      }
      if (fileObject) {
        reader.readAsDataURL(fileObject)
      }
    },
    registerUser() {
      const user = this.form

      this.$axios
        .post('http://notawanker.com/signup', {
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

<style></style>
