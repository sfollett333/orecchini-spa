<template>
  <!-- ⚠️ Un SOLO root element: questo <div> -->
  <div>
    <!-- Navbar in alto -->
    <Navbar />

    <!-- Contenuto pagine -->
    <main class="py-4">
      <router-view />
    </main>

    <!-- Footer globale -->
    <footer class="border-top py-3 mt-4" :style="{ background: '#fafafa' }">
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
            title="Home"
          >
            <!-- Icona/logo -->
            <i class="bi bi-bootstrap-fill" style="font-size: 30px;"></i>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2025 Company, Inc
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#" aria-label="Instagram" title="Instagram">
              <i class="bi bi-instagram" style="font-size: 24px;"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#" aria-label="Facebook" title="Facebook">
              <i class="bi bi-facebook" style="font-size: 24px;"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style scoped>
/* Colore di brand (se vuoi uniformare i toni del footer) */
:root { --brand: #4f46e5; }

footer a:hover {
  color: var(--brand) !important;
}
</style>
