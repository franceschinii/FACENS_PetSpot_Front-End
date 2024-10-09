<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMdOrAbove = ref(false);

// Função para checar o tamanho da tela
const checkWindowSize = () => {
  isMdOrAbove.value = window.innerWidth >= 992;
};

onMounted(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkWindowSize);
});
</script>

<template>
  <div class="m-2">
    <!-- Para telas md e maiores -->
    <ul
      v-if="isMdOrAbove"
      class="navbar-nav me-lg-auto ms-lg-auto d-flex flex-row align-items-center justify-content-center gap-4"
    >
      <li class="nav-item text-nowrap">
        <router-link class="nav-link" :to="{ name: 'our-services-page' }"
          >Nossos Serviços</router-link
        >
      </li>
      <li class="nav-item text-nowrap">
        <router-link class="nav-link" :to="{ name: 'about-us-page' }"
          >Sobre Nós</router-link
        >
      </li>
      <li class="nav-item text-nowrap">
        <router-link class="nav-link" :to="{ name: 'our-partners-page' }"
          >Parceiros</router-link
        >
      </li>
      <li class="nav-item text-nowrap">
        <router-link class="nav-link" :to="{ name: 'contact-us-page' }"
          >Fale conosco</router-link
        >
      </li>
    </ul>

    <!-- Para telas menores, use o dropdown do Bootstrap -->
    <div v-else>
      <a
        class="d-flex align-items-center text-decoration-none gap-1"
        data-bs-toggle="offcanvas"
        href="#offCanvasMenu"
        role="button"
      >
        <ion-icon name="menu" class="nav-icon"></ion-icon>
      </a>

      <!-- Offcanvas com os itens do menu que abre da esquerda -->
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offCanvasMenu"
        aria-labelledby="offCanvasMenuLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offCanvasMenuLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav d-flex flex-column gap-4">
            <li class="nav-item text-nowrap">
              <router-link class="nav-link" :to="{ name: 'our-services-page' }"
                >Nossos Serviços</router-link
              >
            </li>
            <li class="nav-item text-nowrap">
              <router-link class="nav-link" :to="{ name: 'about-us-page' }"
                >Sobre Nós</router-link
              >
            </li>
            <li class="nav-item text-nowrap">
              <router-link class="nav-link" :to="{ name: 'our-partners-page' }"
                >Parceiros</router-link
              >
            </li>
            <li class="nav-item text-nowrap">
              <router-link class="nav-link" :to="{ name: 'contact-us-page' }"
                >Fale conosco</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionais */
.dropdown-menu {
  position: absolute; /* Garante que o dropdown apareça fora da navbar */
  top: 100%; /* Aparece logo abaixo do botão */
  z-index: 1050; /* Garante que fique sobre o conteúdo */
}

.nav-link {
  color: var(--text-text-color);
}
</style>
