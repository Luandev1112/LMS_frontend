const path = require('path')

export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bijlesnodig.nl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#FFFFFF',
    height: '3px',
    throttle: 0,
  },

  router: {
    linkExactActiveClass: 'mobile-active-link',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/css/tailwind.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    jit: true,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/clickaway'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-fonts'],
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: false,
      },
    ],
  ],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://nuxtjs.org/faq/http-proxy
    '@nuxtjs/proxy',
    // https://auth.nuxtjs.org/guide/setup.html
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
    '@nuxtjs/prismic',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
  ],

  toast: {
    position: 'top-right',
    iconPack: 'fontawesome',
    register: [
      // Register custom toasts
      {
        name: 'test',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          iconPack: 'fontawesome',
          icon: 'circle',
          after: true,
        },
      },
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://notawanker.com',
    /* common: {
      Accept: 'application/json',
    }, */
  },
  proxy: {},
  prismic: {
    endpoint: 'https://bijlesnodig.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  auth: {
    localStorage: true,
    cookie: {
      options: {
        expires: 7,
      },
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://notawanker.com/login',
            method: 'post',
            propertyName: false,
          },
          logout: { url: 'https://notawanker.com/logout', method: 'delete' },
          user: {
            url: 'https://notawanker.com/users/current',
            method: 'get',
            propertyName: false,
            headers: { Accept: 'application/json, text/plain' },
          },
        },
      },
    },
    tokenRequired: true,
    tokenType: 'Bearer',
    plugins: [
      '~/plugins/vee-validate',
      { src: '~/plugins/auth.js', mode: 'client' },
      { src: '~/plugins/google-maps', ssr: true },
      { src: '~/plugins/persistedState.js', ssr: false },
    ],
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: false,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1,
      autoprefixer: {
        grid: true,
        flexbox: true,
      },
    },
    transpile: ['vee-validate/dist/rules', '/^vue2-google-maps($|/)/'],
  },
  // Basic Usage i18n (https://i18n.nuxtjs.org/basic-usage)
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
  generate: {
    fallback: '404.html', // Nuxt will load as an SPA
  },
}
