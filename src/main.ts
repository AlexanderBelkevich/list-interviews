import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyD3PQ9RM1yOHyWBehYL0BSH3v0aEgxsfGI',
  authDomain: 'interviews-e3988.firebaseapp.com',
  projectId: 'interviews-e3988',
  storageBucket: 'interviews-e3988.appspot.com',
  messagingSenderId: '495477223231',
  appId: '1:495477223231:web:78198cd224dc8c9a6f2d8a'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)

app.mount('#app')
