// store/index.js (Vuex)
// -------------------------------------------------------
// Questo store simula un “database”.

import { createStore } from 'vuex'


const STORAGE_KEY = 'orecchini-spa'
const DATA_VERSION = 2 // ↑ incrementa quando cambi il seed


function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data.version !== DATA_VERSION) return null // forza refresh seed
    return data
  } catch (e) { return null }
}


function saveToStorage(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    version: DATA_VERSION,
    products: state.products,
    lastViewedId: state.lastViewedId
  }))
}

// seedProducts: array dei prodotti (4 orecchini)
const seedProducts = [
 {
   id: 'E-0001',
   name: 'Circolari eleganti',
   price: 49.9,
   description: 'Orecchini pendenti in argento placcato oro 925 con charm. Nichel free.',
   materials: ['Argento 925'],
   colors: ['Argento placcato oro'],
   inStock: true,
   rating: 4.7,
   tags: ['eleganti', 'nichel-free', 'argento'],
   images: [ '/images/Orecchini1.webp',
    '/images/Orecchini1ragazza.png'
   ]
},
{
   id: 'E-0002',
   name: 'Celestinia',
  price: 39.0,
  description: 'Pendenti in argento placcato oro, con pietra celestina, leggeri e anti-allergici.',
  materials: ['Acciaio IP Gold'],
  colors: ['Oro'],
  inStock: true,
  rating: 4.4,
  tags: ['cerchi', 'oro', 'classico'],
  images: ['/images/Orecchini2.webp',
    '/images/Orecchini2ragazza.png'
  ]
},
{
  id: 'E-0003',
  name: 'Perle colorate',
  price: 59.0,
  description: 'Punti luce con perle coltivate da 6mm. Chiusura in argento.',
  materials: ['Perla Coltivata', 'Argento'],
  colors: ['Multi-colori'],
  inStock: false,
  rating: 4.9,
  tags: ['perle', 'casual', 'colorati'],
  images: ['/images/Orecchini3.webp',
    '/images/Orecchini3ragazza.png'
  ]
},
{
  id: 'E-0004',
  name: 'Zircone dorato',
  price: 79.90,
  description: 'Orecchini in acciaio inossidabile, placcato oro, pietra zircone.',
  materials: ['Acciaio Inox', 'Zircone'],
  colors: ['Oro'],
  inStock: true,
  rating: 4.2,
  tags: ['lusso', 'placcato oro', 'eleganti'],
  images: ['/images/Orecchini4.webp',
    '/images/Orecchini4ragazza.png'
  ]
}
]

const persisted = loadFromStorage()


export default createStore({
 state: {
  products: persisted?.products || seedProducts,
  lastViewedId: persisted?.lastViewedId || null
},
getters: {
 allProducts: (state) => state.products,
 byId: (state) => (id) => state.products.find(p => p.id === id) || null,
 featured: (state) => state.products.slice(0, 3), //
 // Ricerca semplice per nome, tag e materiali
 search: (state) => (q) => {
  if (!q) return state.products
  const needle = q.toLowerCase()
  return state.products.filter(p =>
    p.name.toLowerCase().includes(needle) ||
    p.tags.join(' ').toLowerCase().includes(needle) ||
    p.materials.join(' ').toLowerCase().includes(needle)
  )
}
},
mutations: {
 ADD_PRODUCT(state, payload) {
  state.products.unshift(payload)
  saveToStorage(state)
},
 TOGGLE_STOCK(state, id) {
  const p = state.products.find(p => p.id === id)
  if (p) p.inStock = !p.inStock
  saveToStorage(state)
},
 SET_LAST_VIEWED(state, id) {
  state.lastViewedId = id
  saveToStorage(state)
}
},
actions: {
// Azione asincrona fittizia per mostrare pattern async/await
 async addProductAsync({ commit }, payload) {
  await new Promise(r => setTimeout(r, 250))
  commit('ADD_PRODUCT', payload)
  }
 }
})