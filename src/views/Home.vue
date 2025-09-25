<template>
  <main
    class="flex-grow-1 d-flex align-items-start justify-content-center"
    style="
      background: url('/images/Donna2_Orecchini.jpg') center/cover no-repeat;
      min-height: 75vh;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-8">
          <div class="bg-primary bg-opacity-75 p-5 rounded-3 shadow mt-5">
            <h1 class="display-5 fw-bold text-white">Splendi con noi!</h1>
            <p class="fs-5 text-white mt-2 mb-4">
              Scopri, confronta e recensisci i migliori orecchini.
            </p>
            <div class="d-flex gap-2">
              <RouterLink to="/prodotti" class="btn btn-light btn-lg">Prodotti</RouterLink>
              <RouterLink to="/aggiungi" class="btn btn-outline-light btn-lg">Aggiungi</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default { name: 'Home' }
</script>