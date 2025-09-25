<template>
  <!--
    Pagina elenco prodotti (master/detail).
  -->
  <section>
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3 gap-2">
      <h1 class="h4 m-0">Tutti i prodotti</h1>
      <form class="d-flex" @submit.prevent>
        <input v-model.trim="q" class="form-control me-2" placeholder="Cerca per nome, tag o materiale…" />
        <button class="btn btn-outline-secondary" type="button" @click="q=''">Reset</button>
      </form>
    </div>

    <div v-if="filtered.length === 0" class="alert alert-warning">
      Nessun prodotto trovato. Prova a modificare i criteri di ricerca.
    </div>

    <div class="row g-3">
      <div class="col-12 col-md-6 col-lg-4" v-for="p in filtered" :key="p.id">
        <ProductCard :product="p" @toggle-stock="toggleStock" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Products',
  components: { ProductCard },
  data() {
    return { q: '' }
  },
  computed: {
    ...mapGetters(['search']),
    filtered() {
      return this.search(this.q)
    }
  },
  methods: {
    toggleStock(id) {
      this.$store.commit('TOGGLE_STOCK', id)
    }
  }
}
</script>