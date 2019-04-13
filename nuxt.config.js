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
        })
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
    '@nuxtjs/component-cache',
    ['@nuxtjs/pwa'],
  ],
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

