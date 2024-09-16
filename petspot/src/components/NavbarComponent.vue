<script setup lang="ts">
// Função para fechar qualquer offcanvas aberto e remover o backdrop manualmente
const closeOffcanvas = () => {
  // Seleciona todos os offcanvas abertos
  const offcanvasElements = document.querySelectorAll('.offcanvas.show');
  offcanvasElements.forEach((element: any) => {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(element);
    if (offcanvasInstance) {
      offcanvasInstance.hide(); // Fecha o offcanvas
    }
  });

  // Cria um listener para o evento de fechamento e remove após ser disparado
  const handleOffcanvasHidden = () => {
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove(); // Remove o fundo escuro (overlay) manualmente
    }
    document.body.classList.remove('offcanvas-open'); // Remove a classe que desativa o scroll
    document.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHidden); // Remove o listener
  };

  // Adiciona o evento para remover o backdrop após o fechamento
  document.addEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
};
</script>

<template>
  <!-- Início da seção da navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary top-0">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'landing-page' }">
        <img
          src="../assets/images/PetSpot-PNG.png"
          alt="PetSpot"
          class="nav-brand-icon d-inline-block align-text-top"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'our-services-page' }"
              >Nossos Serviços</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about-us-page' }"
              >Sobre Nós</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'our-partners-page' }"
              >Parceiros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contact-us-page' }"
              >Fale conosco</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-lg-0">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Pesquisar..."
              aria-label="Pesquisar"
            />
            <button
              class="btn btn-outline-primary d-flex align-items-center py-0 fs-5"
              type="submit"
            >
              <ion-icon name="search"></ion-icon>
            </button>
          </form>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item d-flex px-md-3 px-0 py-md-0 py-3">
            <a
              class="nav-icon"
              data-bs-toggle="offcanvas"
              href="#offCanvasAjuda"
              role="button"
              aria-controls="offCanvasAjuda"
            >
              <ion-icon name="help-buoy"></ion-icon>
              <span class="nav-icon-span mx-2">Ajuda</span>
            </a>
          </li>
          <li class="nav-item d-flex">
            <a
              class="nav-icon"
              data-bs-toggle="offcanvas"
              href="#offCanvasRegistrar"
              role="button"
            >
              <ion-icon name="person-circle"></ion-icon>
              <span class="nav-icon-span mx-2">Registrar-se</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  <!-- Final da seção da navbar -->
</template>

<style scoped>
/* Navbar Components */

.nav-brand-icon {
  width: auto;
  height: 30px;
}

.nav-icon-span {
  display: flex;
  align-items: center;
  color: var(--brand-color);
  font-size: 20px;
}

.nav-icon {
  font-size: 30px;
  display: flex;
  align-items: center;
  color: var(--brand-color);
  text-decoration: none;
}

.nav-link {
  color: var(--text-text-color);
}

@media (max-width: 767.98px) {
  .navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

/* Media Queries */

@media (min-width: 768px) {
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
}
</style>
