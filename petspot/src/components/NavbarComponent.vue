<script setup lang="ts">
import NavHelp from "./shared/NavHelp.vue";
import NavBrand from "./shared/NavBrand.vue";
import NavItem from "../components/shared/NavItem.vue";
import NavSearchForm from "../components/shared/NavSearchForm.vue";
</script>

<template>
  <!-- Início da seção da navbar -->
  <nav
    class="navbar bg-body-tertiary d-flex justify-content-between align-items-center gap-2 top-0 px-4"
  >
    <!-- NavBrand  -->
    <NavBrand />
    <!-- NavItem -->
    <NavItem />
    <!-- Seção de busca -->
    <NavSearchForm />
    <!-- Seção de ajuda e perfil -->
    <NavHelp />
  </nav>
</template>

<style>
/* Navbar Components */
.nav-icon {
  font-size: 2.5rem;
  color: var(--brand-color);
}
.nav-icon-span {
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--brand-color);
}
@media (max-width: 767.98px) {
  .navbar {
    position: static;
    top: 0;
    z-index: 1020;
  }
}

@media (min-width: 768px) {
  .navbar {
    position: static;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
}
</style>
