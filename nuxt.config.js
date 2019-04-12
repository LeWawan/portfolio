module.exports = {
  /*
  ** Headers of the page
  */
  head: {
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
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css' },
      { rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', 
        integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      }
    ]
  },
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
    }
  },
  plugins: [
    { src: '~plugins/vue-typer', ssr: false}, 
    { src: '~plugins/vue-scrollto', ssr: false},
    { src: '~node_modules/animejs/anime', ssr: false}
  ],
  modules: [
    '@nuxtjs/component-cache',
    ['@nuxtjs/pwa', { icon: false }],
  ],
  manifest: {
    name: 'The Wawan Company',
    lang: 'fr'
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

