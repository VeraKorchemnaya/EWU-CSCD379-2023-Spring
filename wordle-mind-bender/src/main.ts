import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const dark_2 = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#ff5722'
  }
}

const zesty_citrus = {
  dark: false,
  colors: {
    primary: '#ffc107',
    secondary: '#ff9800',
    accent: '#ff5722',
    error: '#f44336',
    warning: '#e91e63',
    info: '#9c27b0',
    success: '#673ab7'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      dark_2,
      zesty_citrus
    }
  }
})

const app = createApp(App)

app.use(vuetify)

app.use(router)

app.mount('#app')
