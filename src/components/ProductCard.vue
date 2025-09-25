<template>
<!--
Card prodotto riutilizzabile.
Mostra immagine, nome, prezzo, tag, disponibilità e un pulsante Dettagli.
Dimostra: props, computed, event binding, conditional rendering.
-->
 <div class="card h-100 shadow-sm">
  <img v-if="cover" :src="cover" class="card-img-top" :alt="product.name" />
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text small text-muted flex-grow-1">{{ product.description }}</p>

  <div class="d-flex align-items-center justify-content-between mb-2">
   <span class="fw-semibold">{{ formattedPrice }}</span>
   <span class="badge" :class="product.inStock ? 'text-bg-success' : 'text-bg-danger'">
    {{ product.inStock ? 'Disponibile' : 'Non disponibile' }}
  </span>
 </div>

 <div class="mb-3 d-flex flex-wrap gap-1">
  <span v-for="t in product.tags" :key="t" class="badge text-bg-light">#{{ t }}</span>
 </div>

 <div class="d-flex gap-2 mt-auto">
  <RouterLink class="btn btn-primary btn-sm" :to="{ name: 'Dettagli', params: { id: product.id } }">
Dettagli
  </RouterLink>
  <button class="btn btn-outline-secondary btn-sm" @click="$emit('toggle-stock', product.id)">
Toggle stock
  </button>
  </div>
 </div>
</div>
</template>


<script>
export default {
name: 'ProductCard',
props: {
product: { type: Object, required: true }
},
emits: ['toggle-stock'],
computed: {
cover() { return this.product.images?.[0] || '' },
formattedPrice() {
// Format in EURO
return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(this.product.price)
}
}
}
</script>