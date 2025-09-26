<template>
<!--
Card prodotto riutilizzabile.
Mostra immagine, nome, prezzo, tag, disponibilità e un pulsante Dettagli.
-->
 <div class="card h-100 shadow-sm">
  <!-- Mini-carousel -->
<div v-if="hasMultipleImages" class="position-relative">
  <div :id="carouselId" class="carousel slide">
    <!-- Indicatori -->
    <div class="carousel-indicators" v-if="product.images.length > 1">
      <button
        v-for="(img, idx) in product.images"
        :key="`ind-${product.id}-${idx}`"
        type="button"
        :data-bs-target="`#${carouselId}`"
        :data-bs-slide-to="idx"
        :class="{ active: idx === 0 }"
        :aria-current="idx === 0 ? 'true' : undefined"
        :aria-label="`Slide ${idx + 1}`"
      ></button>
    </div>

    <!-- Slide (1:1 per stare bene in card) -->
    <div class="carousel-inner ratio ratio-1x1 rounded-top overflow-hidden">
      <div
        v-for="(img, idx) in product.images"
        :key="img"
        class="carousel-item"
        :class="{ active: idx === 0 }"
      >
        <img
          :src="img"
          class="d-block w-100 h-100"
          style="object-fit: cover;"
          :alt="`${product.name} – immagine ${idx + 1}`"
        />
      </div>
    </div>

    <!-- Controlli -->
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${carouselId}`"
      data-bs-slide="prev"
      aria-label="Precedente"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${carouselId}`"
      data-bs-slide="next"
      aria-label="Successiva"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<!-- Fallback statico per una sola card-->
<img v-else-if="cover" :src="cover" class="card-img-top" :alt="product.name" />

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
hasMultipleImages() {
  return Array.isArray(this.product.images) && this.product.images.length > 1
},
carouselId() {
  return `carousel-${this.product.id}`
},
formattedPrice() {
// Format in EURO
return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(this.product.price)
}
}
}
</script>