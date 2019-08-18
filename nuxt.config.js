import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'The Wawan Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Wawan Company' },
      { hid: 'title', name: 'title', content: 'The Wawan Company' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Nunito:200,600' },
      { rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', 
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
      }
    ]
  },
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }),
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    },
    extractCSS: true,
    postcss: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
  },
  plugins: [
    { src: '~plugins/vue-typer', ssr: false}, 
    { src: '~plugins/vue-scrollto', ssr: false},
    { src: '~node_modules/animejs/anime', ssr: false}
  ],
  modules: [
    ['@nuxtjs/component-cache', {
      max: 10000,
    }],
    ['@nuxtjs/pwa'],
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      }
    }],
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          presentation: "first self-taught and now a full stack developer. I opened my own company a short while ago. From small to large projects, I am open to any work proposal."
        },
        fr: {
          welcome: 'Bienvenue',
          presentation: "D'abord autodidacte et maintenant developpeur full stack. J'ai ouvert ma micro entreprise il y a peu. Des petits au grands projets, je suis ouvert à toute proposition de travail."
        }
      }
    }
  },
  manifest: {
    name: 'The Wawan Company',
    lang: 'fr',
    theme_color: '#ffffff',
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}

