
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Modal } from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Modal', Modal)
app.mount('#app')
