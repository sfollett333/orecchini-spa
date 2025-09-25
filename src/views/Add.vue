<template>
  <!--
    Pagina “Aggiungi” contiene la componente ProductForm. E' un form costruito con
    Bootstrap e che permette di inserire un nuovo prodotto.
    Al submit, si crea un nuovo prodotto e si salva nello store.
  -->
  <section>
    <h1 class="h4 mb-3">Aggiungi un nuovo prodotto</h1>

    <div class="row g-4">
      <div class="col-12 col-lg-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <ProductForm @submit-product="handleSubmit" />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="h6">Suggerimenti</h2>
            <ul class="small text-muted mb-0">
              <li>Gli ID devono essere univoci (es. E-0010).</li>
              <li>Puoi inserire URL immagini da servizi pubblici.</li>
              <li>I dati vengono salvati in <code>localStorage</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductForm from '../components/ProductForm.vue'

export default {
  name: 'Add',
  components: { ProductForm },
  methods: {
    async handleSubmit(product) {
      // Azione async fittizia: mostra pattern con await
      await this.$store.dispatch('addProductAsync', product)
      // Reindirizza alla pagina dettagli appena inserito
      this.$router.push({ name: 'Dettagli', params: { id: product.id } })
    }
  }
}
</script>