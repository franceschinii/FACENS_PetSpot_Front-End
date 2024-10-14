<script setup lang="ts">
import ShapeDivider1 from "../components/common/ShapeDivider1.vue";
import ShapeDivider2 from "../components/common/ShapeDivider2.vue";
import FooterComponent from "../layouts/FooterComponent.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <section id="presentation-card" class="p-5">
    <div class="container">
      <div
        class="row d-flex flex-md-row flex-column-reverse justify-content-between align-items-center"
      >
        <div
          class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-3 bg-light p-md-5 p-4 rounded-5 shadow"
        >
          <h1>Um lugar para cuidar do seu Pet!</h1>
          <p>
            A <strong>plataforma inteligente</strong> do PetSpot foi criada para
            centralizar todas as informações dos pets em um só lugar,
            facilitando o dia a dia dos tutores.
            <em>Com dedicação e carinho</em>, promovemos uma experiência
            eficiente que conecta tutores e veterinários, além de oferecer
            acesso rápido ao histórico médico dos animais. Substituímos as
            carteirinhas físicas por uma versão digital, garantindo o
            <strong>bem-estar</strong> dos pets e a
            <strong>tranquilidade</strong> de seus cuidadores.
          </p>
          <a href="#" class="btn btn-primary"
            ><span class="d-flex align-center text-light gap-2"
              >Conheça mais<ion-icon
                name="paw-outline"
                class="button-icon"
              ></ion-icon></span
          ></a>
        </div>
        <div
          class="col-12 col-md-6 d-flex justify-content-center align-items-center"
        >
          <div
            class="card bg-primary p-4 rounded-circle shadow border-2 border-light w-75 h-75"
          >
            <img
              src="../assets/images/Cachorro-PNG-1.png"
              alt="Cachorro feliz"
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <div class="d-md-block d-none"><ShapeDivider1 /></div>
  <div class="d-md-none d-block"><ShapeDivider2 /></div>
  <section id="services-row" class="p-5">
    <div class="container">
      <div
        class="row d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <div
          class="col-12 d-flex justify-content-start align-items-center mb-3"
        >
          <h2 class="text-decoration-underline">Serviços</h2>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer-section">
    <FooterComponent />
  </section>
</template>

<style scoped>
.button-icon {
  font-size: 1.2rem;
}
</style>
