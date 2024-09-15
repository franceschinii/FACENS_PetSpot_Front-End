<script setup lang="ts"></script>

<template>
  <!-- Início da seção da navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary top-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img
          src="../assets/images/PetSpot-PNG.png"
          alt="PetSpot"
          class="nav-brand-icon d-inline-block align-text-top"
        />
      </a>
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
            <a class="nav-link" href="#sectionOurServices">Nossos Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sectionAboutUs">Sobre Nós</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sectionPartners">Parceiros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sectionContact">Fale conosco</a>
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
              aria-controls="offCanvasRegistrar"
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
          <a
            href="../Website-Portal/user-register.html"
            class="btn btn-outline-primary"
            >Registrar-se</a
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
          <a
            href="../Website-Portal/user-login.html"
            class="btn btn-outline-primary"
            >Conectar-se</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Final da seção da navbar -->
</template>

<style scoped>
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
  color: var(--text-color);
}
</style>
