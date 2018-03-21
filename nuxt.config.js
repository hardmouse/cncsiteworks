module.exports = {
  router: {
    // base: '/works/cncworks/'
  },
  // srcDir: 'works/cncworks/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'cnc_works',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CNC works by F.M. Tsai' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    // Simple usage
    '@nuxtjs/bootstrap-vue',
    // With options
    ['@nuxtjs/bootstrap-vue', { css: false }],    
  ],
  css: [
    '../assets/css/bootstrap.css',
    '../assets/css/mainFrame.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 800000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
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
  }
}
