<script setup lang="ts"></script>
<template>
  <ul
    class="navbar-nav me-lg-auto ms-lg-auto d-none d-md-none d-lg-none d-xl-flex align-items-center justify-content-center"
  >
    <form class="d-flex gap-2" role="search">
      <input
        class="form-control"
        type="search"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
      />
      <button
        class="btn btn-outline-primary d-flex align-items-center gap-2"
        type="submit"
      >
        <ion-icon name="search" class="text-primary"></ion-icon>
      </button>
    </form>
  </ul>

  <ul
    class="navbar-nav me-auto ms-auto d-none d-md-flex d-lg-flex d-xl-none align-items-center justify-content-center"
  >
    <button
      class="btn btn-primary border-2 rounded rounded-pill d-flex align-items-center justify-content-center text-light gap-2 p-2"
    >
      Buscar
      <ion-icon name="search-outline" class="text-light"></ion-icon>
    </button>
  </ul>
  <ul
    class="navbar-nav me-auto ms-auto d-flex d-md-none d-lg-none d-xl-none align-items-center justify-content-center"
  >
    <button
      class="btn btn-primary border-2 rounded rounded-pill d-flex align-items-center justify-content-center text-light gap-2 p-2"
    >
      <ion-icon name="search-outline" class="text-light"></ion-icon>
    </button>
  </ul>
</template>
<style scoped>
ion-icon {
  font-size: 1.25rem;
}
</style>
