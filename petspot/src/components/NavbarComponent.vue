<script setup lang="ts">
import NavBrand from "./shared/NavBrand.vue";
import NavItem from "../components/shared/NavItem.vue";
import NavSearchForm from "../components/shared/NavSearchForm.vue";

// Função para fechar qualquer offcanvas aberto e remover o backdrop manualmente
const closeOffcanvas = () => {
  // Seleciona todos os offcanvas abertos
  const offcanvasElements = document.querySelectorAll(".offcanvas.show");
  offcanvasElements.forEach((element) => {
    const offcanvasInstance = (window as any).bootstrap.Offcanvas.getInstance(
      element as HTMLElement
    );
    if (offcanvasInstance) {
      offcanvasInstance.hide(); // Fecha o offcanvas
    }
  });

  // Cria um listener para o evento de fechamento e remove após ser disparado
  const handleOffcanvasHidden = () => {
    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (backdrop) {
      backdrop.remove(); // Remove o fundo escuro (overlay) manualmente
    }
    document.body.classList.remove("offcanvas-open"); // Remove a classe que desativa o scroll
    document.removeEventListener("hidden.bs.offcanvas", handleOffcanvasHidden); // Remove o listener
  };

  // Adiciona o evento para remover o backdrop após o fechamento
  document.addEventListener("hidden.bs.offcanvas", handleOffcanvasHidden);
};
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
    <ul
      class="navbar-nav d-flex flex-row align-items-center justify-content-center gap-1 gap-md-2 gap-lg-4"
    >
      <li class="nav-item p-2">
        <a
          class="nav-icon d-flex align-content-center gap-1"
          data-bs-toggle="offcanvas"
          href="#offCanvasAjuda"
          role="button"
          aria-controls="offCanvasAjuda"
        >
          <ion-icon name="help-buoy"></ion-icon>
          <span class="nav-icon-span text-nowrap d-none d-md-block">Ajuda</span>
        </a>
      </li>
      <li class="nav-item p-2">
        <a
          class="nav-icon d-flex align-content-center gap-1"
          data-bs-toggle="offcanvas"
          href="#offCanvasRegistrar"
          role="button"
        >
          <ion-icon name="person-circle"></ion-icon>
          <span class="nav-icon-span text-nowrap d-none d-md-block"
            >Registrar-se</span
          >
        </a>
      </li>
    </ul>
  </nav>

  <!-- Offcanvas Ajuda -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offCanvasAjuda"
    aria-labelledby="offCanvasAjudaLabel"
  >
    <div class="offcanvas-header">
      <h4 class="offcanvas-title" id="offCanvasAjudaLabel">
        Bem vindo(a) a Central de Ajuda do PetSpot.
      </h4>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Entrar em contato</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Entre em contato conosco pelo nosso e-mail, e receba ajuda direta de
            nossos desenvolvedores
          </h6>
          <a
            href="mailto:gruposhankara@gmail.com?body=Olá%20preciso%20de%20ajuda,%20poderiam%20me%20ajudar%3F"
            class="btn btn-outline-primary"
            >Enviar email</a
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas Registrar -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offCanvasRegistrar"
    aria-labelledby="offCanvasRegistrarLabel"
  >
    <div class="offcanvas-header">
      <h4 class="offcanvas-title" id="offCanvasRegistrarLabel">
        Bem vindo(a) ao PetSpot!
      </h4>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Crie sua conta PetSpot</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Tenha acesso a todos os recursos do PetSpot, podendo cadastrar seus
            pets e gerenciá-los.
          </h6>
          <router-link
            :to="{ name: 'register-page' }"
            @click="closeOffcanvas"
            class="btn btn-outline-primary"
            >Registrar-se</router-link
          >
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Entre na sua conta PetSpot</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Acesse o painel administrativo da sua conta PetSpot, e gerencie seus
            Pets.
          </h6>
          <router-link
            :to="{ name: 'login-page' }"
            @click="closeOffcanvas"
            class="btn btn-outline-primary"
            >Conectar-se</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Navbar Components */

.nav-icon {
  font-size: 30px;
  display: flex;
  align-items: center;
  color: var(--brand-color);
  text-decoration: none;
}

.nav-icon-span {
  display: flex;
  align-items: center;
  color: var(--brand-color);
  font-size: 20px;
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
