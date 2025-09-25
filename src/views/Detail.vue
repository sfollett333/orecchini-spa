<template>
  <section v-if="product" class="row g-4">
    <!-- Colonna immagini -->
    <div class="col-12 col-lg-6">
      <div v-if="product.images?.length">
        <img
          :src="product.images[activeImg]"
          :alt="product.name"
          class="w-100 h-100"
          style="object-fit: cover;"
        />
        <div class="d-flex gap-2 mt-2 flex-wrap">
          <button
            v-for="(img, idx) in product.images"
            :key="img"
            class="btn btn-outline-secondary btn-sm"
            :class="{ active: idx === activeImg }"
            @click="activeImg = idx"
          >
          </button>
        </div>
      </div>
      <div v-else class="bg-light rounded p-5 text-center text-muted">
        Nessuna immagine
      </div>
    </div>

    <!-- Colonna info -->
    <div class="col-12 col-lg-6">
      <h1 class="h4">{{ product.name }}</h1>
      <div class="d-flex align-items-center gap-2 mb-2">
        <span class="fs-5 fw-semibold">{{ formattedPrice }}</span>
        <span class="badge" :class="product.inStock ? 'text-bg-success' : 'text-bg-danger'">
          {{ product.inStock ? 'Disponibile' : 'Non disponibile' }}
        </span>
      </div>
      <p class="text-muted">{{ product.description }}</p>

      <div class="mb-2">
        <strong>Materiali:</strong>
        <span v-if="product.materials?.length"> {{ product.materials.join(', ') }}</span>
        <span v-else class="text-muted"> n/d</span>
      </div>
      <div class="mb-2">
        <strong>Colore:</strong>
        <span v-if="product.colors?.length"> {{ product.colors.join(', ') }}</span>
        <span v-else class="text-muted"> n/d</span>
      </div>
      <div class="mb-3">
        <strong>Valutazione:</strong> <span class="text-warning">{{ stars }}</span>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary" @click="toggleStock(product.id)">
          Toggle stock
        </button>
        <RouterLink class="btn btn-primary" :to="{ name: 'Prodotti' }">
          Torna all'elenco
        </RouterLink>
      </div>
    </div>
  </section>

  <section v-else>
    <div class="alert alert-info">
      Seleziona un prodotto dalla
      <RouterLink :to="{ name: 'Prodotti' }">pagina Prodotti</RouterLink>.
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',
  props: { id: { type: String, default: null } },
  data() {
    return { activeImg: 0 }
  },
  computed: {
    ...mapGetters(['byId']),
    product() {
      const id = this.id || this.$store.state.lastViewedId
      return id ? this.byId(id) : null
    },
    formattedPrice() {
      if (!this.product) return ''
      return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(this.product.price)
    },
    stars() {
      if (!this.product) return ''
      const full = Math.round(this.product.rating || 0)
      return '★'.repeat(full) + '☆'.repeat(5 - full)
    }
  },
  watch: {
    // Ogni volta che cambia il prodotto visualizzato, salvo l'id nello store
    product: {
      handler(p) {
        if (p?.id) this.$store.commit('SET_LAST_VIEWED', p.id)
      },
      immediate: true
    }
  },
  methods: {
    toggleStock(id) {
      this.$store.commit('TOGGLE_STOCK', id)
    }
  }
}
</script>