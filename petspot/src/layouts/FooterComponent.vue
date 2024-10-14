<script setup lang="ts">
import ShapeDivider3 from "../components/common/ShapeDivider3.vue";
</script>

<template>
  <!-- Divider acima do footer -->
  <ShapeDivider3 />

  <!-- Footer -->
  <footer class="bg-primary text-white pt-5">
    <div class="container mb-3">
      <div
        class="row d-flex flex-md-row flex-column gap-3 gap-md-0 justify-content-md-between align-items-md-start justify-content-start align-items-between"
      >
        <!-- Seção sobre nós -->
        <div
          class="col-lg-4 col-md-4 py-2 px-4 d-flex flex-column align-items-center"
        >
          <h5 class="text-uppercase text-white">Sobre o PetSpot</h5>
          <p class="text-white">
            O PetSpot é uma plataforma criada para centralizar informações e
            facilitar o cuidado com os seus pets. Nossa missão é proporcionar
            praticidade e segurança para tutores e veterinários.
          </p>
        </div>

        <!-- Links rápidos -->
        <div
          class="col-lg-4 col-md-4 p-2 d-flex flex-column align-items-center"
        >
          <h5 class="text-uppercase text-white">Links rápidos</h5>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <router-link
                class="text-white"
                :to="{ name: 'our-services-page' }"
              >
                Nossos Serviços
              </router-link>
              <span>|</span>
            </li>
            <li class="list-inline-item">
              <router-link class="text-white" :to="{ name: 'about-us-page' }">
                Sobre Nós
              </router-link>
            </li>
          </ul>
          <ul class="list-inline">
            <li class="list-inline-item">
              <router-link
                class="text-white"
                :to="{ name: 'our-partners-page' }"
              >
                Parceiros
              </router-link>
              <span>|</span>
            </li>
            <li class="list-inline-item">
              <router-link class="text-white" :to="{ name: 'contact-us-page' }">
                Fale Conosco
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Informações de contato -->
        <div
          class="col-lg-4 col-md-4 p-2 d-flex flex-column align-items-center"
        >
          <h5 class="text-uppercase text-white">Contato</h5>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center gap-2">
              <ion-icon name="mail"></ion-icon>
              contato@petspot.com
            </li>
            <li class="d-flex align-items-center gap-2">
              <ion-icon name="location"></ion-icon>
              Rua Exemplo, 123, São Paulo, SP
            </li>
            <li class="d-flex align-items-center gap-2">
              <ion-icon name="call"></ion-icon>
              (11) 99999-9999
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Seção de copyright -->
    <div class="container-fluid">
      <div
        class="row d-flex justify-content-center align-items-center text-center p-3 bg-secondary text-white"
      >
        <div
          class="col-12 col-md-6 d-flex justify-content-around align-items-center gap-1"
        >
          <a href="#" class="text-white">Termos de uso</a>
          <span>|</span>
          <a href="#" class="text-white"
            >© 2024 PetSpot. Todos os direitos reservados.</a
          >
          <span>|</span>
          <a href="#" class="text-white">Política de Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: -1px;
}
footer .list-unstyled {
  list-style: none;
  padding: 0;
}

footer .bg-primary {
  background-color: #007bff !important; /* Azul */
}

footer .bg-secondary {
  background-color: #6c757d !important; /* Cinza */
}

footer a {
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
