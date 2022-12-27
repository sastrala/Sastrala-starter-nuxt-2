// webpack
import webpack from 'webpack'

// config
import { i18nConfig, vuetifyConfig, authConfig } from './config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // splash screen
  loadingIndicator: {
    name: 'chasing-dots',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sastrala - Template',
    meta: [
      { name: 'title', content: 'Sastrala - Template' },
      {
        name: 'description',
        content: 'Website pencatatan masuk & keluarnya keuangan Sastrala',
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },

      // open graph tag / facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'SOME_URL' },
      { property: 'og:title', content: 'Sastrala - Template' },
      {
        property: 'og:description',
        content: 'SOME_DESCRIPTION',
      },
      { property: 'og:image', content: '/banner.jpg' },
      { property: 'og:locale', content: 'id' },

      // twitter tag
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'SOME_URL' },
      { property: 'twitter:title', content: 'Sastrala - Template' },
      {
        property: 'twitter:description',
        content: 'SOME_DESCRIPTION',
      },
      { property: 'twitter:image', content: '/banner.jpg' },

      // verification
      // {
      //   name: 'facebook-domain-verification',
      //   content: 'm03vjte7psbccemaw3sk1afqa5uu7n',
      // },
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/notifier' }, { src: './plugins/repositories' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/victor-perez/nuxt-helmet
    'nuxt-helmet',
    // https://github.com/nuxt-community/i18n-module
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // auth config
  auth: authConfig,

  // i18n config
  i18n: i18nConfig,

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: vuetifyConfig,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    publicPath: '/_sastrala-finance/',
    transpile: process.env.NODE_ENV === 'production' ? ['vuetify'] : [],
    extractCSS: process.env.NODE_ENV === 'production',
    optimization:
      process.env.NODE_ENV === 'production'
        ? {
            minimize: true,
            splitChunks: {
              chunks: 'all',
              maxInitialRequests: Infinity,
              minSize: 0,
              cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name(module) {
                    const packageName = module.context.match(
                      /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                    )[1]
                    return `lib.${packageName.replace('@', '')}`
                  },
                },
              },
            },
          }
        : {},
    extend(config) {
      config.node = {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty',
      }
      return config
    },
  },
}
