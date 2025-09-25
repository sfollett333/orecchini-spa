// router/index.js
// -------------------------------------------------------
// Configura il routing SPA con 4 voci:
// Home (/), Prodotti (/prodotti), Aggiungi (/aggiungi) e Dettagli (/dettagli/:id).
// In Navbar collego /dettagli senza id per mostrare un “selettore” o
// l'ultimo prodotto visualizzato (usando lo store).


import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Add from '../views/Add.vue'
import Detail from '../views/Detail.vue'


const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/prodotti', name: 'Prodotti', component: Products },
{ path: '/aggiungi', name: 'Aggiungi', component: Add },
// Rotta dettagli “con id” (master/detail)
{ path: '/dettagli/:id', name: 'Dettagli', component: Detail, props: true },
// Rotta “/dettagli” senza id: reindirizza all'ultimo visto oppure mostra una guida
{ path: '/dettagli', name: 'DettagliIndex', component: Detail, props: route => ({ id: null }) },
// 404 base
{ path: '/:pathMatch(.*)*', redirect: '/' } // reindirizza alla Home
]


const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
scrollBehavior() {
return { top: 0 }
}
})


export default router