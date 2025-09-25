<template>
  <!-- Navbar Bootstrap 4 voci: Home, Prodotti, Aggiungi, Dettagli -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" :to="{ name: 'Home' }">
        <span class="text-primary">Orecchini</span> SPA
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMain"
        aria-controls="navMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Home' }">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Prodotti' }">Prodotti</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Aggiungi' }">Aggiungi</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'DettagliIndex' }">Dettagli</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style scoped>
.navbar-brand { letter-spacing: 0.3px; }
</style>