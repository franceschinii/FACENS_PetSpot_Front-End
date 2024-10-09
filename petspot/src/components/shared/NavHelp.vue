<script setup lang="ts"></script>
<template>
  <ul
    class="navbar-nav d-flex flex-row align-items-center justify-content-center gap-1 gap-md-2 gap-lg-4"
  >
    <li class="nav-item p-2">
      <a
        class="d-flex align-items-center text-decoration-none gap-1"
        data-bs-toggle="offcanvas"
        href="#offCanvasAjuda"
        role="button"
        aria-controls="offCanvasAjuda"
      >
        <ion-icon name="help-buoy" class="nav-icon"></ion-icon>
        <span class="nav-icon-span text-nowrap d-none d-md-block">Ajuda</span>
      </a>
    </li>
    <li class="nav-item p-2">
      <a
        class="d-flex align-items-center text-decoration-none gap-1"
        data-bs-toggle="offcanvas"
        href="#offCanvasRegistrar"
        role="button"
      >
        <ion-icon name="person-circle" class="nav-icon"></ion-icon>
        <span class="nav-icon-span text-nowrap d-none d-md-block"
          >Registrar-se</span
        >
      </a>
    </li>
  </ul>
</template>
<style scoped>
.nav-icon {
  font-size: 2.5rem;
  color: var(--brand-color);
}

.nav-icon-span {
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--brand-color);
}
</style>
