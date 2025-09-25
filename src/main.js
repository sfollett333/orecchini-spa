// main.js
// ---------------------------------------------
// Inizializza l'app Vue 3, collega router e store (Vuex) e importa Bootstrap.

import { createApp } from 'vue'
import App from './App.vue'


// Router e Store
import router from './router'
import store from './store'


// Bootstrap 5 (CSS + JS bundle)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


// Stili globali di base (opzionali): font, reset minimi
const style = document.createElement('style')
style.innerHTML = `
:root { --brand:#4f46e5; }
body { font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
a { text-decoration: none; }
`
document.head.appendChild(style)

createApp(App)
.use(store)
.use(router)
.mount('#app')

