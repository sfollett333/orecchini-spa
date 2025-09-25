<template>
  <form @submit.prevent="onSubmit" class="row g-3">
    <div class="col-md-6">
      <label class="form-label">ID prodotto *</label>
      <input v-model.trim="form.id" class="form-control" placeholder="es. E-0010" required />
      <div class="form-text">Deve essere univoco (es. E-0010).</div>
    </div>
    <div class="col-md-6">
      <label class="form-label">Nome *</label>
      <input v-model.trim="form.name" class="form-control" required />
    </div>

    <div class="col-md-6">
      <label class="form-label">Prezzo (€) *</label>
      <input v-model.number="form.price" type="number" min="0" step="0.01" class="form-control" required />
    </div>
    <div class="col-md-6">
      <label class="form-label">Disponibile</label>
      <select v-model="form.inStock" class="form-select">
        <option :value="true">Sì</option>
        <option :value="false">No</option>
      </select>
    </div>

    <div class="col-12">
      <label class="form-label">Descrizione *</label>
      <textarea v-model.trim="form.description" rows="3" class="form-control" required />
    </div>

    <div class="col-md-6">
      <label class="form-label">Materiali (separati da virgola)</label>
      <input v-model.trim="materialsInput" class="form-control" placeholder="Argento 925, Perle" />
    </div>
    <div class="col-md-6">
      <label class="form-label">Tag (separati da virgola)</label>
      <input v-model.trim="tagsInput" class="form-control" placeholder="minimal, nichel-free" />
    </div>

    <div class="col-12">
      <label class="form-label"> /images/Donna1_Orecchini.jpg</label>
      <input v-model.trim="image1" class="form-control" placeholder="https://..." />
      <div class="form-text">Puoi incollare un link a un'immagine online.</div>
    </div>

    <div class="col-12 text-end">
      <button class="btn btn-primary" type="submit">Aggiungi prodotto</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  emits: ['submit-product'],
  data() {
    return {
      form: {
        id: '',
        name: '',
        price: 0,
        description: '',
        inStock: true,
        rating: 0
      },
      materialsInput: '',
      tagsInput: '',
      image1: ''
    }
  },
  methods: {
    onSubmit() {
      // Valida minimamente i campi richiesti
      if (!this.form.id || !this.form.name || !this.form.description || this.form.price < 0) {
        alert('Compila correttamente i campi obbligatori.')
        return
      }
      const product = {
        ...this.form,
        materials: this.materialsInput
          ? this.materialsInput.split(',').map(s => s.trim()).filter(Boolean)
          : [],
        colors: [],
        tags: this.tagsInput
          ? this.tagsInput.split(',').map(s => s.trim()).filter(Boolean)
          : [],
        images: this.image1 ? [this.image1] : []
      }
      // Emissione verso il genitore (Add.vue), che poi chiama lo store
      this.$emit('submit-product', product)

      // Reset form
      this.form = { id: '', name: '', price: 0, description: '', inStock: true, rating: 0 }
      this.materialsInput = ''
      this.tagsInput = ''
      this.image1 = ''
    }
  }
}
</script>