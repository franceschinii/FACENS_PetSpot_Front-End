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
      data-bs-toggle="modal"
      data-bs-target="#searchModal"
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
      data-bs-toggle="modal"
      data-bs-target="#searchModal"
    >
      <ion-icon name="search-outline" class="text-light"></ion-icon>
    </button>
  </ul>
  <!-- Modal de Pesquisa -->
  <div
    class="modal fade"
    id="searchModal"
    tabindex="-1"
    aria-labelledby="searchModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="searchModalLabel">Pesquisar</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-body d-flex align-items-center justify-content-center"
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
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="submit" class="btn btn-primary">Pesquisar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ion-icon {
  font-size: 1.25rem;
}
</style>
