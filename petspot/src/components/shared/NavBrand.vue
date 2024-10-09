<script setup lang="ts"></script>
<template>
  <div class="d-none d-md-block">
    <router-link class="navbar-brand" :to="{ name: 'landing-page' }">
      <img
        src="./../../assets/images/PetSpot-PNG.png"
        alt="PetSpot"
        class="nav-brand-icon d-inline-block align-text-top"
      />
    </router-link>
  </div>
  <div class="d-flex d-md-none">
    <router-link class="navbar-brand" :to="{ name: 'landing-page' }">
      <img
        src="./../../assets/images/Logo-Pata-PNG.png"
        alt="PetSpot"
        class="nav-brand-icon d-inline-block align-text-top"
      />
    </router-link>
  </div>
</template>
<style scoped>
.nav-brand-icon {
  width: auto;
  height: 30px;
}
</style>
