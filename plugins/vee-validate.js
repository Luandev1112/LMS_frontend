import { extend, setInteractionMode, configure } from 'vee-validate'
import {
  required,
  alpha,
  email,
  confirmed,
  regex,
  // eslint-disable-next-line camelcase
  alpha_spaces,
  max,
  image,
} from 'vee-validate/dist/rules'

extend('customRegex', {
  message: 'Vul een geldige postcode in',
  validate: (value) => {
    const mustTheseChars = /\d{4}[a-zA-Z]{2}/

    const containsRequiredChars = mustTheseChars.test(value)

    if (containsRequiredChars) {
      return true
    } else {
      return false
    }
  },
})

extend('required', {
  ...required,
  message: 'Dit is een verplicht veld',
})

extend('alpha', {
  ...alpha,
  message: 'Alleen alfabetische karakters toegestaan',
})
extend('email', {
  ...email,
  message: 'Dit is geen geldig e-mailadres',
})
extend('confirmed', {
  ...confirmed,
  message: 'De velden komen niet overeen',
})

extend('alpha_spaces', {
  // eslint-disable-next-line camelcase
  ...alpha_spaces,
  message: 'Alleen letters toegestaan',
})

setInteractionMode('eager')

configure({
  classes: {
    invalid:
      'block w-full px-3 py-2 text-red-900 placeholder-red-300 border-red-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm',
    valid:
      'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
    untouched:
      'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
  },
})

extend('regex', {
  ...regex,
  message:
    'Het wachtwoord moet uit minimaal 1 kleine letter, 1 hoofdletter, een cijfer en een speciaal teken bestaan en minimaal 8 tekens lang zijn',
})

extend('max', max)

extend('image', {
  ...image,
  message: 'Selecteer een .png, .jpeg of .gif bestand',
})
