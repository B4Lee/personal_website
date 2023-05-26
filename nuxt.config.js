export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Iqbal Anggoro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Front-end Web Developer',
      },
      
      {
        hid: 'og-type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: `https://b4le.my.id/`,
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: `Iqbal Anggoro`,
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: `Front-end Web Developer`,
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: ``,
      },

      
      {
        hid: 'twitter-card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter-url',
        property: 'twitter:url',
        content: `https://b4le.my.id/`,
      },
      {
        hid: 'twitter-title',
        property: 'twitter:title',
        content: `Iqbal Anggoro`,
      },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: `Front-end Web Developer`,
      },
      {
        hid: 'twitter-image',
        property: 'twitter:image',
        content: ``,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
    // https://v2.color-mode.nuxtjs.org/
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: ''
  },
  
  purgeCSS: {    
    whitelist: ['dark-mode'],  
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Iqbal Anggoro',
      description:
        'Front-end Web Developer',
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
